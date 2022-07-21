/// <reference types="Cypress"/>
export class LoanSummaryAndOutstandingAmount
{

clickOnDoneBtn()
{
    cy.get('[class="btn btn-primary btn-done mat-ripple mat-stroked-button"]').click()
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

outstandingAmountValidate()
{
cy.get('[class="outstandingMainCard__blueCircleAmount black"]').should('be.visible')
// .and('have.text',' 1,000,000 ')
cy.get('[class="outstandingMainCard__blueCircleDate ng-star-inserted"]').first()
.should('be.visible')
// .and('have.text','Loan applied : 03 Feb 2021 ')
cy.get('[class="outstandingMainCard__blueCircleAmount outstandingMainCard__blueCircleAmount__center"]')
.should('be.visible')
// .and('have.text',' 650,000 ')
cy.get('[class="outstandingMainCard__whitecircledate"]').scrollIntoView()
.should('be.visible')
// .and('have.text',' 5,000 ')
cy.get('[class="outstandingMainCard__blueCircleDate outstandingMainCard__blueCircleDate--right ng-star-inserted"]')
.should('be.visible')
// .and('have.text')
}

SummaryAmountData()
{
cy.get('div').find('[class="summay__whiteCard"]').then(summary=>{
cy.wrap(summary).find('[class="col-md-4"] p').each((detail)=>{
 const amountOfSummary=   detail.text().trim()
 const details={amountOfSummary}
 cy.writeFile('cypress//fixtures//SummaryAndOutstanding_Data.json',[details],{flag:'a+'})
})
cy.wrap(summary).get('[class="col-md-1"] img').click({force:true})
cy.get('[class="main-toggle"] [class="row"] div').each((details)=>{
    const detailsOfIBtn=  details.text().trim()
    const iButton={detailsOfIBtn}
    cy.writeFile('cypress//fixtures//SummaryAndOutstanding_Data.json',[iButton],{flag:'a+'})
   })
   cy.wrap(summary).get('[class="col-md-1"] img').click({force:true})
})

}

outStandingAmountData()
{
cy.get('div').find('[class="outstandingMainCard__outstandInsideCard"]').then(outStanding=>{
    cy.wrap(outStanding).find('[class="row"] div p').each((outStandingData)=>{
       const outStandingAmountData= outStandingData.text().trim()
       const data={outStandingAmountData}
       cy.writeFile('cypress//fixtures//SummaryAndOutstanding_Data.json',[data],{flag:'a+'})
    })
})
}

loanSummaryCardDetails()
{
cy.get('div').find('[class="summary-card-second-list"]').then(loanSummary=>{
cy.wrap(loanSummary).find(' [class="col-md-6"] p').each((listOfData)=>{
   const loanSummaryData= listOfData.text().trim()
   const loanData={loanSummaryData}
   cy.writeFile('cypress//fixtures//SummaryAndOutstanding_Data.json',[loanData],{flag:'a+'})
})
cy.get('[class="col-md-1 last-icon"] img').click({force:true})
cy.get('[class="main-toggle"] [class="row"] div').each((details)=>{
    const detailsOfIBtn=  details.text().trim()
    const iButton={detailsOfIBtn}
    cy.writeFile('cypress//fixtures//SummaryAndOutstanding_Data.json',[iButton],{flag:'a+'})
   })
   cy.get('[class="col-md-1 last-icon"] img').click({force:true})

})


}




}

export const onLoanSummaryAndOutStandingAmount_Pg = new LoanSummaryAndOutstandingAmount()