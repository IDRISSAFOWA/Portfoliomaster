FROM node:18-alpine
WORKDIR /usr/app
COPY ./ ./

# RUN npm test - if you want to test before to build
RUN npm install --legacy-peer-deps --force

CMD ["npm", "start"]

# run nginx with global directives and daemon off



