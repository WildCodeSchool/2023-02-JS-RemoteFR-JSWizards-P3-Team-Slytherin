FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY ./src /app/src
COPY ./public /app/public
COPY ./*.js /app/
COPY ./*.json /app/
COPY ./*.sql /app/
RUN npm i

CMD npm start