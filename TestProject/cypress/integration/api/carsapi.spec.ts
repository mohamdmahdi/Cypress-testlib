/// /<reference types="cypress" />
/// <reference path="../../support/index.d.ts"  />

const apiURL = `${Cypress.env('baseURL')}cars`;

context('API Test', function(){
it('Checks the cars Models and number',function(){
     cy.request('GET',`${apiURL}`).then((response)=>{
        expect(response.status).to.eq(200);  
     cy.fixture("cars").then((cars)=>{
        cars.forEach((car:Car, index: number)=>{
           expect(response.body[index].brand).to.eq(car.brand,"Data from the Test Set")
       })
       expect(cars.length).to.eq(39);  
    })
   })
})

})