from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

hsk1_json = open('./hsk-vocab/hsk-level-1.json', encoding='utf-8')
hsk1 = json.loads(hsk1_json.read())

@app.route("/vocab", methods=['GET'])
def get_vocab():
    return hsk1[0]