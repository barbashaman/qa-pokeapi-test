#language:pt
@Berry
Funcionalidade: Berry

  Cenário: consulta todas as berries
    Dado que eu acesso a PokeApi
    Quando consultar todas as berries
    Então o sistema deve retornar uma lista de berries

  Esquema do Cenário: consulta berry com id específico
    Dado que eu acesso a PokeApi
    Quando consultar a berry de id <id>
    Então o sistema deve retornar informações de uma berry de id <id>
    Exemplos:
      | id |
      | 1  |
