/// <reference types="Cypress"/>

export class CreditScore_Report
{
checkCreditScore(){
    cy.get('[class="score-value"] strong').then(scoretext=>{
    const score=    scoretext.text().trim()
    cy.get('[class="score-rating"] span').then(textRating=>{
    const rating=    textRating.text().trim()
    const scoreRating={score,rating}
cy.writeFile('cypress//fixtures//creditScore.json',[scoreRating])
    })
    })
}

clickOnDownLoad()
{
    cy.get('[class="download-button mat-flat-button mat-primary ng-star-inserted"]').click()
}
clickOnCreditCardReport()
{
    cy.get('[class="download-report-button"]').click()
}

chooseEmailCheckBox()
{
    cy.get('#emailcheck-input').check({force:true}).should('be.checked')
}
validateReportDownload()
{
    cy.readFile('cypress//downloads//creditReport.pdf').should('exist')
}



}
export const onCreditScore_Report_Pg= new CreditScore_Report()
