/// <reference types="Cypress"/>

export class preApprovedLoanCard{

preApprovedLoanCard(enterLoanType)
{
cy.get('[class="offerLoanType"]').each((listOfLoanType)=>{
  const LoanTypeAndAmount=  listOfLoanType.text().trim()
  const textOfAmount={LoanTypeAndAmount}
  cy.writeFile('cypress//fixtures//PreApprovedLoanCardData.json',[textOfAmount],{flag:'a+'})
  if(LoanTypeAndAmount.includes(enterLoanType)){
    cy.log(LoanTypeAndAmount)
    cy.get('[class="apply-now mat-raised-button"]').first().click()
  }
})
return
}




}
export const onPreApprovedLoanCard_Pg= new preApprovedLoanCard()