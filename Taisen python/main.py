import csv
import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
import pandas as pd

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

@app.route('/leaderboard', methods=['GET', 'POST'])
def points():
    if request.method == 'GET':
        return csv_to_json(r'classes.csv')
    if request.method == 'POST':
        # Serialize the data into a dictionary
        request_data = json.loads(request.data)
        # Read the CSV
        leaderboard = pd.read_csv(r'classes.csv')
        # Update the value
        if (int(request_data['grade']) in leaderboard['grade'].tolist()):
            leaderboard.loc[leaderboard['grade'] == int(request_data['grade']), 'points'] += request_data['points']
        else:
            leaderboard.loc[request_data['grade']] = [request_data['grade'], request_data['points']]
        # Save the CSV
        leaderboard.to_csv(r'classes.csv', index=False)
        return request_data

app.run(host='0.0.0.0', port=5000, debug=True)
