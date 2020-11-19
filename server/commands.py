import click
from flask.cli import with_appcontext
from .model import db


@click.command(name="create_tables")
@with_appcontext
def create_tables():
    db.create_all()

@click.command(name="say_hi")
@with_appcontext
def say_hi():
    print('hi')
