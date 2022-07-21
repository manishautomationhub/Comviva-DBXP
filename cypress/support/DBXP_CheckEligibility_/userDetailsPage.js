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

enterPanNumber(panNumber){
cy.get('[class="current-crumb"]').scrollIntoView().should('be.visible').and('have.text','Check Eligibility')
cy.get('[class="check-eligibility-card ng-star-inserted"]').find('form').then(form =>{
cy.wrap(form).find('[formcontrolname="name"]').should('be.visible')
cy.wrap(form).find('[formcontrolname="dob"]').should('be.visible')
cy.wrap(form).find('[formcontrolname="mobile"]').scrollIntoView().should('be.visible')
cy.scrollTo('center', { ensureScrollable: false })
cy.wrap(form).find('[formcontrolname="email"]').scrollIntoView().should('be.visible')
cy.wrap(form).find('[formcontrolname="panNumber"]').scrollIntoView().type(panNumber)
cy.wrap(form).find('[type="checkbox"]').check({force:true}).should('be.checked')
cy.wrap(form).find('[class="proceed-btn mat-stroked-button"]').first().click()
})

}

chooseLoanType(LoanType,amount)
{
  cy.get('#mat-select-2').click()
    cy.get('[role="option"] span').each((listOfLoanType)=>{
    const loanTypeText = listOfLoanType.text().trim()
    cy.log('All Loan Type ',loanTypeText)
    if(loanTypeText.includes(LoanType)){
    cy.wrap(listOfLoanType).click()
    }
    })
  
  const myAmount=amount;
  cy.wrap(myAmount).should('be.gte',100000)
  cy.get('[formcontrolname="loanAmount"]').type(myAmount)
 
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
