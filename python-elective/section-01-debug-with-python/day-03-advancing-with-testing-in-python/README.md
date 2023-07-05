# Para Fixar

1. Escreva uma nova função de teste no arquivo `test_analyzer.py` que passe pela linha 11 do arquivo `analyzer.py` do exemplo, garantindo 100% de cobertura de testes.

2. Utilize a biblioteca `Faker` para criar os seguintes dados falsos no `locale` espanhol da Argentina, e exibi-los na tela:

* Sobrenome.
* E-mail.
* Senha.
* URL.
* Placa de carro.

* De olho na dica 👀: O locale `es_AR` é o locale espanhol da Argentina.

3. Altere a função de teste `test_create_user` para utilizar o `Faker` a fim de gerar os dados de teste, em vez de dados fixos:

```js
def create_user(name, email):

    return {
        "first_name": name.split()[0],
        "last_name": name.split()[-1],
        "email": email,
        "email_domain": email.split("@")[-1],
    }

def test_create_user():
    fake_email = "teste.trybe@example.com"
    fake_name = "Teste Trybe"

    res = create_user(fake_name, fake_email)

    assert fake_name.startswith(res["first_name"])
    assert fake_name.endswith(res["last_name"])
    assert res["email"] == fake_email
    assert fake_email.endswith(res["email_domain"])
```