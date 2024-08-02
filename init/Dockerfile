FROM node:20.16-bullseye-slim AS build

RUN apt install bash

USER 1000

WORKDIR /home/node/react-app

ENTRYPOINT [ "/bin/bash", "-c" ]

CMD [ "npx create-expo-app@3.0 app --template blank \
  && cd ./app \
  && npx expo install \
    react-dom \
    react-native-web \
    @expo/metro-runtime \
    expo-router \
    react-native-safe-area-context \
    react-native-screens \
    expo-linking \
    expo-constants \
    expo-status-bar \
  && rm -rf ../init" ]

# https://docs.expo.dev/router/installation/
