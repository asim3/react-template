FROM node:20.16-bullseye-slim AS build

RUN apt install bash

USER node

ENTRYPOINT [ "/bin/bash", "-c" ]

CMD [ "cd /home/node/app && npm run dev" ]
