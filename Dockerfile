FROM node:18-alpine
WORKDIR /app
COPY . .
COPY package.json .
# COPY yarn.lock .
RUN yarn install
CMD [ "yarn", "start" ]