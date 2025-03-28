FROM node:20.12 AS build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build
COPY ./dist .


FROM nginx:stable-alpine3.20-perl

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
