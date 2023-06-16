'''Bônus: É muito comum em entrevistas que, quando a pessoa resolve o problema
dentro do tempo, façam-se perguntas "follow-up", que dificultam a questão.
Os follow-ups abaixo são opcionais.

Follow-up 3:

Se você adicionar uma nova contratação à lista de subordinadas, a
estrutura que você fez no follow-up 1 está desatualizada. Modifique
suas funções para que essa estrutura seja atualizada junto com a adição
de uma nova contratação. Faça isso sem rodar de novo a função score() e
lembre-se de atualizar todos os scores desde a pessoa da presidência até
a equipe que a nova contratação entrou.'''

'''Solução:

Quando você adiciona uma pessoa, ela pode ser adicionada em qualquer equipe
abaixo dela. Como você recebe o primeiro boss, para atualizar o score entre
esse boss e o local que a pessoa foi efetivamente alocada, basta ir atualizando
o score na medida em que você vai tentando uma nova equipe.

A parte mais complicada é atualizar desde a presidência até o primeiro boss.
A gente tem uma estrutura que nos diz quem é subordinado a quem, mas não temos
um jeito imediato de consultar quem é chefe de quem. Então uma possível solução
é, a cada inserção, manter o controle da chefia imediata daquela pessoa.
Na solução proposta abaixo, adicionamos a hash imediate_boss, que é atualizada
antes de realmente tentarmos alocar a pessoa. A função add_person foi renomeada
para fit_person e agora atualizada o score de cada boss que tentamos encaixar a
nova contratada.

Como os scores são atualizados na medida em que fazemos as inserções, a função
get_score agora precisa apenas fazer uma consulta simples à estrutura scores'''
