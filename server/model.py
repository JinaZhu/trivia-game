from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Question(db.Model):
    __tablename__ = "questions"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    question = db.Column(db.String, nullable=False)
    option = db.Column(db.String, nullable=False)
    answer = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"<question={self.question}>"


