/// <reference types="Cypress"/>

export class EnterYourDetails
{

validateOffer()
{
cy.get('div [class="card-title mb-0"]').first().scrollIntoView().should('be.visible')
cy.get('[class="loan-logo ng-star-inserted"]').scrollIntoView().should('be.visible')
this.maxAmount()
this.minAmount()
this.validateCurrncy()
}

maxAmount()
{
cy.get('[class="btn btn-loan btn-check-eligiblity mat-stroked-button offer-label mb-0"]').then((amount)=>{
  const maximumAmount= amount.text().trim()
  cy.log(maximumAmount)
  cy.wrap(amount).scrollIntoView().should('be.visible')
})
}

minAmount(){
cy.get('[class="btn btn-loan mat-stroked-button offer-label mb-0"]').then((amount)=>{
 const minimumAmount= amount.text().trim()
 cy.log(minimumAmount)
 cy.wrap(amount).scrollIntoView().should('be.visible')
})
}

chooseCurrency(enterCurrency){
cy.wrap(form).find('[formcontrolname="currencyId"]').then(currencyDropdown =>{
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
}

validateCurrncy()
{
    cy.get('[formcontrolname="currencyId"]').scrollIntoView().should('contain','USD - $')
}
enterAmount(amount)
{
   cy.get('[formcontrolname="loanAmount"]').clear().type(200)
   cy.get('input[formcontrolname="requiredTenure"]').click()
   cy.contains(' Please enter amount between ($ 100,000 - $ 1,100,000) ').should('be.visible')
   this.clickOnProceedBtn().should('be.disabled')
   cy.get('[formcontrolname="loanAmount"]').clear().type(amount)
   this.clickOnProceedBtn().should('be.disabled')
}

enterTenure(tenure)
{
const month=tenure

cy.get('[formcontrolname="loanAmount"]').clear().type(400000)
cy.get('input[formcontrolname="requiredTenure"]').clear().type(month)
this.clickOnProceedBtn().should('be.enabled')
}

clickOnProceedBtn()
{
   return cy.get('[class="proceed-btn proceed-btn-new mat-stroked-button"]').first().scrollIntoView()
}


}
export const onEnterYourDetails_Pg = new EnterYourDetails()
