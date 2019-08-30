FROM node:carbon-alpine as builder
RUN apk add git
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:carbon-alpine
RUN npm install serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]