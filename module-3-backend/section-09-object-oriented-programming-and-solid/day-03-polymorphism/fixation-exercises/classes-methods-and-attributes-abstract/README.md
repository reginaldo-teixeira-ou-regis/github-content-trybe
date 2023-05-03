Exercicios De Fixação:

* Suponha que você está modelando os personagens do jogo de luta 
multijogadores Super Smash Bros. No jogo, há personagens de alcances 
variados e movimentos especiais variados. Vence a pessoa que acumulou 
mais pontos na partida.

1 - Crie uma classe abstrata Character que tenha os 
métodos abstratos talk(): void e specialMove(): void.

2 - Crie a classe concreta MeleeCharacter que estenda Character 
e sobrescreva os métodos abstratos dessa classe.

3 - Crie a classe concreta LongRangeCharacter que estenda Character 
e sobrescreva os métodos abstratos dessa classe.

4 - Agora instancie as classes filhas com os personagens Yoshi e Samus, 
com seus respectivos specialMoveName e chame os métodos talk e specialMove 
para apresentar o personagem e seus respectivos ataques especiais.