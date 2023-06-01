FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

FROM node:alpine As production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY  . .

COPY --from=development /usr/src/app/dist ./dist

CMD [ "node" ,"dist/apps/subscription/main"]