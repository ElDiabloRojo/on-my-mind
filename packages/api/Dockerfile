FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install && npm install typescript -g

# Bundle app source
COPY . .

# TypeScript
RUN tsc

# Start
EXPOSE 6060
CMD [ "node", "./build/server.js" ]