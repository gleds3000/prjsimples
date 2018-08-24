FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
<<<<<<< HEAD
CMD [ "npm", "start" ]
=======
CMD [ "npm", "start" ]
>>>>>>> 5efd7ecf5b549ec1159eeb94ae917278a6b83d1d
