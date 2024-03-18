FROM node:20-alpine

FROM node:20

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]