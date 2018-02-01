from flask import Flask, url_for
from flask_sslify import SSLify


# Initialize the app
app = Flask(__name__, instance_relative_config=True)
sslify = SSLify(app)

# Load the views
from app import views

# Load the config file
app.config.from_object('config')
