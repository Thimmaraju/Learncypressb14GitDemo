import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import login from '../../Pages/loginpage.po'
import dashboard from '../../Pages/dasboarad.po'

Given('User launch the Application', () => {
    
     cy.visit('/web/index.php/auth/login')
  })

When('User enter username {string} and password {string}', (username, password) => {
    
    cy.xpath(login.usernameInput()).type(username)
    cy.get(login.passwordInput()).type(password)
    
 })


 And('User clicks on login button', () => {
    
    cy.get(login.loginButton()).click()
 })

 Then('User should be navigated to dasboard page', () => {
    
     cy.contains(dashboard.dashBoardMenu).should("be.visible")
     cy.url().should("include", "/web/index.php/dashboard/index")
 })


 Then('User should get error message', () => {
    
     cy.contains("Invalid credentials").should("be.visible")
 })
