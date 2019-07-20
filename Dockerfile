FROM node:carbon-alpine as builder
RUN apk add git
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:carbon-alpine
EXPOSE 3000
WORKDIR /app
ENTRYPOINT ["node", "server.js"]
COPY server/package.json package.json
RUN npm install
COPY server/server.js .
COPY --from=builder /usr/src/app/server/dist ./dist
COPY server/favicon.ico ./dist/favicon.ico
