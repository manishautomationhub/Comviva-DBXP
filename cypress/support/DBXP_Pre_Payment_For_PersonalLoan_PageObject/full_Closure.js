/// <reference types="Cypress"/>


export class FullClosure_Pg 
{

  validateFullClosure()
  {
  cy.get('[class="mat-checkbox-input cdk-visually-hidden"]').should('be.checked')

  }  

AmountDetails()
{
cy.get('div').find('[class="pre-closed-option-card"]').then(preClosure=>{
cy.wrap(preClosure).find('[class="col-md-4"] [class="reaming-price"]').then((textOfAmount)=>{
  const OutStandingAmount=textOfAmount.text().trim()
  cy.log(OutStandingAmount)
  const outStandingAmount={OutStandingAmount}
  cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[outStandingAmount],{flag:'a+'})
})

cy.wrap(preClosure).find('[class="reaming-price price-right"]').then((textInterstSave)=>{
  const IntrestSavepercentage= textInterstSave.text().trim()
  cy.log(IntrestSavepercentage)
  const intrestSavepercentage={IntrestSavepercentage}
  cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[intrestSavepercentage],{flag:'a+'})
})
cy.wrap(preClosure).find('[class="interest-amount emi-left"]').then((textEMI)=>{
  const EMILeft = textEMI.text().trim()
  cy.log(EMILeft)
  const emiLeft={EMILeft}
  cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[emiLeft],{flag:'a+'})
})
cy.wrap(preClosure).find('[class="interest-amount mid-amount"]').then((textAmountSave)=>{
  const IntrestAmountSave = textAmountSave.text().trim()
  const intrestAmountSave={IntrestAmountSave}
  cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[intrestAmountSave],{flag:'a+'})
})

cy.wrap(preClosure).find('[class="interest-amount"]').then((textIntrestPaid)=>{
  const IntrestPaidAmount =textIntrestPaid.text().trim()
  const intrestPaidAmount={IntrestPaidAmount}
  cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[intrestPaidAmount],{flag:'a+'})
})

cy.wrap(preClosure).find('[class="penaltyPercentSpan"]').then((textPreclosurePenalty)=>{
 const  PreClosurePenalty =textPreclosurePenalty.text().trim()
 const preClosurePenalty={PreClosurePenalty}
 cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[preClosurePenalty],{flag:'a+'})
})
// cy.wrap(preClosure).find('').text().trim()
// cy.wrap(preClosure).find('').text().trim()
cy.wrap(preClosure).find('[class="account-details"]').then((textAccountNo)=>{
  const DebitFromAccountWithAccountType =textAccountNo.text().trim()
  const debitFromAccountWithAccountType={DebitFromAccountWithAccountType}
  cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[debitFromAccountWithAccountType],{flag:'a+'})
})
cy.wrap(preClosure).find('[class="balance mat-hint mat-right"]').then((textAccountBalance)=>{
  const BalanceOfChooseAccount = textAccountBalance.text().trim()
  const balanceOfChooseAccount={BalanceOfChooseAccount}
  cy.writeFile('cypress//fixtures//Data_of_Full_CLosure.json',[balanceOfChooseAccount],{flag:'a+'})
})

})
}

clickOnSubmitBtn()
{
  cy.get('[class="mat-button-wrapper"]').last().click()
}

clickOnCheckBox()
{
  cy.get('[class="mat-checkbox-input cdk-visually-hidden"]').last().check({force:true})
}



}
export const onFull_Closure_Pg  = new FullClosure_Pg()