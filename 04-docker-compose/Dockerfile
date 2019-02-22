FROM node:latest
WORKDIR /app
COPY . /app
RUN npm i
EXPOSE 3000
RUN npm i -g nodemon
CMD ["nodemon", "src/index.js"]