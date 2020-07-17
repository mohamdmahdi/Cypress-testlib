/// <reference path="../../support/index.d.ts"  />
const URL = `${Cypress.env('baseURL')}`;
const search ="Just Test"


describe("Cars",function(){
    beforeEach(function(){
        cy.visitWithMessage(URL)
    })
    it('Search by brand and model', function(){
        cy.fixture("cars").then((cars)=>{
            cy.getBySel('S1').select(cars[0].brand)
            cy.getBySel('S2').select(cars[0].models[0])
            cy.findAllByRole('button').click()
            cy.on('window:alert',(str)=>{
                expect(str).to.equal(`{"model":"${cars[0].models[0]}","brand":"${cars[0].brand}","keyword":""}`);
                })
        })
    })

    it('Search by brand, model and search key', function(){
        cy.fixture("cars").then((cars)=>{
            cy.getBySel('S1').select(cars[0].brand)
            cy.getBySel('S2').select(cars[0].models[0])
            cy.findByRole('textbox').type(search)
            cy.findAllByRole('button')
            .should('be.enabled')
            .click()
            cy.on('window:alert',(str)=>{
                expect(str).to.equal(`{"model":"${cars[0].models[0]}","brand":"${cars[0].brand}","keyword":"${search}"}`);
                })
        })
    })

    it ('Search by brand Only', function(){
        cy.fixture("cars").then((cars)=>{
            cy.getBySel('S1').select(cars[0].brand)
            cy.findAllByRole('button')
            .should('be.enabled')
            .click()
            cy.on('window:alert',(str)=>{
                expect(str).to.equal(`{"model":"","brand":"${cars[0].brand}","keyword":""}`);
                })
        })
    })

    it ('Search by keyword only', function(){

        cy.fixture("cars").then((cars)=>{
            cy.findByRole('textbox').type(search)
            cy.findAllByRole('button')
            .should('be.enabled')
            .click()
            cy.on('window:alert',(str)=>{
                expect(str).to.equal(`{"model":"","brand":"","keyword":"${search}"}`);
                })
        })
    })

    it ('Check the defualt status', function(){
            cy.getBySel('S2')
            .should('be.disabled')
            cy.findAllByRole('button')
            .should('be.disabled')
            
    })

})