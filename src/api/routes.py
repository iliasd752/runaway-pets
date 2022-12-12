"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import json

api = Blueprint('api', __name__)



@api.route('/hello', methods=['GET'])
def handle_hello():

    users = User.query.all()
    test =  list(map(lambda x: x.serialize(), users))
    response = jsonify(test)
    
    return response

@api.route('/hello2', methods=['POST', 'GET'])
def add_user():

    request_body = request.json
    user = User(request_body["name"], request_body["last_name"], request_body["email"], request_body["password"], request_body["phone"])
    db.session.add(user)
    db.session.commit()
    
    users = User.query.all()
    test =  list(map(lambda x: x.serialize(), users))
    response = jsonify(test)
    
    return response