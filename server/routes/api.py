
from flask import Blueprint, jsonify, request
from flask_cors import CORS

from ..model import Question, db

api = Blueprint('api', __name__)

CORS(api)

@api.route('/api/question', methods=['POST'])
def add_question():
    question_response = request.get_json()
    print("**************", question_response)
    question = question_response["question"]
    options = (",").join(question_response["options"])
    print(type(options))
    answer = question_response["answer"]

    try:
        print('hi')
        new_question = Question(question=question, option=options, answer=answer)
        print('@@@@@@@@@@@@@@@@helllo')
        db.session.add(new_question)
        db.session.commit()
        return jsonify('yayy')
    except: 
        return jsonify("there was an issue adding a question")

