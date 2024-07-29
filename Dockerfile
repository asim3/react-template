FROM node:20.16-bullseye-slim AS build

RUN apt install bash

ENV APP_HOME=/home/node/app

COPY --chown=d_user --chmod=550  ./app $APP_HOME

USER node



FROM nginx:mainline-alpine3.17-slim AS main

RUN adduser -S -s /bin/bash -u 1000 -D d_user

COPY --from=build --chown=d_user --chmod=500  /home/d_dir /usr/share/nginx/html
