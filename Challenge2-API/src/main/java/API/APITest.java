package API;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import org.junit.BeforeClass;
import org.junit.Test;

public class APITest {
	
	@BeforeClass
	public static void urlSetup() {
		baseURI = "https://pokeapi.co";
		basePath = "/api/v2";
	}

	@Test
	public void checkPokemonkMove() {
		given()
		.when()
			.get("/pokemon/pikachu")
		.then()
			.assertThat()
			.statusCode(200)
			.body("moves.move.name", hasItem("thunder-punch"));
	}

	@Test
	public void checkPokemonAsGift() {
	  
		String location = 
				given()
				.when()
					.get("/pokemon/pikachu")
				.then()
					.assertThat()
					.statusCode(200)
					.extract()
					.path("location_area_encounters");
		
				 given()
				.when()
					.get(location)
				.then()
					.assertThat()
					.statusCode(200)
					.body("findAll{it.version_details.version.name.contains('yellow')}.collect{it.version_details.encounter_details.method[0].name[0]}", hasItem("gift"));
	
	}
	
}
