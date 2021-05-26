FROM node:12.2.0-alpine
RUN mkdir -p /frontend
WORKDIR /frontend
COPY package.json package-lock.json /frontend/
RUN npm install
COPY /client /frontend/

