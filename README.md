# React Native Template


## Create React Native
```bash
docker image build -t init/create-react-app:latest init

docker run --rm -it -v '.:/home/node/react-app' init/create-react-app:latest
```


## Run React Native
```bash
docker compose up --build --force-recreate

# EXEC
docker compose exec app /bin/bash 
```
