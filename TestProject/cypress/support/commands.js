// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('getBySel',(selecter)=>{
    return cy.get(`[data-testid=${selecter}]`)
})
Cypress.Commands.add('visitWithMessage',(URL)=>{
  const log=  Cypress.log({
        name: "Vist the Website",
        displayName: "Redirect to Website",
        message: [`🔐 Visit  http://localhost:3000/`],
        // @ts-ignore
        autoEnd: true,
      });
      cy.visit(URL)
})