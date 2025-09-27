FROM node:18 as builder

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./public /app/public
COPY ./src /app/src
COPY ./*.js /app/
COPY ./*.json /app/
COPY ./*.html /app/

RUN npm install