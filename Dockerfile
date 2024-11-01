FROM node:lts-bookworm AS main

USER node

WORKDIR /home/node/src

ENTRYPOINT [ "/bin/bash", "-c" ]

CMD [ "npm run web -- -p 3000" ]
