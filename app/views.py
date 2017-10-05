# views.py

from flask import render_template,make_response

from app import app

@app.route('/')
def index():
    resp = make_response(render_template('index.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/about')
def about():
    resp = make_response(render_template('about.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp
