/// <reference types="Cypress"/>

export class UserDetailsPage
{

validateUserDetailsPage(){
  cy.get('[class="check-eligibility-card ng-star-inserted"]').find('form').then(form =>{
    cy.wrap(form).find('[formcontrolname="name"]').should('be.visible')
    cy.wrap(form).find('[formcontrolname="dob"]').should('be.visible')
    cy.scrollTo('center', { ensureScrollable: false })
    cy.wrap(form).find('[formcontrolname="mobile"]').should('be.visible')
    cy.wrap(form).find('[formcontrolname="email"]').scrollIntoView().should('be.visible')
  })
}

enterPanNumber(panNumber,amount){
  cy.get('div').find('form').then(form =>{
  cy.wrap(form).find('[formcontrolname="name"]').should('be.visible')
  cy.wrap(form).find('[formcontrolname="dob"]').should('be.visible')
  cy.wrap(form).find('[formcontrolname="mobile"]').should('be.visible')
  cy.scrollTo('center', { ensureScrollable: false })
  cy.wrap(form).find('[formcontrolname="email"]').scrollIntoView().should('be.visible')
  cy.get('[formcontrolname="loanAmount"]').scrollIntoView().clear().type(6000)
  cy.wrap(form).find('[formcontrolname="panNumber"]').type(panNumber)
  cy.contains(' Please Enter Amount ').scrollIntoView().should('be.visible')
  cy.wrap(form).find('[formcontrolname="panNumber"]').type(panNumber)
  cy.get('[formcontrolname="loanAmount"]').scrollIntoView().clear().type(6000)
  cy.wrap(form).find('#mat-checkbox-1-input').should('not.be.checked')
  cy.wrap(form).find('[class="proceed-btn mat-stroked-button"]').should('be.disabled')
  cy.contains(' Enter valid PAN card Number ').scrollIntoView().should('be.visible')
  cy.wrap(form).find('[formcontrolname="panNumber"]').clear().type('ASDGE4567Y')
  cy.wrap(form).find('[class="right-tick-img ng-star-inserted"]').should('be.visible')
  cy.wrap(form).find('#mat-checkbox-1-input').check({force:true}).should('be.checked')
  cy.get('[formcontrolname="loanAmount"]').clear().type(700000)
  cy.wrap(form).find('[class="proceed-btn mat-stroked-button"]').should('not.be.enabled')
  cy.wrap(form).find('[formcontrolname="panNumber"]').clear().type(panNumber)
  cy.wrap(form).find('[class="proceed-btn mat-stroked-button"]').should('be.disabled')
  cy.contains(' Enter valid PAN card Number ').scrollIntoView().should('be.visible')
  cy.wrap(form).find('[formcontrolname="panNumber"]').clear().type('ASDGE4567Y')
  cy.wrap(form).find('[class="right-tick-img ng-star-inserted"]').should('be.visible')
  cy.get('[formcontrolname="loanAmount"]').clear().type(amount)
  cy.wrap(form).find('[formcontrolname="panNumber"]').scrollIntoView().clear().type(panNumber)
  cy.contains(' Please Enter Amount ').scrollIntoView().should('be.visible')
  cy.get('[formcontrolname="loanAmount"]').scrollIntoView().clear().type(6000)
  cy.contains(' Please Enter Amount ').scrollIntoView().should('be.visible')
  cy.wrap(form).find('#mat-checkbox-1-input').scrollIntoView().check().should('be.visible')
  cy.wrap(form).find('[class="proceed-btn mat-stroked-button"]').first().should('be.disabled')
  })
  
   }

chooseLoanType(LoanType,amount)
{

  cy.get('[formcontrolname="loanType"]').click()
    cy.get('[role="option"] span').each((listOfLoanType)=>{
    const loanTypeText = listOfLoanType.text().trim()
    cy.log('All Loan Type ',loanTypeText)
    if(loanTypeText.includes(LoanType)){
      cy.wrap(listOfLoanType).click()
    cy.contains(' Select Type of Loan ').should('be.visible')
    }
    })
  cy.get('[formcontrolname="loanAmount"]').clear().type(amount)
  cy.contains(' Please Enter Amount ').should('be.visible')
  cy.get('[formcontrolname="loanAmount"]').clear().type(6000)
  cy.contains(' Please Enter Amount ').should('be.visible')
 
}

chooseCurrency(enterCurrency)
{
cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[formcontrolname="selectCurrency"]').first().then(currencyDropdown =>{
cy.wrap(currencyDropdown).click()
cy.get('[role="option"] span').each((listCurrency)=>{
const currencyText = listCurrency.text().trim()
cy.log('All Currency Type',currencyText)
if(currencyText.includes(enterCurrency)){
    cy.wrap(listCurrency).click()
    cy.wrap(listCurrency).should('contain',currencyText)
}
})
    })
    })
}


}
export const onUserDetailsPage =new UserDetailsPage()
