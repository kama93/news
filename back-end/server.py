from flask import Flask, jsonify
import requests
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# weather
@app.route('/weather/<country>/<city>', methods=['GET'])
def weather(country, city):
    API_KEY = '5630746449064f969f3889643b4b86a7'
    url = f'https://api.weatherbit.io/v2.0/current?city={city}=&country={country}&key={API_KEY}'
    resp = requests.get(url)
    return resp.content

# news
@app.route('/news/<country>', methods=['GET'])
def news(country):
    API_KEY='c63006ef6b7840179495ee8c4a42adb6'
    url = ('http://newsapi.org/v2/top-headlines?'
       f'country={country}&'
       'pageSize=100&'
       f'apiKey={API_KEY}')
    response = requests.get(url)
    return response.content

# world news
@app.route('/world', methods=['GET'])
def world():
    API_KEY='c63006ef6b7840179495ee8c4a42adb6'
    url = ('https://newsapi.org/v2/everything?'
        'domains=bbc.com,cnn.com,theguardian.com'
        'language=en&'
        'sortBy=popularity&'
       'pageSize=100&'
       f'apiKey={API_KEY}')
    response = requests.get(url)
    return response.content

if __name__ == "__main__":
    app.run(debug=True)
