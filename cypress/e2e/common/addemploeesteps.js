import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import dashboard from '../../Pages/dasboarad.po'

And('User clicks on PIM', () => {
    
    cy.contains(dashboard.pimMenu()).click()
 })

 And('User clicks on Add employee', () => {
    
    cy.contains("Add Employee").click()
 })


 And('User enter firstname {string} and lastname {string}', (firstname, lastname) => {
    
      cy.get('input[name="firstName"]').type(firstname)
      cy.get('input[name="lastName"]').type(lastname)
 })

 And('User click on save button', () => {
    
     cy.get('button[type="submit"]').click()
 })

 And('User should get successfull message', () => {
    
    cy.contains('Successfully Saved').should('be.visible')
})


Then('User should see required message', () => {
    
    cy.contains('Required').should('be.visible')
})


