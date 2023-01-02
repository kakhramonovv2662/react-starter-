# stage1 as builder
FROM node:14-alpine as builder

WORKDIR /app

# copy the package.json to install dependencies
COPY package*.json /app
COPY . /app

# Install the dependencies and make the folder
RUN npm i -g pnpm
RUN pnpm install

# Build the project and copy the files
RUN pnpm run build
RUN ls -l && pwd

# STAGE 2w

FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/dist/ /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]