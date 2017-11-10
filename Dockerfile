FROM node:alpine

ADD package.json .

RUN npm i --production -q

ADD . .

RUN echo docker-file-ran