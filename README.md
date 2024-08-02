# React App Template


## create react app
```bash
docker image build -t init/create-react-app:latest init

docker run --rm -it -v '.:/home/node/react-app' init/create-react-app:latest
```


## run react app
```bash
docker compose up --build --force-recreate

# EXEC
docker compose exec app /bin/bash 
```


## Next Config
`next.config.mjs`
```js
const nextConfig = {
    output: "standalone"
};
```
> `npm install sharp` !!
