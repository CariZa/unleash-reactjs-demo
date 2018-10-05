This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

### React integration with a feature toggle admin tool called Unleash

## Pre-setup & run unleash via docker

To run unleash with docker use this repo: https://github.com/Unleash/unleash-docker

Clone that repo and follow the README instructions.

Usage

    $ docker-compose build
    $ docker-compose up

The above commands will spin up an instance of unleash & postgres database

    Web
    IMAGE: unleash-docker_web
    NAME: unleash-docker_web_1
    PORT: 4242

    DB
    IMAGE: postgres:10-alpine
    NAME: unleash-docker_db_1

View unleash in browser:

    http://localhost:4242

## Hooking up react to the running Unleash instance

Once you have unleash running you can add features to toggle.

Add features with these names:

    FeatureGoodbye
    FeatureHello
    FeatureX

(You might need to set the feature as active in order to add it)

You can see the features as api data via this url:


    http://localhost:4242/api/features

This app integrated into that exact url in the file:

    ./src/components/unleash/unleash.component.js


TODO:

Finish writing tests, add some nicer widgets to toggle between

