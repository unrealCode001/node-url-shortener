INTRODUCTION

Url shortening api service designed with Node.js framework and Express.js library, utilizing Javascript ES6 programming language. 

Mandatory requirements addressed:

- short url creation
- forwarding to full url from short url
- persistant storage using MongoDB

Bondus requirements addressed:

- dockerfile for image creation 
- further api functionality collecting statistics include number of times short url has been accessed and total character length of full url from each site


INSTRUCTIONS

Download the zip or clone repo, then npm i and npm start to run the server. Server is 
running on port 8000. 

Alternatively, you can build a docker image for exmaple by command "docker build -t node-url-shortener ." Then, run the docker image by "docker run -p 8000:8000 node-url-shortener"





