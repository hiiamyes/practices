FROM node:12.4.0-alpine
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 3000
CMD ["node", "src/index.js"]