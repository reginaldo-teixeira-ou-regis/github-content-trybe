# Repositório de aulas ao vivo para estudantes da Turma 26 - Tribo B

Este repositório armazena os códigos e scripts fornecidos durante as aulas ao vivo pelos especialistas da Trybe.

## Começando

Basta clonar o repositório

git clone git@github.com:tryber/sd-026-b-live-lectures.git

### Estrutura

Todos os conteúdos dados em aulas estarão no seu respectivo Pull Request!

### Aula 9.1

Vamos criar um novo software para um banco.

- Deve ser possível clientes criarem contas com um valor depositado inicialmente; 
- Deve ser possível realizar um débito na conta, contanto que a pessoa possua saldo suficiente.
- Deve ser possível realizar um pagamento, debitando da conta origem e creditando na conta destino
- O pagamento deve ter um vencimento, caso seja efetivado após o vencimento, deve-se cobrar uma multa de 20%.

#### Entidades

- Conta
<!-- - Cliente -->
- Pagamento
  - origem, destino
  - valor
  - data de vencimento
  - data de efetivação
  - efetivar

- Banco