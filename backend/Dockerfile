FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY ./src /app/src
COPY ./*.js /app/
COPY ./*.json /app/
COPY ./*.sql /app/
RUN npm i

CMD npm start