/// <reference types="Cypress"/>

export class LoginPage
{

    loginWithInvalidUserNameAndPassword(userName , Password)
    {
 
        cy.get('[class="loginformPage"]').find('form').then(form =>{
            cy.wrap(form).find('[formcontrolname=username]').type(userName)
            cy.wrap(form).find('[formcontrolname=password]').type(Password)
            cy.wrap(form).find('[class="btn btn-secondary loginBtn"]').click()
    cy.wrap(form).find('[formcontrolname=username]').clear()
    cy.wrap(form).find('[formcontrolname=password]').clear()
    cy.wrap(form).find('[class="btn btn-secondary loginBtn"]').click() 
    cy.wrap(form).find('[class="invalid-feedback ng-star-inserted"] div').first().should('be.visible').and('have.text',' User Id is required')
    cy.wrap(form).find('[class="ng-star-inserted"]').last()
    .should('be.visible').and('have.text',' Password is required')
    cy.wrap(form).find('[formcontrolname=username]').clear().type('SUBS7772633425')
    cy.wrap(form).find('[formcontrolname=password]').clear().type('gfdsa')
    cy.wrap(form).find('[class="btn btn-secondary loginBtn"]').click() 
    cy.contains(' User ID / Password Incorrect! ').should('be.visible')
    cy.wrap(form).find('[formcontrolname=username]').clear().type('lkjhgfdhgf')
    cy.wrap(form).find('[formcontrolname=password]').clear().type('Com@1357')
    cy.wrap(form).find('[class="btn btn-secondary loginBtn"]').click() 
    cy.contains(' User not found/invalid ').should('be.visible')
    })

    }


validateLoginPage(){
    cy.get('[class="welcomeTxt"] span').text().trim().should('have.text','WelCome To MyBank')
    cy.get('@language').should('be.visible')
    cy.get('@forgotPassword').should('be.visible')
    cy.get('@forgotID').should('be.visible')
    cy.get('@checkBox').uncheck().should('not.be.checked')
}


}
export const onLoginPage=new LoginPage()