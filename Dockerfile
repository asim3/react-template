FROM node:20.16-bullseye-slim AS build

RUN apt install bash

USER node

WORKDIR /home/node/src

ENTRYPOINT [ "/bin/bash", "-c" ]

CMD [ "npm run web -- -p 3000" ]
