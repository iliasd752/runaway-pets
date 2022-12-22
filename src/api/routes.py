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
    user = User(request_body["name"], request_body["last_name"], request_body["email"], request_body["password"], request_body["phone"])
    db.session.add(user)
    db.session.commit()
    
    users = User.query.all()
    test =  list(map(lambda x: x.serialize(), users))
    response = jsonify(test)
    
    return response

@api.route('/register_pet', methods=['POST'])
def add_pet():

    request_body = request.json
    pet = Pet(request_body["name"], request_body["species"], request_body["important"], request_body["image"], request_body["user_id"], request_body["qr_code"] )
    db.session.add(pet)
    db.session.commit()
    
    pets = Pet.query.all()
    test =  list(map(lambda x: x.serialize(), pets))
    response = jsonify(test)
    
    return response

@api.route("/token", methods=["POST"])
def get_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/scan_pet', methods=['POST'])
def scan_pet():

    request_body = request.json
    request_qrcode = request_body["qr_code"]
    pet = Pet.query.filter_by(qr_code=request_qrcode).first()
    
    finder = Finder(request_body["name"], request_body["phone"], request_body["location"])
    
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

@api.route('/delete', methods=['DELETE'])
def delete_all():

    users = Finder.query.delete()
    db.session.commit()
    return "ok"