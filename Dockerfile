FROM node:20.16-bullseye-slim AS build

RUN apt install bash

ENV APP_HOME=/home/node/app

COPY --chown=node --chmod=550  ./app $APP_HOME

USER node

WORKDIR $APP_HOME

RUN npm run build

ENTRYPOINT [ "/bin/bash", "-c" ]

CMD [ "npm run dev" ]
