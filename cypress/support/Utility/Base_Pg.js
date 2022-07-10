

export class Base 
{

clickOnMyAccountButton(){
        cy.get('[routerlink="/my-account"] i').click()
        }
        
syncAccountButton(){
    
    cy.get('[class="btn sync-btn"]').scrollIntoView().click({force:true}).click({force:true})
        
}

clickOnCard()
{
    cy.get('[class="personal-loan"]').first().click()
}

clickOnLoanButton(){

    const btn =cy.get('[routerlink="/manage-loan"] i img')
    btn.scrollIntoView().click({force:true}) 

}
clickOnApplyLoanBtn(){
const applyLnBtn=cy.xpath("//button[@routerlink='apply-loan']")
applyLnBtn.scrollIntoView().click({force:true})
}

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



}

export const onBase_Pg = new Base()