FROM node:20-alpine

WORKDIR /app

COPY package* .
COPY ./prisma .


RUN npm install
RUN npx prisma generate

COPY . .

CMD ["npm", "run", "dev"]