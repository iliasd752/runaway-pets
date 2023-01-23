"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Finder, Pet
from api.utils import generate_sitemap, APIException
import json
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)



@api.route('/hello', methods=['GET'])
def handle_hello():

    users = User.query.all()
    test =  list(map(lambda x: x.serialize(), users))
    response = jsonify(test)
    
    return response

@api.route('/register', methods=['POST'])
def add_user():

    request_body = request.json
    if (request_body["name"] == None):
        return "The name is missing", 404
    if (request_body["last_name"] == None):
        return "The last name is missing", 404
    if (request_body["email"] == None):
        return "The email is missing", 404
    if (request_body["password"] == None):
        return "The password is missing", 404
    if (request_body["phone"] == None):
        return "The phone is missing", 404
    
    user = User(request_body["name"], request_body["last_name"], request_body["email"], request_body["password"], request_body["phone"])
    
    db.session.add(user)
    db.session.commit()

    
    
    return jsonify({"user": user.serialize()}), 200

@api.route('/register_pet', methods=['POST'])
@jwt_required()
def add_pet():

    request_body = request.json
    if (request_body["name"] == None):
        return "The name is missing", 404
    if (request_body["species"] == None):
        return "The species is missing", 404
    if (request_body["important"] == None):
        return "The important is missing", 404
    if (request_body["image"] == None):
        return "The password is missing", 404  
    pet = Pet(request_body["name"], request_body["species"], request_body["important"], request_body["image"], request_body["user_id"], request_body["qr_code"] )
    db.session.add(pet)
    db.session.commit()
    
    return jsonify({"pet": pet.serialize()}), 200

@api.route('/delete_pet', methods=['DELETE'])
@jwt_required()
def delete_pet():

    qrcode = request.json.get("qr_code", None)
    if qrcode == None:
        return "Can't find qr_code and pet to delete", 404
    pet= Pet.query.filter_by(qr_code=qrcode).first()
    db.session.delete(pet)
    db.session.commit()
    
    return jsonify({"pet": pet.serialize(),"message": "this pet was deleted"}), 200


@api.route('/find_pet', methods=['POST'])
def find_pet():

    qrcode = request.json.get("qr_code", None)
    if qrcode == None:
        return "Can't find the pet", 404
    pet= Pet.query.filter_by(qr_code=qrcode).first()

    user= User.query.filter_by(id=pet.user_id).first()
    return jsonify({"pet": pet.serialize(), "user":user.serialize()}), 200

@api.route("/token", methods=["POST"])
def get_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email == None:
        return "The email is missing", 404
    if password == None:
        return "The last password is missing", 404
    user = User.query.filter_by(email=email).first()
    if (user == None):
        return "user does not exist", 404
    if user.password != password:
        return "wrong password", 404
    userId = user.id
    access_token = create_access_token(identity=email)
    return jsonify(
        {"user_id": userId,
        "access_token": access_token}), 200

@api.route('/scan_pet', methods=['POST'])
def scan_pet():

    request_body = request.json
    request_qrcode = request_body["qr_code"]
    pet = Pet.query.filter_by(qr_code=request_qrcode).first()
    
    finder = Finder(request_body["name"], request_body["phone"], request_body["lat"], request_body["lng"])
    
    db.session.add(finder)
    db.session.commit()

    pet.finder_id = finder.id
    db.session.commit()
    
    test = "The owner has been notified"
    response = jsonify(test)
    
    return response

@api.route('/hellopet', methods=['GET'])
def give_pet():

    users = Pet.query.all()
    test =  list(map(lambda x: x.serialize(), users))
    response = jsonify(test)
    
    return response

@api.route('/petlist', methods=['POST'])
@jwt_required()
def list_pets():

    request_body = request.json
    if request_body["user_id"] == None:
        return "Please log in again", 404
    request_userId = request_body["user_id"]


    pet = Pet.query.filter_by(user_id=request_userId).all()
    if pet == []:
        return jsonify({"pets": []}), 200
 
    return jsonify({"pets": list(map(lambda x: x.serialize(), pet))}), 200

@api.route('/delete', methods=['DELETE'])
def delete_all():

    users = Finder.query.delete()
    db.session.commit()
    return "ok"