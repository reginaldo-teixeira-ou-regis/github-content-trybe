# The Bug Hunting
  
<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do código, vamos utilizar nesses exercícios o linter `Flake8`.
  Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
  e de fácil manutenção! Para rodá-lo localmente no projeto, execute o comandos abaixo:

  ```bash
  python3 -m flake8
  ```

  ⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.
  ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️
</details>

<details>
  <summary><strong>🏕️ Ambiente Virtual</strong></summary>
  O Python oferece um recurso chamado de ambiente virtual, onde permite sua máquina rodar sem conflitos, diferentes tipos de projetos com diferentes versões de bibliotecas.

  1. **Criar o ambiente virtual**

  ```bash
  python3 -m venv .venv
  ```

  2. **Ativar o ambiente virtual**

  ```bash
  source .venv/bin/activate
  ```

  3. **Instalar as dependências no ambiente virtual**

  ```bash
  python3 -m pip install -r dev-requirements.txt
  ```

  Com o seu ambiente virtual ativo, as dependências serão instaladas neste ambiente.
  Quando precisar desativar o ambiente virtual, execute o comando `deactivate`. Lembre-se de ativar novamente quando voltar a trabalhar no exercício.

  O arquivo `dev-requirements.txt` contém todas as dependências que serão utilizadas no exercício.

  Se o VS Code não reconhecer as dependências instaladas no ambiente virtual criado, será necessário informar o caminho do interpretador Python. Para isso, abra o VS Code e pressione `Ctrl + Shift + P` (no Mac, `Cmd + Shift + P`) e digite `Python: Select Interpreter`. Selecione o interpretador que possui o caminho `./.venv/bin/python` no nome.
</details>

<details>
<summary><strong>🎛 Linter</strong></summary>

Para garantir a qualidade do código, vamos utilizar nesses exercícios o linter `Flake8`. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! Para poder executar o `Flake8`, certifique-se de ter seguido os passos do tópico [**🏕️ Ambiente Virtual**] dentro do repositório.

Para rodá-lo localmente no repositório, execute o comando a seguir:

```bash
python3 -m flake8
```

Se a análise do `Flake8` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também pode contar com a ajuda do `Flake8` no `VSCode`. Para isso, basta instalar a [extensão oficial do VS Code para a linguagem Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python).

Em caso de dúvidas, confira o material na plataforma sobre [configuração do ambiente Python](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/aa76abc8-b842-40d9-b5cc-baa960952129/lesson/dd80466d-31d4-4b35-bacf-d789e261fa7d).

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary>

  Para executar os testes certifique-se de que você está com o ambiente virtual ativado.

  <strong>Executar os testes</strong>

  ```bash
  python3 -m pytest
  ```

  O arquivo `pyproject.toml` já configura corretamente o pytest. Entretanto, caso você tenha problemas com isso e queira explicitamente uma saída completa, o comando é:

  ```bash
  python3 -m pytest -s -vv
  ```

  O `pytest` possui diversos parâmetros que podem ser utilizados para executar os testes de diferentes formas. Alguns exemplos são:

  ```bash
  python3 -m pytest tests/test_nome_do_arquivo.py  # Executa todos os testes do arquivo de testes especificado
  python3 -m pytest tests/test_nome_do_arquivo.py::test_nome_do_teste  # Executa apenas o teste especificado
  python3 -m pytest -k expressao  # Executa apenas os testes que contém a expressão informada como substring
  python3 -m pytest -x  # Executa os testes até encontrar o primeiro erro
  ```

  Você pode combinar os parâmetros para executar os testes da forma que desejar! Para mais informações, consulte a [documentação do pytest](https://docs.pytest.org/en/6.2.x/contents.html).
</details>

# Exercícios

📍 **Dica importante:** Os exercícios envolvem a alteração de códigos existentes para que bugs sejam corrigidos, mas não esperamos que você faça grandes alterações.

👎 Você não deve alterar assinaturas de funções (como o nome da função ou os parâmetros que ela recebe), nem removê-las. Você também não deve alterar os testes, apenas o código que está sendo testado.

👍 Você pode adicionar uma nova função, alterar uma condicional, remover uma linha, etc.

## 1. Identifique e corrija os erros no arquivo `src/word_finder.py`

No arquivo `src/word_finder.py` há um código que deveria retornar uma lista de linhas de um arquivo que contém uma determinada palavra. Porém, há 2 erros no código que impedem que ele funcione corretamente.

Seu objetivo é identificar e corrigir os erros no código.

<details>

<summary> Como o código deveria funcionar </code>
</summary><br/>

A aplicação do arquivo `src/word_finder.py` deve ser executada da seguinte forma:

```bash
python3 src/word_finder.py
```

Ao executar o comando acima, a aplicação deveria retornar uma lista de linhas de um arquivo que contém uma determinada palavra. No código atual, a palavra que está sendo buscada é `python` e o arquivo que está sendo lido é o `src/word_finder.py`.

Nesse caso, a saída esperada é a seguinte:

```txt
[1, 2, 3, 4, 6, 8]
```

</details>

## 2. Identifique e corrija os erros no arquivo `src/spotify.py`

No arquivo `src/spotify.py` há um código que deveria processar as músicas do arquivo `data/spotify.csv` e retornar a análise solicitada na linha de comando.

Porém, há 2 erros no código que impedem que ele funcione corretamente.

Seu objetivo é identificar e corrigir os erros no código.

<details>

<summary> Como o código deveria funcionar </code>
</summary><br/>

As possíveis análises são:

- `1`: retorna as músicas mais instrumentais;
- `2`: retorna as músicas mais dançantes;
- `3`: retorna as músicas mais enérgicas.

A aplicação do arquivo `src/spotify.py` deve ser executada da seguinte forma:

```bash
python3 src/spotify.py 1
```

Ao executar o comando acima, a aplicação deveria retornar a lista das 10 músicas "mais instrumentais", mas você pode escolher qualquer uma das análises disponíveis (`1`, `2` ou `3`).

No nosso caso, a saída esperada é:

```txt
Top 10 músicas mais instrumentais:
 1 - 'Cornfield Chase' de Hans Zimmer
 2 - 'Day One (Interstellar Theme)' de Hans Zimmer
 3 - 'Chevaliers De Sangreal - From The Da Vinci Code Original Motion Picture Soundtrack' de Hans Zimmer
 4 - 'Experience' de Ludovico Einaudi
 5 - 'The Tree' de Ludovico Einaudi
 6 - 'Temple White' de Ludovico Einaudi
 7 - 'Natural Light' de Ludovico Einaudi
 8 - 'First Step' de Hans Zimmer
 9 - 'Veridis Quo' de Daft Punk
10 - 'Goldberg Variations, BWV 988: Aria' de Johann Sebastian Bach
```

</details>

<details>
<summary><strong> 🗣 Nos dê feedbacks sobre o exercício!</strong></summary><br />

Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o [formulário](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH26-PYTHON&template=betrybe/python-0x-exercicio-the-bug-hunting).
**Leva menos de 3 minutos!**

</details>

---
