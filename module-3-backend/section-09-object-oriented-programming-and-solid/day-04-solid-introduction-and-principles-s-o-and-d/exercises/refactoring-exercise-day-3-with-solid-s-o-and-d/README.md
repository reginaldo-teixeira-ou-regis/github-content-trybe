### Objetivos
  - Usar na prática os princípios do SOLID
    - SRP • **S**ingle responsibility principle (*Princípio da responsabilidade única*): uma classe ou função deve ter uma, e apenas uma, tarefa a realizar dentro do seu código;
    - OCP • **O**pen/Closed principle (*Princípio aberto/fechado*): para estender um comportamento de uma função sem modificar seus comportamentos já existentes;
    - DIP • **D**ependency inversion principle (*Princípio da inversão da dependência*): um módulo deve depender de abstrações e não de implementações

### Requisitos
  - Lidar com diferentes tipos de conta
    - Conta corrente: permite que débito deixe saldo no negativo, considerando um limite
    - Conta poupança: não permite que débito deixe saldo no negativo
  - Persistir o pagamento pix no banco de dados
    - Conectar com um "banco" em memória (simulação)
    - [Extra] Conectar no mysql de VERDADE
  - [Extra] Validar diferentes tipos de chave pix
    - Telefone e CPF