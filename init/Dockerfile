FROM node:lts-bookworm AS create-expo

USER node

WORKDIR /home/node/react-app

ENTRYPOINT [ "/bin/bash", "-c" ]

CMD [ "npx --yes create-expo-app@3.0 src --template expo-template-tabs \
  && cd ./src \
  && npx --yes expo install \
    expo-router \
    expo-linking \
    expo-constants \
    expo-status-bar \
    react-native-safe-area-context \
    react-native-screens \
    i18next \
    react-i18next \
  && rm -rf ../init" ]

# https://docs.expo.dev/router/installation/
