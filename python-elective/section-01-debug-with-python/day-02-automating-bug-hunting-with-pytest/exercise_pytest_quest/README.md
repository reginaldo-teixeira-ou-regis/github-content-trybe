<details>
  <summary><strong>🏕️ Ambiente Virtual</strong></summary>
  O Python oferece um recurso chamado de ambiente virtual, que permite sua máquina rodar sem conflitos diferentes tipos de projetos com diferentes versões de bibliotecas.

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

  O arquivo `dev-requirements.txt` contém todas as dependências que serão utilizadas no exercício, ele está agindo como se fosse um `package.json` de um projeto `Node.js`.

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

  O arquivo `pyproject.toml` já configura corretamente o Pytest. Entretanto, caso você tenha problemas com isso e queira explicitamente uma saída completa, o comando é:

  ```bash
  python3 -m pytest -s -vv
  ```

  O `pytest` possui diversos parâmetros que podem ser utilizados para executar os testes de diferentes formas. Alguns exemplos são:

  ```bash
  python3 -m pytest tests/test_nome_do_arquivo.py  # Executa todos os testes do arquivo de testes especificado
  python3 -m pytest tests/test_nome_do_arquivo.py::test_nome_do_teste  # Executa apenas o teste especificado
  python3 -m pytest -k expressão  # Executa apenas os testes que contém a expressão informada como substring
  python3 -m pytest -x  # Executa os testes até encontrar o primeiro erro
  ```

  Você pode combinar os parâmetros para executar os testes da forma que desejar! Para mais informações, consulte a [documentação do Pytest](https://docs.pytest.org/en/6.2.x/contents.html).
</details>

## Exercícios

### 1. Crie uma fixture

Neste primeiro exercício, você vai praticar a criação de uma fixture simples.

<details>

<summary> O que você deve fazer </summary>

Crie o arquivo `tests/conftest.py`.
Em seguida, crie neste arquivo a fixture `custom_fixture`, com o escopo de módulo (ou mais abrangente, como sessão) e que retorna uma lista Python com os números de 1 a 10, incluindo o 1 e o 10.

**O que será testado:**

 - Se a fixture `custom_fixture` pode ser acessada por uma função de teste em um arquivo de teste que não pode ser modificado.
 - Se a fixture `custom_fixture` retorna uma lista Python com os números de 1 a 10, incluindo o 1 e o 10, sendo que os testes fazem a remoção do 1 e do 10 da lista retornada pela fixture.
 - Se a fixture `custom_fixture` tem escopo de módulo, pacote ou sessão, sendo que um segundo teste tenta remover os itens da lista de onde parou o primeiro teste.

</details>

### 2. Use um marcador

Neste segundo exercício, você vai praticar o uso de marcadores do Pytest.

<details>

<summary> O que você deverá fazer </summary>

Crie um arquivo `tests/marker_test.py`. Em seguida crie neste arquivo a função de teste `test_dependency_mark`, cujo resultado do teste deve sempre passar. Marque o teste com o marcador `dependency`.

**O que será testado:**

  - Se uma função de teste identificada como `tests/marker_test.py::test_dependency_mark` está marcada com o marcador `dependency`.
  - Se a mesma função citada acima roda com sucesso.

</details>

### 3. Crie testes parametrizados

Agora chegou a hora de praticar a criação de testes parametrizados, evitando a repetição de código.

<details>

<summary> O que você deverá fazer </summary>

No arquivo previamente criado `tests/parametrized_test.py`, crie uma função de teste parametrizada chamada `test_converter` para testar a função `src.hex_converter.hexadecimal_to_decimal`.

A função de teste deve receber dois parâmetros, sendo o primeiro o número hexadecimal na forma de uma string e o segundo o número decimal inteiro equivalente.

O conjunto de valores passados para o marcador de parametrização deve ser o seguinte:

- Hexadecimal `"8"`, inteiro na saída `8`.
- Hexadecimal `"9"`, inteiro na saída `9`.
- Hexadecimal `"a"`, inteiro na saída `10`.
- Hexadecimal `"b"`, inteiro na saída `11`.
- Hexadecimal `"c"`, inteiro na saída `12`.
- Hexadecimal `"e"`, inteiro na saída `14`.
- Hexadecimal `"f"`, inteiro na saída `15`.

Importante ressaltar que o valor hexadecimal `"d"` e seu correspondente inteiro `13` foram deliberadamente omitidos da lista de parâmetros.

O corpo do teste deve verificar se passar o número hexadecimal como parâmetro para a função `hexadecimal_to_decimal` retorna o número decimal esperado.

**O que será testado:**

  - Se o teste `test_converter` existe e está marcado com o marcador `dependency` (o arquivo do teste já deixa o marcador aplicado em todas as funções de teste, basta não remover a linha que faz isso).
  - Se o teste `test_converter` é um teste parametrizado com os valores citados acima.
  - Se o teste `test_converter` verifica o correto funcionamento da função `hexadecimal_to_decimal` para cada parâmetro passado.
    - Se a função `hexadecimal_to_decimal` é chamada pelo teste `test_converter` com o parâmetro correto.
    - Se o teste `test_converter` falha com um `AssertionError` quando chamado com parâmetros cuja conversão não retorna o valor esperado.

</details>

### 4. Use fixtures builtin - `monkeypatch`

Neste exercício, você vai praticar o uso de fixtures builtin, do Pytest, mais especificamente a `monkeypatch`.

<details>

<summary> O que você deverá fazer </summary>

No arquivo previamente criado `tests/built_in_fixtures_test.py`, crie uma função de teste chamada `test_monkeypatch`.
Esta função deve utilizar a fixture `monkeypatch` para validar se a chamada a `src.hex_converter.main` retorna `10` quando a pessoa que usa a aplicação digitar a string `"a"`.

**O que será testado:**

  - Se o teste `test_monkeypatch` passa.
  - Se o teste `test_monkeypatch` recebe a fixture `monkeypatch`.
  - Se o teste `test_monkeypatch` utiliza a fixture `monkeypatch` para simular a entrada do valor "a".
  - Se a função `src.hex_converter.hexadecimal_to_decimal` é chamada, indiretamente, com o valor "a" como parâmetro.
  - Se o teste `test_monkeypatch` faz uma asserção do resultado da passagem indireta do valor "a" para a função `src.hex_converter.hexadecimal_to_decimal`.
  - **Observação:** não importe nem chame diretamente a função `src.hex_converter.hexadecimal_to_decimal` no teste `test_monkeypatch`.

</details>

### 5. Use fixtures builtin - `capsys`

Neste exercício, você vai praticar o uso de fixtures builtin, do Pytest, mais especificamente a `capsys`.

<details>

<summary> O que você deverá fazer </summary>

No arquivo previamente criado `tests/built_in_fixtures_test.py`, crie uma função de teste chamada `test_capsys`.
Esta função deve utilizar a fixture `capsys` para validar se a função `src.hex_converter.print_hexadecimal_to_decimal` imprime `10\n` na saída padrão e uma string vazia na saída de erro padrão quando chamada com a string `"a"`.

**O que será testado:**

  - Se o teste `test_capsys` passa.
  - Se o teste `test_capsys` utiliza a fixture `capsys` para ler a saída padrão e a saída de erro padrão.
  - Se o teste `test_capsys` chama a função `print_hexadecimal_to_decimal` com o parâmetro "a" e verifica se:
      - a saída padrão é igual a string `10\n`;
      - a saída de erro padrão é uma string vazia.

</details>

### 6. Use fixtures builtin - `tmp_path`

Neste exercício, você vai praticar o uso de fixtures builtin, do Pytest, mais especificamente a `tmp_path`.

<details>

<summary> O que você deverá fazer </summary>

No arquivo previamente criado `tests/built_in_fixtures_test.py`, crie uma função de teste chamada `test_tmp_path`. Esta função deve utilizar a fixture `tmp_path` para criar um arquivo temporário chamado "output.txt" dentro de um diretório temporário.

Em seguida, este diretório deve ser passado como segundo parâmetro da função `write_hexadecimal_to_decimal`, sendo o primeiro parâmetro a string `"a"`.

Por fim, o teste deve verificar se o conteúdo do arquivo "output.txt" é igual a string `"10"`.

Dica: utilize o método `pathlib.Path().read_text()`.

Dica: o teste não traz um retorno devidamente descritivo quando falha. Ative o debugger e ative o breakpoint `User Uncaught Exceptions` na aba `Breakpoints` no menu do debugger.

**O que será testado:**

  - Se o teste `test_tmp_path` existe e está marcado com o marcador `dependency` (o arquivo do teste já deixa o marcador aplicado em todas as funções de teste, basta não remover a linha que faz isso).
  - Se o teste `test_tmp_path` passa.
  - Se o teste `test_tmp_path` recebe a fixture `tmp_path`.
  - Se o teste `test_tmp_path` utiliza a fixture `tmp_path` para criar um arquivo temporário chamado "output.txt" dentro de um diretório temporário.
  - Se o teste `test_tmp_path` chama a função `write_hexadecimal_to_decimal` com o parâmetro "a" e o caminho do arquivo temporário criado.
      - O parâmetro do caminho do arquivo temporário deve ser passado como um objeto `pathlib.Path`.
      - O parâmetro do caminho do arquivo temporário deve terminar com "/output.txt".
  - Se o teste `test_tmp_path` verifica se o conteúdo do arquivo "output.txt" é igual a string `"10"`.
  - Se o teste `test_tmp_path` falha com um `TypeError` quando a fixture `tmp_path` é substituída por número inteiro.
  - Observação: O teste roda programaticamente o Pytest, criando uma execução dentro do próprio Pytest.
    Isso é feito para que o teste possa verificar se o arquivo "output.txt" foi criado dentro do diretório temporário,
    visto que se fosse feito de outra forma, o teste criaria um arquivo em um diretório não temporário.

</details>

---
