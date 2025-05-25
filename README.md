# Considerações

Escolhas de ferramentas:
1. Optei por não usar typescript pela na natureza da implementação ser de escopo reduzido e se tratar de um teste que na descrição não exigia uso.

2. Para realizar requisições também não optei pela utilização de libs externas como clienteHTTP ou gerenciamento de estado do servidor pelo mesmo motivo do item 1.

3. Optei pela utilização de uma lib externa para gerenciamento de estado do cliente que, nesse caso, fez sentido por ter facilitado manipulações mais complexas do estado da aplicação.

4. Em relação à arquitetura do projeto, também simplifiquei. Poderia separar os componentes em camadas de forma que a lógica ficasse separada da parte de apresentação. Porém, os componentes ficaram bem enxutos e legíveis.
