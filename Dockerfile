FROM node:10.15.3
WORKDIR /client
COPY package*.json /client/
RUN npm install
COPY . /client/
EXPOSE 3000
CMD ["npm", "start"]