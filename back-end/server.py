from flask import Flask, jsonify
import requests
from flask_cors import CORS
from os import link
from bs4 import BeautifulSoup
import re
import json
import yfinance as yf
from pymongo import MongoClient

# mongo DB
client = MongoClient()
client = MongoClient('localhost', 27017)
db = client.news
posts = db.posts

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
    API_KEY = 'c63006ef6b7840179495ee8c4a42adb6'
    url = ('http://newsapi.org/v2/top-headlines?'
           f'country={country}&'
           'pageSize=100&'
           f'apiKey={API_KEY}')
    response = requests.get(url)
    return response.content

# world news


@app.route('/world', methods=['GET'])
def world():
    API_KEY = 'c63006ef6b7840179495ee8c4a42adb6'
    url = ('https://newsapi.org/v2/everything?'
           'domains=bbc.com,cnn.com,theguardian.com'
           'sortBy=popularity&'
           'pageSize=100&'
           'language=en&'
           f'apiKey={API_KEY}')
    response = requests.get(url)
    return response.content

# sport


@app.route('/sport/<q>', defaults={'language': 'en'}, methods=['GET'])
@app.route('/sport/<q>/<language>', methods=['GET'])
def sport(q, language):
    API_KEY = 'c63006ef6b7840179495ee8c4a42adb6'
    url = ('https://newsapi.org/v2/everything?'
           f'q={q}&'
           'pageSize=20&'
           f'language={language}&'
           f'apiKey={API_KEY}')
    response = requests.get(url)
    return response.content


# currency


@app.route('/currency/<fromCurrency>/<toCurrency>', methods=['GET'])
def currency(fromCurrency, toCurrency):
    collection = db.currency
    x = list(collection.find())
    if len(x) == 0:
        API_KEY = 'H29UTR8EQ0QTCJR2'
        url = ('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&'
               f'from_currency={fromCurrency.upper()}&'
               f'to_currency={toCurrency.upper()}&'
               f'apikey={API_KEY}')
        data = requests.get(url)
        collection.insert_one({'currency': data.content})
        return data.content
    else:
        return x[0]['currency']

# company look up


@app.route('/company/<company_name>', methods=['GET'])
def company(company_name):
    API_KEY = 'H29UTR8EQ0QTCJR2'
    url = ('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&'
           f'keywords={company_name}&'
           f'apikey={API_KEY}')
    response = requests.get(url)
    return response.content

# daily stock


@app.route('/stock/<symbol>', methods=['GET'])
def stock(symbol):
    API_KEY = 'H29UTR8EQ0QTCJR2'
    url = ('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&'
           f'symbol={symbol}&'
           f'apikey={API_KEY}')
    response = requests.get(url)
    return response.content

# yahoo finance API


@app.route('/yahoo', methods=['GET'])
def yahoo():
    collection = db.stock
    x = list(collection.find())
    if len(x) == 0:
        data = yf.download(
            tickers="SPY AAPL MSFT DIS GOOGL BP KO FB WMT",
            period="ytd",
            interval="1wk",
            group_by='ticker',
            auto_adjust=True,
            prepost=True)
        json_file = data.xs('Close', level=1, axis=1).reset_index().to_json(
            orient='records')
        collection.insert_one({'stocks': json.loads(json_file)})
        return json_file
    else:
        return jsonify(x[0]['stocks'])


# web scraping Nature
@app.route('/science', methods=['GET'])
def science():
    collection = db.science
    x = list(collection.find())
    if len(x) == 0:
        res = requests.get('https://www.nature.com/news')

        soup = BeautifulSoup(res.text, 'html.parser')

        # link to website
        links = []
        for link in soup.findAll('a', class_='u-flex__container', attrs={'href': re.compile("^http://")}):
            links.append(link.get('href'))

        # photo to article
        articles = soup.find_all('div', class_='u-responsive-ratio')
        imagesEl = []

        for article in articles:
            imagesEl.append(article.findAll('img'))

        imagesSrc = []

        for image in imagesEl:
            imagesSrc.append(['http:' + x['src'] for x in image])

        flat_list_images = []
        for sublist in imagesSrc:
            for item in sublist:
                flat_list_images.append(item)

        # article title
        subtitle = []
        titles = []
        title = soup.find_all('div', class_='c-card__copy--major')
        for el in title:
            subtitle.append(el.find_all(class_='c-card__title'))
        flat_title = []
        for sublist in subtitle:
            for item in sublist:
                flat_title.append(item)
        for text in flat_title:
            titles.append(text.getText())

        # description
        description = []
        descrip = soup.find_all('div', class_='c-card__standfirst--major')
        for text in descrip:
            description.append(text.getText())

        # date
        span = []
        date = []
        dat = soup.find_all('div', class_='c-card__footer--major')
        for s in dat:
            span.append(s.find_all('span', class_='c-card__date'))
        flat_span = []
        for sublist in span:
            for item in sublist:
                flat_span.append(item)
        for text in flat_span:
            date.append(text.getText())

        # creating JSON
        length = len(date)
        data = []

        for x in range(length):
            data.append({'link': links[x], 'img': flat_list_images[x],
                         'title': titles[x], 'description': description[x],
                         'date': date[x]
                         })
        json_data = json.dumps(data)
        return json_data
    else:
        return x


if __name__ == "__main__":
    app.run(debug=True)
