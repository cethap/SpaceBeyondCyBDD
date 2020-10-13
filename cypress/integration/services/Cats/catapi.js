import { Given, Then } from "cypress-cucumber-preprocessor/steps";

let res = null

Given(`The enpoint for search cat gifs`, () => {
  cy.request('GET','https://api.thecatapi.com/v1/images/search').then((response)=>{
    res = response
  })
});

Then(`The response can not be null or different of 200`, () => {
  expect(res.status).equal(200)
  expect(res.body).to.not.be.null
});