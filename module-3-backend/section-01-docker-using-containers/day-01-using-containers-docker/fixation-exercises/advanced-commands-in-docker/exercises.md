-- Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

-- Exercicios De Fixação:

-- 1. Accessing the terminal of container with the command `docker exec -it <container-name> <command-to-be-executed>`; 
```js
pessoa@trybe:~/course$ docker container run --rm -d --name meu-container alpine:3.14 sleep 300

81e61d38ca40cb4707f44d9aba8c803c23ab4a45c23a83c55278eace2b345c3

pessoa@trybe:~/course$ docker ps -a

CONTAINER ID      IMAGE        COMMAND         CREATED          STATUS      PORTS     NAMES
99ee42188fa7   alpine:3.14   "sleep 300"   14 seconds ago   Up 13 seconds          meu-container

pessoa@trybe:~/course$ docker exec -it meu-container sh

-- ps aux

PID    USER     TIME     COMMAND
      1 root    0:00    sleep 300
     14 root    0:00    sh
     20 root    0:00    ps aux

-- exit

pessoa@trybe:~/course$ docker stop -t 0 meu-container

meu-container

pessoa@trybe:~/course$ docker ps -a

CONTAINER ID    IMAGE    COMMAND    CREATED    STATUS    PORTS    NAMES
```

-- 2. View the logs of a running container with the command `docker logs <flags> <container-name>`;
```js
pessoa@trybe:~/course$ docker container run -d --name meu-container alpine:3.14 date

b89b81f17d0cb19edfcfae94d13f3b6dc0953d7cd9b1aaf0dbf4680d1d9b75ee

pessoa@trybe:~$ docker ps -a

CONTAINER ID      IMAGE      COMMAND      CREATED              STATUS             PORTS        NAMES
b89b81f17d0c   alpine:3.14   "date"    2 seconds ago   Exited (0) 1 second ago             meu-container

pessoa@trybe:~$ docker logs meu-container

Tue Apr 26 13:29:32 UTC 2022

pessoa@trybe:~$ docker rm meu-container

meu-container

pessoa@trybe:~$
```

-- 3. The following command is useful when running them in the second plan: 
```js
gabriel@trybe:~$ docker container run -d --rm --name meu-container alpine:3.14 sleep 300

6942640dda0e7d5e3db3fb122ab2e6c77f0d4bcf75b8c1082143cedf8215a193

gabriel@trybe:~$ docker top meu-container

UID     PID     PPID     C     STIME     TTY      TIME       CMD
root    5299    5278     0     09:35      ?     00:00:00   sleep 300

gabriel@trybe:~$ docker stop -t 0 meu-container

meu-container
```

-- 4. `Cleaning containers` up unused with the  command `docker container prune`: 
```js
pessoa@trybe:~/course$ docker container prune

WARNING! This will remove all stopped containers.

Are you sure you want to continue? [y/N] y

Deleted Containers:

ed2aa643a36af0d3805812a6114e6da1a339f8059e373246270f0446c20f2f7f

[várias linhas]

108085a4660a7e69d1625503f0b078ecc94155edf4b2023796eadad35f1e65f6

Total reclaimed space: 442B

pessoa@trybe:~/course$
```