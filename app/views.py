# views.py

from flask import render_template,make_response

from app import app

@app.route('/')
def index():
    resp = make_response(render_template('index.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/weapon-generator.html')
def weaponGenerator():
    resp = make_response(render_template('weapon-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/system-generator.html')
def systemGenerator():
    resp = make_response(render_template('system-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/loot-generator.html')
def lootGenerator():
    resp = make_response(render_template('loot-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/monster-builder.html')
def monsterBuilder():
    resp = make_response(render_template('monster-builder.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/armor-generator.html')
def armorGenerator():
    resp = make_response(render_template('armor-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/character-sheet.html')
def characterSheet():
    resp = make_response(render_template('character-sheet.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/character-concept-generator.html')
def characterGenerator():
    resp = make_response(render_template('character-concept-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/encounter-generator.html')
def encounterGenerator():
    resp = make_response(render_template('encounter-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/settlement-generator.html')
def settlementGenerator():
    resp = make_response(render_template('settlement-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/starship-generator.html')
def starshipGenerator():
    resp = make_response(render_template('starship-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/inventory-generator.html')
def inventoryGenerator():
    resp = make_response(render_template('inventory-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp

@app.route('/trap-generator.html')
def trapGenerator():
    resp = make_response(render_template('trap-generator.html'))
    resp.headers.set('Cache-Control', "public, max-age=604800")
    return resp
