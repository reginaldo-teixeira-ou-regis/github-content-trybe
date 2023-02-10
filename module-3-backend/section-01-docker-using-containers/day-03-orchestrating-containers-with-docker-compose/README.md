# Day 3 - Contents: 

* Compose installation; 
* All `Compose configuration` is done through a `YAML` file; 
* It is considered a `good practice` to use the name `docker-compose.yaml`; 
* Structuring our project:
```js
project-docker-compose/
├── backend
│   └── Dockerfile
├── frontend
│   └── Dockerfile
└── docker-compose.yaml
```
* To create a `Docker Image` of the `backend`, create the `backend folder` and `Dockerfile file`, example: 
```js
FROM betrybe/docker-compose-example-backend:v1
ENTRYPOINT ["npm", "start"]
```
* To create a `Docker Image` of the `frontend`, create the `frontend folder` and `Dockerfile file`, example: 
```js
FROM betrybe/docker-compose-example-frontend:v1
ENTRYPOINT ["npm", "start"]
```
* Now we populate the `docker-compose.yaml` file, example: 
```js
version: "3"
services:
  frontend:
    build: frontend/
    restart: on-failure
    ports:
      - 3000:3000
    depends_on:
      - backend
  backend:
    build: backend/
    restart: on-failure
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: on-failure
```
* `image` specifies a `ready-made Docker image`, either `local` or to be `downloaded` from `Docker Hub`; 
* `build` specifies the folder containing a `Dockerfile file` from which the `Compose` will run the `docker build` command automatically; 
* If the `container presents a problem`, we can `configure` the key `restart` so that it is `solved automatically`; 
* The `Compose` has four restart policies, being them: 
* - `no` : defines that the container will `not restart` automatically (`Default`); 
* - `no`: defines that the container will `not restart` automatically (`Default`); 
* - 
