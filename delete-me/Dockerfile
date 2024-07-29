FROM node:20.16-bullseye-slim AS build

RUN apt install bash

USER 1000

WORKDIR /home/node/react-app

ENTRYPOINT [ "/bin/bash", "-c" ]

CMD [ "npx create-next-app@latest app" ]
