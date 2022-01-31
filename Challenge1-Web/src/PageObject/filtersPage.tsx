export default {
  getSearchbar() {
    return cy.get("#searchInput");
  },
  getAdvancedButton() {
    return cy.get("li").contains("Advanced");
  },
  getMainFilter() {
    return cy.get("#mw-search-ns0");
  },
  getTalkFilter() {
    return cy.get("#mw-search-ns1");
  },
  getUserFilter() {
    return cy.get("#mw-search-ns2");
  },
  getUserTalkFilter() {
    return cy.get("#mw-search-ns3");
  },
  getBulbapediaFilter() {
    return cy.get("#mw-search-ns4");
  },
  getBulbapediaTalkFilter() {
    return cy.get("#mw-search-ns5");
  },
  getBrowserFilter() {
    return cy.get("#mw-search-ns102");
  },
  getMediaWikiFilter() {
    return cy.get("#mw-search-ns8");
  },
  getCategoryFilter() {
    return cy.get("#mw-search-ns14");
  },
  countPokemonWithY() {
    cy.get(":nth-child(102) > tbody > tr > :nth-child(3)").then((row) => {
      let pokemon = row.length - 1;
      cy.log("There are " + pokemon.toString() + " Pokemons starting with Y!");
    });
  },

  clickByText(text: String) {
    cy.wait(1000);
    return cy.contains(`${text}`).should("be.visible").click({ force: true });
  },
  clickSearchButton() {
    cy.get("#bodyContent").within(() => {
      cy.get("[type='submit']").contains("Search").click();
    });
  },
};
