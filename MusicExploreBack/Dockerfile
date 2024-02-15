FROM node:slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV DOCKER=true
ENV DATABASE_URL=mongodb://mongo:27017/songs

CMD [ "npm", "start" ]