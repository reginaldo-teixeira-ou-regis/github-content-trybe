# Day 2 - Contents: 

* When we run a `Docker Hub` `image` for the `first` time the image is `auto-magically` downloaded locally, and with the `docker images` command we can confirm that it is there; 
* With the `docker pull <image-name>` command, we can pull the Docker image locally `directly` from the `Registry`, example: `docker pull alpine:3.14`; 
* We can have multiple containers the from one image Docker!; 
* Both the `image` and the `container` have an `identifier`, being that the `image` identifier is `IMAGE ID` and the of `container` is `CONTAINER ID`; 
* We delete a `container` by its `id` too, example: `docker rm -f <container-id>`; 
* Using the `-f` flag we delete the `container` even if it is `active`; 
* The `Dockerfile` is a `configuration file` with its `own language`; 
* `Cleaning up all` with the command `docker system prune -af`; 
* The `Dockerfile file` must be `created` in the `root` of your `project`, example: 
```js
.
└── my-project/
    ├── src/
    │   └── 
    └── Dockerfile
```
* To `remove all containers and images Docker` locally use the command `docker system prune -af`; 
* With the `COPY` command, we copy a file locally and place it inside the image, in the path specified ahead, example: `COPY index.html /usr/local/apache2/htdocs/` or `ADD index.html /usr/local/apache2/htdocs`; 
* We run the command `docker build -t my-web-server` in the `same folder` where the files `Dockerfile` and `index.html` are present!; 
* With the use of the flag `-p 1234:80`, we are `asking Docker` to open an `exception` in this isolation, mapping port `1234` of computer to port `80`, within the container's network; 
* The word reserved `WORKDIR` indicates Docker what the `current working folder` is inside the image; 
* The prefix `AS` during `build` helps to name different stages; 
* The reserved word `ENTRYPOINT` indicates to `Docker` which command should be executed when starting the container, example: `ENTRYPOINT ["nginx", "-g", "daemon off;"]`; 
* Building a new image, example: `docker build -t site-hugo . `; 
* `RUN` vs. `ENTRYPOINT` vs. `CMD`; 
* `RUN` is immediate execution during the `build`; 
* `ENTRYPOINT` is the `mandatory execution` when starting the container; 
* `CMD` is a `parameter suggestion` when starting the container; 
