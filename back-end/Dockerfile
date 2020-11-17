FROM python:3.9-buster

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN pip install pymongo flask yfinance requests beautifulsoup4 flask_cors

COPY . .

CMD [ "python", "server.py" ]