/// <reference types="Cypress"/>
export class PartClosure_Pg 
{

    choosePartClosure(enterAmount)
    {
cy.contains(' Part closure ').click()
cy.get('p[class="reaming-price"]').then(textOfAmount=>{
 const amount=   textOfAmount.text().trim()
// cy.log(amount)
const myAmount=enterAmount
cy.wrap(myAmount).should('be.lte',200000)
cy.get('[type="number"]').type(enterAmount)
})

this.clickOnCheckBox()
this.clickOnSubmitButton()
    }

    clickOnSubmitButton()
    {
        cy.get('#submitBtn').click()
    }
    
    clickOnCheckBox()
    {
        cy.contains('I agree to the ').click()
        // .check({force:true}).should('be.checked')
    }



    // AmountDetails()
    // {
    // cy.get('div').find('p[class="reaming-price"]').then(preClosure=>{
    // cy.wrap(preClosure).find('[class="col-md-4"] [class="reaming-price"]').then((textOfAmount)=>{
    //   const OutStandingAmount=textOfAmount.text().trim()
    //   cy.log(OutStandingAmount)
    //   const outStandingAmount={OutStandingAmount}
    //   cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[outStandingAmount],{flag:'a+'})
    // })
    
    // cy.wrap(preClosure).find('[class="reaming-price price-right"]').then((textInterstSave)=>{
    //   const IntrestSavepercentage= textInterstSave.text().trim()
    //   cy.log(IntrestSavepercentage)
    //   const intrestSavepercentage={IntrestSavepercentage}
    //   cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[intrestSavepercentage],{flag:'a+'})
    // })
    // cy.wrap(preClosure).find('[class="interest-amount emi-left"]').then((textEMI)=>{
    //   const EMILeft = textEMI.text().trim()
    //   cy.log(EMILeft)
    //   const emiLeft={EMILeft}
    //   cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[emiLeft],{flag:'a+'})
    // })
    // cy.wrap(preClosure).find('[class="interest-amount mid-amount"]').then((textAmountSave)=>{
    //   const IntrestAmountSave = textAmountSave.text().trim()
    //   const intrestAmountSave={IntrestAmountSave}
    //   cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[intrestAmountSave],{flag:'a+'})
    // })
    
    // cy.wrap(preClosure).find('[class="interest-amount"]').then((textIntrestPaid)=>{
    //   const IntrestPaidAmount =textIntrestPaid.text().trim()
    //   const intrestPaidAmount={IntrestPaidAmount}
    //   cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[intrestPaidAmount],{flag:'a+'})
    // })
    
    // cy.wrap(preClosure).find('[class="penaltyPercentSpan"]').then((textPreclosurePenalty)=>{
    //  const  PreClosurePenalty =textPreclosurePenalty.text().trim()
    //  const preClosurePenalty={PreClosurePenalty}
    //  cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[preClosurePenalty],{flag:'a+'})
    // })
    // // cy.wrap(preClosure).find('').text().trim()
    // // cy.wrap(preClosure).find('').text().trim()
    // cy.wrap(preClosure).find('[class="account-details"]').then((textAccountNo)=>{
    //   const DebitFromAccountWithAccountType =textAccountNo.text().trim()
    //   const debitFromAccountWithAccountType={DebitFromAccountWithAccountType}
    //   cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[debitFromAccountWithAccountType],{flag:'a+'})
    // })
    // cy.wrap(preClosure).find('[class="balance mat-hint mat-right"]').then((textAccountBalance)=>{
    //   const BalanceOfChooseAccount = textAccountBalance.text().trim()
    //   const balanceOfChooseAccount={BalanceOfChooseAccount}
    //   cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[balanceOfChooseAccount],{flag:'a+'})
    // })
    
    // })
    // }








}
export const onPart_Closure_Pg  = new PartClosure_Pg()