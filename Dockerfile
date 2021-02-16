FROM node:15.4.0
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
RUN npm install --only-prod
COPY ./dist ./dist
EXPOSE 5000
CMD npm start