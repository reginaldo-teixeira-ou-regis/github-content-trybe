# Day 2 - Contents: 

* When we run a `Docker Hub` `image` for the `first` time the image is `auto-magically` downloaded locally, and with the `docker images` command we can confirm that it is there; 
* With the `docker pull <image-name>` command, we can pull the Docker image locally `directly` from the `Registry`, example: `docker pull alpine:3.14`; 
* We can have multiple containers the from one image Docker!; 
* Both the `image` and the `container` have an `identifier`, being that the `image` identifier is `IMAGE ID` and the of `container` is `CONTAINER ID`; 
* We delete a `container` by its `id` too, example: `docker rm -f <container-id>`; 
* Using the `-f` flag we delete the `container` even if it is `active`; 
* The `Dockerfile` is a `configuration file` with its `own language`; 
* `Cleaning up all` with the command `docker system prune -af`; 
* The `Dockerfile file` must be `created` in the `root` of your `project`, example of how it will look on your `VSCode`: 
└── my-project/
    ├── src/
    │   └── 
    └── Dockerfile
* 
