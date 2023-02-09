# Day 1 - Contents: 

* Docker `installation`; 
* `Docker Containers` - What is it? When to use?; 
* Containers `vs.` Virtual Machines; 
* Images `vs.` Containers; 
* `Registry` is a `remote location` where we can `upload` and `download` Docker images; 
* `Docker Hub:` The own `Docker Inc.` offer a public registry service; 
* Listing all `local images` with the command: `docker images`; 
* Listing `all locally containers` with the `docker ps` command or the newer `docker container ls` command; 
* Listing `all locally containers` including the `stopped` ones with the `docker container ls -a` command; 
* Running a `new container` with the command `docker container run <flags>? <image>:<tag> <arguments>?`; 
* Running a `new container` with the command `docker container run alpine:3.14 echo "Hello World"`; 
* The parameters `<flags>?` and `<arguments>?` are optional (signaled by `?`); 
* We use the flag `--name <name-of-your-choice>` to give a `specific name` to the created container; 
* Specific name example: `docker container run --name my-container alpine:3.14 echo "Hello World 2"`; 
* The `alpine image` is a `special image Docker` as it is `very small` (only 5.59MB); 
* To `remove containers` we use the command `docker rm <container-name>`; 
* Mode `auto-remove` with `--rm` command, example: `docker container run --rm alpine:3.14 echo "Hello World 3"`; 
* The flag `-d` or `--detach` runs the container in `second plan`, example: `docker container run --rm -d alpine:3.14 sleep 300`; 
* To force the container to stop running, use the `docker stop <container-name>` command, example: `docker stop -t 0 amazing_thompson`; 
* The `sleep` ignores the `docker stop` command, so we use the `-t 0` flag to force a stop, and this is internally called `SIGKILL`;
