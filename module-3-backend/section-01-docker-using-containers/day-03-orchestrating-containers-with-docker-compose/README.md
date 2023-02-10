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
* - `no` defines that the container will `not restart` automatically (`Default`); 
* - `on-failure` defines that the container will be `restarted` in case of any `failure indicated` by the `exit code`, different from zero; 
* - `always` specifies that whenever the `service stops`, either because of a failure or because it simply finished running, it must be `restarted`; 
* - `unless-stopped` defines that the container will always be `restarted`, unless we use the command `docker stop <container>` manually; 
* It is possible to `create` and `use` `environment variables` within `containers`. The name of the `key` we use is `environment`; 
* We use the `depends_on` key to ensure the `order of starting` and `stopping` our services; 
* To `upload` all services, we use the `docker-compose up` command in the terminal, this `file` must be in the same `execution folder` of this command; 
* Checking the `status of services` we use the `docker-compose ps` command; 
* We can `download` all `services` using the `docker-compose down` command, with that `all` containers will be `stopped` and `removed`; 
* Going up specific services with the command `docker-compose up <service>`, example: `docker-compose up -d backend`; 
* Viewing the `logs` of the `services` using the `docker-compose logs <service-name>` command; 
* We can use the `--tail` flag specifying `how many lines` we want the command to `return`, example: `docker-compose logs --tail 5 database`; 
* We can use the flag `-f` or `--follow` to `follow the output` of the containers in `real time`; 
```js
version: "3"
services:
  frontend:
    build: frontend/
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - backend
    volumes:
      - ./logs:/var/log/frontend
    networks:
      - rede-virtual-1
  backend:
    build: backend/
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
    networks:
      - rede-virtual-1
      - rede-virtual-2
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: always
    volumes:
      - dados-do-banco:/data/db
    networks:
      - rede-virtual-2

volumes:
  dados-do-banco:

networks:
  rede-virtual-1:
  rede-virtual-2:
```
