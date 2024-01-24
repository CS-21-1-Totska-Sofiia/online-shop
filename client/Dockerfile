FROM node
WORKDIR /storeFront
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5010
CMD [ "npm", "run", "dev" ]