$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:co/pokemon/test/Berry.feature");
formatter.feature({
  "name": "Berry",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Berry"
    }
  ]
});
formatter.scenario({
  "name": "consulta todas as berries",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@Berry"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu acesso a PokeApi",
  "keyword": "Dado "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.euAcessarAPokeApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "consultar todas as berries",
  "keyword": "Quando "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.consultarTodasAsBerries()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve retornar uma lista de berries",
  "keyword": "Então "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.oSistemaDeveRetornarUmaListaDeBerries()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "consulta berry com id específico",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que eu acesso a PokeApi",
  "keyword": "Dado "
});
formatter.step({
  "name": "consultar a berry de id \u003cid\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "o sistema deve retornar informações de uma berry de id \u003cid\u003e",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "consulta berry com id específico",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Berry"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu acesso a PokeApi",
  "keyword": "Dado "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.euAcessarAPokeApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "consultar a berry de id 1",
  "keyword": "Quando "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.consultarABerryDeIdId(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve retornar informações de uma berry de id 1",
  "keyword": "Então "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.oSistemaDeveRetornarInformaçõesDeUmaBerrydeId(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:co/pokemon/test/Pokemon.feature");
formatter.feature({
  "name": "Pokemon",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Pokemon"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Consultar um pokemon pelo id",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que eu acesso a PokeApi",
  "keyword": "Dado "
});
formatter.step({
  "name": "consultar um pokemon pelo id \u003cid\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "o sistema retornara as informações do pokemon de id \u003cid\u003e",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar um pokemon pelo id",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Pokemon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu acesso a PokeApi",
  "keyword": "Dado "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.euAcessarAPokeApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "consultar um pokemon pelo id 1",
  "keyword": "Quando "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.consultarUmPokemonPeloIdId(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema retornara as informações do pokemon de id 1",
  "keyword": "Então "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.oSistemaRetornaraAsInformaçõesDessePokemon(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Consultar pokemons padrão",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que eu acesso a PokeApi",
  "keyword": "Dado "
});
formatter.step({
  "name": "eu consultar apenas pokemons padrão",
  "keyword": "Quando "
});
formatter.step({
  "name": "o sistema deve retornar o pokemon \"\u003cpokemon\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "pokemon"
      ]
    },
    {
      "cells": [
        "squirtle"
      ]
    },
    {
      "cells": [
        "charizard"
      ]
    },
    {
      "cells": [
        "rattata"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar pokemons padrão",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Pokemon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu acesso a PokeApi",
  "keyword": "Dado "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.euAcessarAPokeApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu consultar apenas pokemons padrão",
  "keyword": "Quando "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.euConsultarApenasPokemonsPadrao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve retornar o pokemon \"squirtle\"",
  "keyword": "Então "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.oSistemaDeveRetornarOPokemon(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Consultar pokemons padrão",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Pokemon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu acesso a PokeApi",
  "keyword": "Dado "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.euAcessarAPokeApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu consultar apenas pokemons padrão",
  "keyword": "Quando "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.euConsultarApenasPokemonsPadrao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve retornar o pokemon \"charizard\"",
  "keyword": "Então "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.oSistemaDeveRetornarOPokemon(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Consultar pokemons padrão",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@Pokemon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu acesso a PokeApi",
  "keyword": "Dado "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.euAcessarAPokeApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu consultar apenas pokemons padrão",
  "keyword": "Quando "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.euConsultarApenasPokemonsPadrao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve retornar o pokemon \"rattata\"",
  "keyword": "Então "
});
formatter.match({
  "location": "co.pokemon.test.StepDefinitions.oSistemaDeveRetornarOPokemon(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});