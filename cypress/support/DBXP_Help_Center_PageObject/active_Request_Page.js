/// <reference types="cypress"/>

export class HelpCenterPage {



DataOfActiveLoan()
{
cy.get('[class="loanTitle"] div').each((listOfAmount)=>{
const amount= listOfAmount.text().trim()
const amountText={amount}
cy.writeFile('cypress//fixtures//HelpCenterData.json',[amountText],{flag:'a+'})
})
cy.get('[class="applicationNum ng-star-inserted"]').each((listOfApplicationNumber)=>{
    const applicationNumberAndDate= listOfApplicationNumber.text().trim()
    const textOfApplication={applicationNumberAndDate}
    cy.writeFile('cypress//fixtures//HelpCenterData.json',[textOfApplication],{flag:'a+'})
})

}


applicationStatus()
{
cy.get('[class="mat-card-class mat-card ng-star-inserted"]').first().click()
cy.wait(2000)
this.readDataOfApplication()
this.clickOnBackButton()
cy.get('[class="mat-card-class mat-card ng-star-inserted"]').eq(1).click()
cy.wait(2000)
this.readDataOfApplication()
this.clickOnBackButton()
cy.get('[class="mat-card-class mat-card ng-star-inserted"]').eq(2).click()
cy.wait(2000)
this.readDataOfApplication()
this.clickOnBackButton()
cy.get('[class="mat-card-class mat-card ng-star-inserted"]').eq(3).click()
cy.wait(2000)
this.readDataOfApplication()
}



readDataOfApplication()
{
    cy.get('[class="d-flex justify-content-center"] p').each((detailsOfLoan)=>{
        const LoanDetails=   detailsOfLoan.text().trim()
        // cy.get('[class="loansStatusMainCard__blueCircle_date ng-star-inserted"]').eq(1).then(date=>{
        // const ApplicationDate=    date.text().trim()
        // const appDate={ApplicationDate}
        // })
        const textOfDetails={LoanDetails}
        cy.writeFile('cypress//fixtures//HelpCenterData.json',[textOfDetails],{flag:'a+'})
        
       })
}

clickOnBackButton()
{
 cy.get('[routerlink="/help-center/loan-request"]').click()
}
clickOnActiveRequest()
{
    cy.get('[class="btn active-btn"] [class="numeric"]').click()
}



// clickOnActiveRequest()
// {
// // cy.get('[class="btn active-btn"] [class="numeric"]').then(numberOfActiveLoan=>{
// // const number= numberOfActiveLoan.text().trim()
// // cy.wrap(numberOfActiveLoan).click()
//    cy.get('[class="mat-card-class mat-card ng-star-inserted"]').each((listOfAmount)=>{
//     // this.DataOfActiveLoan()
//     if(listOfAmount<=4){
//    cy.wrap(listOfAmount).click()
//     cy.wait(2000)
//     this.readDataOfApplication()
//     this.clickOnBackButton().click()
//     }
//     this.clickOnActiveRequest()
// })
// // })
// }


}

export const onHelpCenter_Pg = new HelpCenterPage()