from flask import Flask
import os

from .commands import create_tables
from .model import db
from .routes.main import main
from .routes.api import api


def create_app(config_file="settings.py"):
    app = Flask(__name__, static_folder=os.path.abspath(
        "build"), static_url_path='/')

    app.config.from_pyfile(config_file)
    db.init_app(app)

    app.register_blueprint(main)
    app.register_blueprint(api)

    app.cli.add_command(create_tables)

    return app

    