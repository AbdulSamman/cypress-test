// end to end testing (routes, site usw) => cypress
// vitest tests functions

beforeEach(() => {
  cy.visit("/");
  // cy.visit("/login"); usw
});

it("the page loads", () => {});

it("the header has correct text", () => {
  //code wiederholung !  nur einmal load page
  // h1 von app
  cy.get("h1").invoke("text").should("equal", "Info Site");
});

context("message box", () => {
  //cy.get(`[data-cy="numberOfChars"]`).as("numChars");
  it("the message does not show when no text in box", () => {
    cy.get(`[data-cy="numberOfChars"]`).should("not.exist");
  });

  it("message reports number of charachters  that are typed in box", () => {
    cy.get("input").type("this is a test");
    cy.get(`[data-cy="numberOfChars"]`).invoke("text").should("equal", "14");
  });
});
