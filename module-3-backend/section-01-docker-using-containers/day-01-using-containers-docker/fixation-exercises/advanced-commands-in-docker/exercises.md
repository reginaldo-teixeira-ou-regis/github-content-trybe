-- Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

-- Exercicios De Fixação:

-- 1. Accessing the terminal of container with the command docker exec -it <container-name> <command-to-be-executed>; 
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

-- 2. 🚀 Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um `container` para isso;
```js
Solução: 
Ao acessar a página de detalhes, logo de cara, a página já indica o comando
docker pull <imagem>, esse comando faz apenas o download da imagem, 
sem o processo de criação e execução do container.
```

-- 3. 🚀 Baixe a imagem utilizando a `tag`: `stable-slim`, que é uma versão reduzida da distribuição;
```js
Solução: 
Para executar esta ação, digite o comando docker pull debian:stable-20230109-slim. 
As tags também podem ser acessadas pela página de detalhes da imagem 
(onde também é fornecido o comando para executar). 
```

-- 4. 🚀 Após baixar a imagem para seu computador local, crie e execute um `container` no modo interativo utilizando essa imagem como referência — não esqueça referenciar a `tag`;
```js
Solução: 
Para criar e executar nosso container, usamos o comando 
docker container run -it debian:stable-20230109-slim, 
lembrando que a imagem pode ser chamada no formato <imagem>:<tag>.

Outra solução também pode ser com o uso do comando create, 
que cria o container, mas não o inicia imediatamente.

Primeiro utilizamos o comando 
docker container create -it debian:stable-20230109-slim, 
para criar um container. Como esse comando gera um CONTAINER ID, 
podemos utilizá-lo como referência para o segundo passo, 
com o comando start, como em docker container start -i <CONTAINER ID>, 
dessa forma, iniciamos o container no modo interativo.
```

-- 5. 🚀 No terminal, você deve conseguir rodar o comando `cat /etc/*-release`, que vai retornar os dados da distribuição `Debian` que está sendo rodada dentro do `container`;
```js
Solução: 
Ao rodar o comando cat /etc/*-release 
foram retornados os dados corretos da distribuição 
estável do Debian (versão 11, codinome bullseye).
```

-- 6. 🚀 Encerre o terminal;
```js
Solução: 
Para encerrar o terminal interno do container, o comando exit foi utilizado.
```

-- 7. 🚀 Verifique na sua lista de contêiners qual `contêiner` se refere ao exercício que acabou de praticar;
```js
Solução: 
Para listar o container, podemos utilizar o comando abreviado docker ps -l, 
assim como docker container ls -l, (para mostrar qual foi o último container criado);
ou se quisermos mostrar todos, usamos o comando docker ps -a.
```

-- 8. 🚀 Inicie o mesmo `container` novamente, sem criar outro. Valide se ele está ativo na lista de containers;
```js
Solução: 
Na ilustração acima, foi utilizado o comando abreviado 
docker start <CONTAINER ID || NAMES> onde <CONTAINER ID || 
NAMES> foi o início do identificador único 07c0a580d818 
(mostrando que não é preciso passar o valor inteiro), 
o container ficou ativo (campo STATUS) após isso.
```

-- 9. 🚀 Retome o `container` que foi criado anteriormente neste exercício;
```js
Solução: 
Foi utilizado o comando abreviado docker attach <CONTAINER ID || NAMES>. 
Já que o container foi inicializado anteriormente de modo interativo, 
pudemos retomar seu terminal.
```

-- 10. 🚀 Rode o comando `cat /etc/debian_version` que deve retornar a versão atual do sistema do `container`;
```js
Solução: 
Foi utilizado o comando cat /etc/debian_version, 
que retorna o número da atual versão estável do Debian (11.0).
```

-- 11. 🚀 Encerre o terminal;
```js
Solução: 
Para encerrar o terminal interno do container, o comando exit foi utilizado.
```

-- 12. 🚀 Remova somente o `container` criado para esse exercício;
```js
Solução: 
Foi utilizado o comando docker container rm <CONTAINER ID || NAMES>, 
validado em seguida.
```

-- 13. [BÔNUS] Crie e rode de modo interativo em modo ‘Cleanup’, a imagem `andrius/ascii-patrol`;
```js
Solução: 
⚠️ Você descobriu o jogo ASCII-PATROL! 
⚠️ Para rodar o container e removê-lo logo em seguida (cleanup), 
foi utilizado o comando docker run -it --rm andrius/ascii-patrol, 
onde o -it permite a interação com o jogo pelo terminal 
e o --rm garante que o container será removido ao terminar o jogo.
```

-- 14. [BÔNUS] Encerre o `container` utilizando os botões [`ctrl`] + [`c`];
```js
Solução
Após fechar o jogo, utilize o comando clear para limpar a tela. 
Você pode constatar que, rodando um docker container ls -a, 
o container do jogo não estará presente.
```