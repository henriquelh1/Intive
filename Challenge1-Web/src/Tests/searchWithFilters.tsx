import filters from "../PageObject/filtersPage";

context("Search with filters", () => {
  beforeEach(() => {
    cy.visit("https://bulbapedia.bulbagarden.net/wiki/Main_Page");
  });

  it("Must search with filters", () => {
    filters.clickByText("Continue to Site");
    filters.getSearchbar().type("catch charmander");
    filters.getSearchbar().type("{enter}");
    filters.getAdvancedButton().click();
    filters.getBulbapediaFilter().click();
    filters.getMediaWikiFilter().click();
    filters.getCategoryFilter().click();
    filters.getUserFilter().click();
    filters.clickSearchButton();
  });
});
