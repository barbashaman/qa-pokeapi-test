package co.pokemon.test;

import com.sun.xml.bind.v2.runtime.output.SAXOutput;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.pt.*;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.*;

public class StepDefinitions {

    private Response response;
    private ValidatableResponse json;
    private RequestSpecification request;
    @Before
    public void setUp(){
        RestAssured.reset();
    }

    @After
    public void tearDown(){
        RestAssured.reset();
    }

    @Dado("que eu acesso a PokeApi")
    public void euAcessarAPokeApi() {
        RestAssured.reset();
        RestAssured.baseURI = "https://pokeapi.co/api/v2/";
        request = given().baseUri(baseURI);

    }

    @Quando("consultar todas as berries")
    public void consultarTodasAsBerries() {
        response = request.when().get("berry/");
    }

    @Quando("consultar a berry de id {int}")
    public void consultarABerryDeIdId(int id) {
        response = request.when().get("berry/" + id);
    }

    @Então("o sistema deve retornar uma lista de berries")
    public void oSistemaDeveRetornarUmaListaDeBerries() {
        System.out.println(response.getBody().prettyPrint());
        assert !response.getBody().jsonPath().getList("results").isEmpty();
    }


    @Então("o sistema deve retornar informações de uma berry de id {int}")
    public void oSistemaDeveRetornarInformaçõesDeUmaBerrydeId(int id) {
        assert response.getBody().jsonPath().get("id").equals(id);
    }

    @Quando("consultar um pokemon pelo id {int}")
    public void consultarUmPokemonPeloIdId(int id) {
        response = request.when().get("pokemon/" + id);
    }

    @Então("o sistema retornara as informações do pokemon de id {int}")
    public void oSistemaRetornaraAsInformaçõesDessePokemon(int id) {
        System.out.println(response.getBody().prettyPrint());
        assert response.getBody().jsonPath().get("id").equals(id);
    }

    @Quando("eu consultar apenas pokemons padrão")
    public void euConsultarApenasPokemonsPadrao() throws JSONException {
        JSONObject requestParams = new JSONObject();
        requestParams.put("is_default", true);
        response = request.given().body(requestParams.toString()).when().get("pokemon");
    }

    @Então("o sistema deve retornar o pokemon {string}")
    public void oSistemaDeveRetornarOPokemon(String pokemon) {
        boolean validate = false;
        List<Map<String,String>> list =  response.getBody().jsonPath().getList("results");
        for(Map map : list){

            if(map.get("name").equals(pokemon)){
                System.out.println("Pokemon name: " + map.get("name"));
                validate = true;
            }
        }
        assert validate;
    }
}
