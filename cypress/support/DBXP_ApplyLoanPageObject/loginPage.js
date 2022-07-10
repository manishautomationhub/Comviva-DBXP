/// <reference types="Cypress"/>

export class LoginPage
{

    loginWithValidUserNameAndPassword(userName , Password)
    {
 
     cy.get('[class="loginformPage"]').find('form').then(form =>{
        cy.wrap(form).find('[formcontrolname=username]').type(userName)
        cy.wrap(form).find('[formcontrolname=password]').type(Password)
        cy.wrap(form).find('[class="btn btn-secondary loginBtn"]').click({timeout:20000})
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