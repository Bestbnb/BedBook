FROM node:10.11.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

EXPOSE 1337

CMD [ "npm", "start" ]