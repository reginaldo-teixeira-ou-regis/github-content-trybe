### Requisitos

- Conta precisa ter um CPF Válido
- Conta poupança deve poder prever o rendimento anual com base no saldo.
- Pagamentos ao serem efetivados geram um código de transação:
  - `TTTT-UUUU`
  - T: Timestamp
  - U: UUID
- Há tipos diferentes de pagamento:
  - Pagamento por boleto:
    - Tem vencimento e aplica multa ao atrasar
  - Pagamento no cartão de débito:
    - Não tem vencimento, o valor pago é sempre o original
- Deve ser possível efetivar uma lista de pagamentos de uma vez