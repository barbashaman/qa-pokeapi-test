#language:pt
@Pokemon
Funcionalidade:  Pokemon

  Esquema do Cenário: Consultar um pokemon pelo id
    Dado que eu acesso a PokeApi
    Quando consultar um pokemon pelo id <id>
    Então o sistema retornara as informações do pokemon de id <id>
    Exemplos:
      | id |
      | 1  |

  Esquema do Cenário: Consultar pokemons padrão
    Dado que eu acesso a PokeApi
    Quando eu consultar apenas pokemons padrão
    Então o sistema deve retornar o pokemon "<pokemon>"
    Exemplos:
    |pokemon|
    |squirtle|
    |charizard|
    |rattata|
