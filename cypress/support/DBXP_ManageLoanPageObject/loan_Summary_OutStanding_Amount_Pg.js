/// <reference types="Cypress"/>
export class LoanSummaryAndOutstandingAmount
{


summary_I_Button()
{
    cy.get('[class="info-img"]').click()
cy.get('[class="showToggle ng-star-inserted"] div').each((detailsOfAmount)=>{
 const textOfAmount=   detailsOfAmount.text().trim()
cy.log(textOfAmount)

})

}

amountPaidAsToday_I_Button()
{
cy.get('[class="shape-img"]').click()
cy.get('[class="amount-To-Be-Paid-Toggle amount-toggle-new only-screen ng-star-inserted"] div').each((detailsOfAmountAsPaidToday)=>{
    const textOfAmount = detailsOfAmountAsPaidToday.text().trim()
cy.log(textOfAmount)
})
}

outStandingAmount()
{
cy.get('div').find('[class="outstandingMainCard"]').then(outStandingAmount =>{
cy.wrap(outStandingAmount).find('[class="outstandingMainCard__title"]').then(outStandinAm=>{
   const textOf_OS_Amount= outStandinAm.text().trim()
   expect(textOf_OS_Amount).to.equals('Outstanding Amount')
})
cy.wrap(outStandingAmount).find('[class="row"] p').each((listOfDetails)=>{
    const textOfDetails= listOfDetails.text().trim()
    cy.log(textOfDetails)
})
})
}

go_On_MoreOptions_Click_Manage_Personal_Loan()
{
cy.get('[class="more-option-div"]').find('[class="summary"]').then(mpreOptions =>{
    cy.wrap(mpreOptions).find('[class="more-option-card"] p').each((listOfSummary)=>{
       const textOfMoreOptions= listOfSummary.text().trim()
      cy.log(textOfMoreOptions)
      cy.get('[routerlink="/manage-loan/manage-personal-loan"]').click()

    })

})
}


clickOnManagePersonalLoan(){

cy.get('[routerlink="/manage-loan/manage-personal-loan"]').click()

}

clickOnPrePaymentOfPersonalLoan()
{
cy.contains('Pre-payment of Personal Loan').click()

}

}

export const onLoanSummaryAndOutStandingAmount_Pg = new LoanSummaryAndOutstandingAmount()