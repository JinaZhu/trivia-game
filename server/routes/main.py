
from flask import Blueprint
import os

main = Blueprint('main', __name__,
                 static_folder=os.path.abspath("build"))


@main.route('/', methods=['GET'])
def home():
    return main.send_static_file('index.html')