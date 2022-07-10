/// <reference types="Cypress"/>

export class Base 
{

LoanButton(){

    const btn =cy.get('[routerlink="/manage-loan"] i img')
    btn.scrollIntoView().click({force:true}) 

}
ApplyLoanBtn(){
const applyLnBtn=cy.xpath("//button[@routerlink='apply-loan']")
applyLnBtn.scrollIntoView().click({force:true})

}






// clickOnCard(loanType)
// {
//   cy.get('div').find('[class="personal-loan"]').each((listOfcard) =>{
//     cy.wrap(listOfcard).find('[class="account-loan"]').each((listOfLoanType)=>{
//        const LoneType= listOfLoanType.text().trim()
// if(LoneType.includes(loanType)){
//   cy.wrap(listOfLoanType).click()
// }
//     })
//   })
// }

validLogOut()
{

cy.get('[class="user-name"]').click()
cy.get('[class="logoutnow mat-menu-item"]').click()
cy.get('[class="btn apply-button"]').click()


}



clickOnAddNewLoanButton()
{
    cy.xpath("//p[contains(text(),'Add New Loan')]/..//img")
    .click()
 
}

  


TermsOfService(){
    // const ClickOnTS=cy.xpath("//a[contains(text(),' Terms of Service')]")
    // ClickOnTS.click({force:true})
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
          win.location.href = 'href="https://www.comviva.com/legal/terms-of-use/';
        }).as("popup")
      })
    //   cy.click({force:true})
      cy.xpath("//a[contains(text(),' Terms of Service')]")
        .should("be.called")
      cy.xpath("//span[@class='breadcrumb_last']")
        .should('have.text', ' Terms of Service')
return this
}

PrivacyPolicy(){
    const ClickOnPP=cy.xpath("(//a[contains(text(),'Privacy Policy')])[1]")
    ClickOnPP.scrollIntoView().click({force:true})
    return this    
}

SaveAndDraft(){
    const ClickSaveDraft=cy.xpath("//p[contains(text(),'Save as Draft')]")
    ClickSaveDraft.scrollIntoView().click({force:true})
    const ClickOnDoneBtn=cy.xpath("//div[@class='col-md-4']//button[@type='submit']")
    ClickOnDoneBtn.click({force:true})
    return this
}

PreviousBtn(){

   const PreBtn= cy.xpath("(//button[@type='button']//span[contains(text(),'Previous')])[1]")
   PreBtn.click({force:true})
   return this
}


}

export   const onBasePage = new Base()