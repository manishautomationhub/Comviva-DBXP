/// <reference types="Cypress"/>

 export class LoanDetails
{



chooseCurrency(enterCurrency)
{
    cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[formcontrolname="currencyId"]').then(currencyDropdown =>{
    const textOfDD = currencyDropdown.text().trim()
    if(textOfDD.includes('Currency')){
cy.wrap(currencyDropdown).click()
cy.get('[role="option"] span').each((listCurrency)=>{
const currencyText = listCurrency.text().trim()
cy.log('All Currency Type',currencyText)
if(currencyText.includes(enterCurrency)){
    cy.wrap(listCurrency).click()
    cy.wrap(listCurrency).should('contain',currencyText)
}
})
    }
    })

    })
}

chooseLoanTypeAndEnterAmount(enterLoanType, enterAmount,enterCurrencyType)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[formcontrolname="loanType"]').then(loanTypeDD => {
cy.wrap(loanTypeDD).click()
cy.get('[role="option"] span').each((listOfLoanType)=>{
const loanTypeText = listOfLoanType.text().trim()
cy.log('All Loan Type ',loanTypeText)
if(loanTypeText.includes(enterLoanType)){
cy.wrap(listOfLoanType).click()
cy.wrap(listOfLoanType).should('contain',loanTypeText)

 if(loanTypeText.includes('Business')){
    const my_value=enterAmount;
    cy.wrap(my_value).should('not.be.gte',50001)
    // cy.wrap(my_value).should('not.be.lte',100000)
    cy.get('[formcontrolname="loanAmount"]').type(my_value)
   this.chooseCurrency('USD - $')
cy.get('[class="mat-error-text mat-error ng-star-inserted"]').should('have.text',' Please enter amount between ($ 50,001 - $ 100,000) ')
}
else if(loanTypeText.includes('Personal')){
    const my_value=enterAmount;
    cy.wrap(my_value).should('not.be.gte',25000)
    // cy.wrap(my_value).should('not.be.lte',500000)
    cy.get('[formcontrolname="loanAmount"]').type(my_value)
  this.chooseCurrency('USD - $')
    cy.get('[class="mat-error-text mat-error ng-star-inserted"]').should('have.text',' Please enter amount between ($ 25,000 - $ 500,000) ')
}
else if(loanTypeText.includes('Home')){
    const my_value=enterAmount;
    cy.wrap(my_value).should('not.be.gte',5000)
    // cy.wrap(my_value).should('not.be.lte',50000)
    cy.get('[formcontrolname="loanAmount"]').type(my_value)
  this.chooseCurrency('USD - $')
    cy.get('[class="mat-error-text mat-error ng-star-inserted"]').should('have.text',' Please enter amount between ($ 5,000 - $ 50,000) ')
}
else if(loanTypeText.includes('Gold')){
    const my_value=enterAmount;
    cy.wrap(my_value).should('not.be.gte',25000)
    // cy.wrap(my_value).should('not.be.lte',500000)
    cy.get('[formcontrolname="loanAmount"]').type(my_value)
  this.chooseCurrency('USD - $')
    cy.get('[class="mat-error-text mat-error ng-star-inserted"]').should('have.text',' Please enter amount between ($ 25,000 - $ 500,000) ')
}
else if(loanTypeText.includes('Car')){
    const my_value=enterAmount;
    cy.wrap(my_value).should('not.be.gte',25000)
    // cy.wrap(my_value).should('not.be.lte',500000)
    cy.get('[formcontrolname="loanAmount"]').type(my_value)
   cy.get('[formcontrolname="youSave"]').click()
cy.get('[class="mat-error-text mat-error ng-star-inserted"]').should('have.text',' Please enter amount between ($ 25,000 - $ 500,000) ')
}
}
})
})
this.chooseCurrency(enterCurrencyType)
cy.wrap(form).find('label[for="mat-checkbox-2-input"] div[class="mat-checkbox-inner-container"] input[type="checkbox"]')
.should('not.be.checked')
cy.wrap(form).find(' button[type="submit"]').eq(2)
.should('be.disabled')
})

}

validateEMICalculation()
{
cy.get('@clickOnEMICalculationLink').click()
this.ClickChooseLoanTypeDropDown()
this.chooseBusinessLoanType()
this.chooseCurrency()
this.EnterAmount()
this.EnetrTenureMonths()
cy.get('[class="btn-emi"]').should('be.visible')
cy.get('[class="proceed-btn mat-stroked-button"]').click()
}

ValidateChooseLoanTypePg()
{
cy.get('@enetYourDetailsPage').should('be.visible')
}


}

export const onLoanTypePage = new LoanDetails()

