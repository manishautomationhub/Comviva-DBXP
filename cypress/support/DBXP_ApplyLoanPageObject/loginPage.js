/// <reference types="Cypress"/>

export class LoginPage
{

    loginWithValidUserNameAndPassword(userName , Password)
    {
 
     cy.get('[class="loginformPage"]').find('form').then(form =>{
        cy.get('[class="welcomeTxt"]').should('have.text',' Welcome to MyBank').and('be.visible')
        cy.wrap(form).find('[formcontrolname=username]').type(userName)
        cy.wrap(form).find('[formcontrolname=password]').type(Password)
        cy.wrap(form).find('[class="btn btn-secondary loginBtn"]').click({timeout:20000})
     })

    }


validateLoginPage(){
    cy.get('div').find('[class="loginformPage"]').then(login=>{
    cy.wrap(login).find('[class="welcomeTxt"]').should('have.text',' Welcome to MyBank').and('be.visible')
    cy.wrap(login).find('[class="welcomeTxt"] span').should('have.text','MyBank').and('be.visible')
    cy.get('[class="col-4 forgotLink forgot-user-id align-left"]').should('have.text',' Forgot User ID ?')
     .and('be.visible')
    cy.get('[class="col-7 forgotLink forgot-password align-left"]').should('have.text',' Forgot Password ?')
   .and('be.visible')
   cy.get('[class="ng-tns-c10-3 ng-star-inserted"]').scrollIntoView().should('have.text','English').and('be.visible')

    })
}


}
export const onLoginPage=new LoginPage()