import csv
import json
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def csv_to_json(csvFilePath):
  jsonArray = []

  with open(csvFilePath, encoding='utf-8') as csvf:
    csvReader = csv.DictReader(csvf)

    for row in csvReader:
      jsonArray.append(row)

    jsonString = json.dumps(jsonArray, indent=4)
    return(jsonString)

print(csv_to_json(r'classes.csv'))

@app.route('/leaderboard')
def points():
    if request.method == 'GET':
        return csv_to_json(r'classes.csv')

app.run(host='0.0.0.0', port=5000, debug=True)