import hashlib
import json

base_clientes = {
    1: {
        "id_cliente": 1,
        "rua": "Rua A",
        "numero": 10,
        "cep": "12345-678",
        "cidade": "São Paulo",
        "pais": "Brasil",
        "telefone": "1234567890",
        "nome": "João",
        "cnpj": "12345678901234",
    },
    2: {
        "id_cliente": 2,
        "rua": "Rua B",
        "numero": 344,
        "cep": "12345-111",
        "cidade": "Poços de Caldas",
        "pais": "Brasil",
        "telefone": "1234569988",
        "nome": "João",
        "cnpj": "98765678901236",
    },
}

boletos_gerados = {
    1: "d41d8cd98f00b204e9800998ecf8427e",
    2: "098f6bcd4621d373cade4e832627b4f6",
}


def calcula_hash(address):
    address_string = json.dumps(address)
    md5_hash = hashlib.md5()
    md5_hash.update(address_string.encode("utf-8"))
    return md5_hash.hexdigest()


def gerar_url_boleto(cliente_id):
    dados_cliente = base_clientes[cliente_id]

    hash_atual = calcula_hash(dados_cliente)
    if not boleto_existe(cliente_id) or not mesmo_endereco(
        cliente_id, hash_atual
    ):
        salvar_boleto(hash_atual, cliente_id)

    return f"https://banco26.com/boleto?id={boletos_gerados[cliente_id]}"


def boleto_existe(cliente_id):
    return cliente_id in boletos_gerados


def salvar_boleto(hash, cliente_id):
    boletos_gerados[cliente_id] = hash


def mesmo_endereco(cliente_id, hash_atual):
    hash_armazenado = boletos_gerados[cliente_id]
    return hash_armazenado == hash_atual


if __name__ == "__main__":
    cliente_id = 1
    print("\n", gerar_url_boleto(cliente_id))
    base_clientes[1]["nome"] = "João Paulo"
    print("\n", gerar_url_boleto(cliente_id))
    print("\n", gerar_url_boleto(cliente_id))
    print("\n", gerar_url_boleto(cliente_id))
    base_clientes[1]["numero"] = 430
    print("\n", gerar_url_boleto(cliente_id), "\n")
