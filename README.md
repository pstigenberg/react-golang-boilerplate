## Get Started

1. Clone the project
2. Add the following hosts to your host file react-golang-boilerplate.com and api.react-golang-boilerplate.com
3. From the folder where the docker-compose.yml is, run "docker-compose build" and then "docker-compose up"
4. Open a browser and visit react-golang-boilerplate.com

## About the project

### api

The api folder contains the api container with a single file for the Go API. The api requires a authentication key and this is specifies in the docker compose files as a environment variable.

### filebundler

The folder only contains a docker file setting up a container that runs webpack --watch. The reson for this is that one goal for the project is to run everything as production like as possible. Webpack will not serve the files, webpack build the bundle files to a /dist folder, served by nginx.

### gulp

The folder only contains a docker file setting up a container that runs gulp. The container uses the files from the web-folder that contains the gulp-config. Not sure why... But the result is the same and the only thing gulp does is to whats for changes in files and run lint.

### nginx-reverse-proxy
As the name suggests a reverse proxy based on nginx. Forwards requests to the api or to the web container. For this solution only http is used, in production you need to add support for SSL.

### web

The web folder contains the web project including the nginx that serves the web part of the solution. The web is based on react/redux and for this I have used a boilerplate called React Slingshot. Since this is a lightweight test project I have removed quite a lot from the boilerplatd, such as unnessessary things like unit testing. Another notable change is that everything connected to hot-reload is removed and the reason for this is the fact that everything in this project is served by nginx, not webpack.

The web solution contains a few files and a index page that fetches it's settings from the api. Just to make sure that everything works.
