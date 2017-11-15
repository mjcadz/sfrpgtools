# views.py

from flask import render_template,make_response

from app import app

@app.route('/')
def index():
    resp = make_response(render_template('index.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/weapon-generator')
def weaponGenerator():
    resp = make_response(render_template('weapon-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/system-generator')
def systemGenerator():
    resp = make_response(render_template('system-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/loot-generator')
def lootGenerator():
    resp = make_response(render_template('loot-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/monster-builder')
def monsterBuilder():
    resp = make_response(render_template('monster-builder.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/monster-builder0')
def monsterBuilder0():
    resp = make_response(render_template('monster-builder0.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp
