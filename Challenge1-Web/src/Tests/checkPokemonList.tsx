import filters from "../PageObject/filtersPage";

context("Check Pokemon List", () => {
  beforeEach(() => {
    "https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_name#Y";
  });

  it("Must check if the list contains Yamask", () => {
    filters.clickByText("Continue to Site");
    cy.get("table").contains("td", "Yamask");
  });

  it("Count Pokemons start with letter Y", () => {
    filters.clickByText("Continue to Site");
    filters.countPokemonWithY();
  });
});
