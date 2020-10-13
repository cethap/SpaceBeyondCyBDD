import { Given, When, And } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://demo.testim.io';

Given(`I open page`, () => {
  cy.visit(url);
  cy.contains('Space & Beyond');
});

When(`Select init travel`, () => {
  cy.get(':nth-child(1) > [data-react-toolbox=\'date-picker\'] .theme__input___1TiDt').click();
  cy.get(':nth-child(8) > span').click();
  cy.get('.theme__navigation___3eiS- > :nth-child(2)').click();
  cy.wait(510)
});

And(`Select finish travel`, () => {
  cy.get(':nth-child(2) > [data-react-toolbox=\'date-picker\'] .theme__input___1TiDt').click();
  cy.get(':nth-child(8) > span').click();
  cy.get('.theme__navigation___3eiS- > :nth-child(2)').click();
  cy.wait(520)
});

And(/^Select (.*) adults$/, (numberAdults) => {
  cy.get(".Hero__form-box___126DY > :nth-child(3) > .theme__input___qUQeP > .theme__inputElement___27dyY").click();
  cy.get(".theme__active___31xyK > .theme__values___1jS4g > :nth-child("+(parseInt(numberAdults,10)+1)+")").click();
});

And(/^Select (.*) children$/, (numberChildren) => {
  cy.get(":nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY").click();
  cy.get(".theme__active___31xyK > .theme__values___1jS4g > :nth-child("+(parseInt(numberChildren,10)+1)+")").click();
});

And(/^Select a (.*) planet$/, (planetTravel) => {
  cy.get(".Hero__hero___1FDXn > :nth-child(4) > .theme__button___1iKuo").click();
  cy.wait(400);
  cy.get(".Gallery__filters-box___1z3SX");
  cy.scrollTo(0, 550);
  cy.contains(planetTravel);
  cy.get(":nth-child(1) > .theme__cardActions___1aHjq > .theme__button___1iKuo").click();
  cy.wait(340);
  cy.url().should('include', '/checkout');
});
