/// <reference types="Cypress"/>

export class UserDetailsPage
{

validateUserDetailsPage(){
  cy.get('div[class="loan-card-body"]').find('form').then(form =>{
    cy.wrap(form).find('[formcontrolname="name"]').should('be.visible')
    cy.wrap(form).find('[formcontrolname="dob"]').should('be.visible')
    cy.scrollTo('center', { ensureScrollable: false })
    cy.wrap(form).find('[formcontrolname="mobile"]').should('be.visible')
    cy.wrap(form).find('[formcontrolname="email"]').scrollIntoView().should('be.visible')
  })
}

enterPanNumber(panNumber){
  
cy.get('div[class="loan-card-body"]').find('form').then(form =>{
cy.wrap(form).find('[formcontrolname="name"]').should('be.visible')
cy.wrap(form).find('[formcontrolname="dob"]').should('be.visible')
cy.scrollTo('center', { ensureScrollable: false })
cy.wrap(form).find('[formcontrolname="mobile"]').should('be.visible')
cy.wrap(form).find('[formcontrolname="email"]').should('be.visible')
cy.scrollTo('bottomLeft', { ensureScrollable: false })
cy.wrap(form).find('[formcontrolname="panNumber"]').type(panNumber)
cy.wrap(form).find('[formcontrolname="checked"] [type="checkbox"]').first().check({force:true}).should('be.checked')
cy.wrap(form).find('[class="col-md-2"] [type="submit"]').click()
})

 }

}
export const onUserDetailsPage =new UserDetailsPage()
