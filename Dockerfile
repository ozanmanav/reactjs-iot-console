FROM node:carbon-alpine as builder
RUN apk add git
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:carbon-alpine
RUN npm install serve
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build ./dist
CMD ["serve", "-p", "80", "-s", "."]