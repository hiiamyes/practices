FROM node:latest
WORKDIR /app
COPY package.json /app/src/package.json
RUN cd /app/src; npm i
COPY . /app
EXPOSE 3000
CMD npm start