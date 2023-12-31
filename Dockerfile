FROM node:18.17.1 AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
RUN apk add --no-cache bash
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY .env env.sh ./
RUN chmod +x env.sh
COPY --from=build /app/build .
CMD ["/bin/bash", "-c", "./env.sh && nginx -g \"daemon off;\""]