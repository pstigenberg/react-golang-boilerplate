# React-Golang Boilerplate

This is my own boilerplate project for React connected with a Golang API. The react part is based on the boilerplate called React Slingshot. If you for some strange reason would like to test this boilerplate, follow the getting started guide below. It doesn’t do much, it’s just a small react app with a IndexPage component that fetches the page title from the API written in Golang.

On of the goals I had was to get a dev environment as close to production as possible. Therefore I decided not to use the build in web server from WebPack, instead WebPack watches for file changes and builds the bundle files and stores them in the /dist-folder served by nginx. For convenience the bundles are not minified but this could be solved with a production version of WebPack config.

## Get Started

1. Clone or copy the project
2. Add the following hosts to your host file "127.0.0.1 react-golang-boilerplate.com" and "127.0.0.1 api.react-golang-boilerplate.com"
3. From the folder where the docker-compose.yml is, run "docker-compose build” then wait… It will take awhile
4. When it’s done run "docker-compose up” this will start the containers and build the bundles
5. When the file-bundler container is done you can open a browser and visit react-golang-boilerplate.com

## About the project

### api

The api folder contains the api container with a single file for the Go API. The api requires a authentication key and this is specifies in the docker compose files as a environment variable. Remember that the web-project needs the same authentication key and that key is also defined in the docker-compose file.

### filebundler

The folder only contains a docker file setting up a container that runs webpack --watch. The reason for this is that one goal for the project is to run everything as production like as possible. Webpack will not serve the files, WebPack only builds the bundle files to a /dist folder, served by nginx.

### gulp

The folder only contains a docker file setting up a container that runs gulp. The container uses the files from the web-project that also contains the gulp-config. The only thing gulp does is to watch for changes in files and run lint.

### nginx-reverse-proxy
As the name suggests a reverse proxy based on nginx. Forwards requests to the api container or to the web container. For this solution only http is used, in production you need to add support for SSL.

### web

The web folder contains the web project including the nginx that serves the web part of the solution. The web is based on react/redux and for this I have used a boilerplate called React Slingshot. Since this is a lightweight test project I have removed quite a lot from the boilerplate, but only unnecessary things like unit testing ;) Another notable change is that everything connected to hot-reload is removed and the reason for this is the fact that everything in this project is served by nginx, not webpack.

The web solution contains a few files and a index page that fetches it's settings from the api. Just to make sure that everything works.