FROM node:12.2.0-alpine
RUN mkdir -p /backend
WORKDIR /backend
COPY package.json package-lock.json /backend/
RUN npm install
RUN apk --no-cache add git
COPY /server /backend/