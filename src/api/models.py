import os
import sys
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    def __init__(self, name, last_name, email, password, phone):
        self.name = name
        self.last_name = last_name
        self.email = email
        self.password = password
        self.phone = phone

class Finder(db.Model):
    __tablename__ = 'finder'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    location = db.Column(db.String(120), unique=False, nullable=False)


    def __repr__(self):
        return f'<Finder {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }
    def __init__(self, name, phone, location):
        self.name = name
        self.phone = phone
        self.location = location

class Pet(db.Model):
    __tablename__ = 'pet'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    species = db.Column(db.String(120), unique=False, nullable=False)
    important = db.Column(db.String(120), unique=False, nullable=True)
    qr_code = db.Column(db.String(80), unique=False, nullable=False)
    image = db.Column(db.Text, unique=False, nullable=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    finder_id = db.Column(db.Integer, ForeignKey('finder.id'))

    def __repr__(self):
        return f'<Pet {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "finder_id": self.finder_id,
            "qr_code": self.qr_code,
            "important": self.important,
            "image": self.image,
            "species": self.species
            # do not serialize the password, its a security breach
        }
    def __init__(self, name, species, important, image, user_id, qr_code):
        self.name = name
        self.species = species
        self.important = important
        self.image = image
        self.user_id = user_id
        self.qr_code = qr_code
