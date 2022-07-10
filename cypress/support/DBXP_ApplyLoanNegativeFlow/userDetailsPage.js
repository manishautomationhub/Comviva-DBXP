/// <reference types="Cypress"/>

export class UserDetailsPage
{

enterPanNumber(panNumber){
  cy.get('div[class="loan-card-body"]').find('form').then(form =>{
    cy.wrap(form).find('[formcontrolname="name"]').should('be.visible')
    cy.wrap(form).find('[formcontrolname="dob"]').should('be.visible')
    cy.scrollTo('center', { ensureScrollable: false })
    cy.wrap(form).find('[formcontrolname="mobile"]').should('be.visible')
    cy.wrap(form).find('[formcontrolname="email"]').should('be.visible')
    cy.scrollTo('bottom', { ensureScrollable: false })
    cy.wrap(form).find('[formcontrolname="panNumber"]').type(panNumber)
    cy.wrap(form).click()
    cy.wrap(form).find('[formcontrolname="checked"] [type="checkbox"]').first().should('not.be.checked')
    cy.wrap(form).find('[class="col-md-2"] [type="submit"]').should('be.disabled')
    cy.wrap(form).find('[role="alert"]').should('have.text',' Enter valid PAN Card Number ')
    cy.wrap(form).find('[formcontrolname="panNumber"]').clear().type('ASDGE4567Y')
    cy.wrap(form).find('[class="right-tick-img ng-star-inserted"]').should('be.visible')
    cy.wrap(form).find('[formcontrolname="checked"] [type="checkbox"]').check({force:true}).should('be.checked')
    cy.wrap(form).find('[class="col-md-2"] [type="submit"]').should('be.enabled')
    cy.wrap(form).find('[formcontrolname="panNumber"]').clear().type(panNumber)
    cy.wrap(form).find('[class="col-md-2"] [type="submit"]').should('be.disabled')
    cy.wrap(form).find('[role="alert"]').should('have.text',' Enter valid PAN Card Number ')
    cy.wrap(form).find('[formcontrolname="panNumber"]').clear().type('ASDGE4567Y')
    cy.wrap(form).find('[class="right-tick-img ng-star-inserted"]').should('be.visible')
    cy.wrap(form).find('[class="col-md-2"] [type="submit"]').should('be.enabled')
    })

 }

}
export const onUserDetailsPage =new UserDetailsPage()
