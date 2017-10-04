# views.py

from flask import render_template

from app import app

from flask_cachecontrol import (
    FlaskCacheControl,
    cache)
flask_cache_control = FlaskCacheControl()
flask_cache_control.init_app(app)

@app.route('/')
@cache(max_age=604800, public=True)
def index():
    return render_template("index.html")

@app.route('/about')
@cache(max_age=604800, public=True)
def about():
    return render_template("about.html")
