from flask import Flask
from flask_cors import CORS
import json
import random

app = Flask(__name__)
CORS(app)

hsk1_json = open('./hsk-vocab/hsk-level-1.json', encoding='utf-8')
hsk1 = json.loads(hsk1_json.read())

hsk2_json = open('./hsk-vocab/hsk-level-2.json', encoding='utf-8')
hsk2 = json.loads(hsk2_json.read())

hsk3_json = open('./hsk-vocab/hsk-level-3.json', encoding='utf-8')
hsk3 = json.loads(hsk3_json.read())

hsk4_json = open('./hsk-vocab/hsk-level-4.json', encoding='utf-8')
hsk4 = json.loads(hsk4_json.read())

hsk5_json = open('./hsk-vocab/hsk-level-5.json', encoding='utf-8')
hsk5 = json.loads(hsk5_json.read())

hsk6_json = open('./hsk-vocab/hsk-level-6.json', encoding='utf-8')
hsk6 = json.loads(hsk6_json.read())

options = [0, 1, 2, 3, 4, 5]
hsk = [hsk1, hsk2, hsk3, hsk4, hsk5, hsk6]

@app.route("/vocab", methods=['GET'])
def get_vocab():
    n = random.choice(options)
    hsk_set = hsk[n]
    s = random.choice(hsk_set)
    s["level"] = n + 1
    return s