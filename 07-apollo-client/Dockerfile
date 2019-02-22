FROM node:latest
WORKDIR /app
COPY package.json /app/src/package.json
RUN cd /app/src; npm i
COPY . /app
# RUN npm i
EXPOSE 3000
# RUN npm i -g nodemon
# CMD ["nodemon", "src/index.js"]
CMD yarn start