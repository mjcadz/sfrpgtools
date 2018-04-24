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

@app.route('/armor-generator')
def armorGenerator():
    resp = make_response(render_template('armor-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/character-sheet')
def characterSheet():
    resp = make_response(render_template('character-sheet.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/character-concept-generator')
def characterGenerator():
    resp = make_response(render_template('character-concept-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/changelog')
def changelog():
    resp = make_response(render_template('changelog.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/encounter-generator')
def encounterGenerator():
    resp = make_response(render_template('encounter-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/settlement-generator')
def settlementGenerator():
    resp = make_response(render_template('settlement-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/ship-generator')
def shipGenerator():
    resp = make_response(render_template('ship-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp
