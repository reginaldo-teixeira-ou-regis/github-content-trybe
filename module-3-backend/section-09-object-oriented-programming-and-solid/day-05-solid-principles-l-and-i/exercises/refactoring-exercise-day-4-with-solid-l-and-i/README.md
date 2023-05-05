### Objetivos
  - Usar na prática os princípios do SOLID
    - LSP: Substituição de Liskov, implementando de forma às classes derivadas serem substituíveis.
    - ISP: Segregação de Interfaces, dependendo apenas do que é usado.

### Requisitos
  - Adicionar uma nova conta: 
    - Conta Internacional, ela deve ter um saldo em dólar
  - Pagamentos devem poder ser feitos para vaquinhas/conta
  - Vaquinhas possuem:
    - Nome
    - Saldo
  - Adicionar rota para o pagamento PIX `POST /pagar/pix`