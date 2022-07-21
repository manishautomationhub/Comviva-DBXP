

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
    cy.get('[class="acc-No"] img').first().click({force:true})
}

clickOnLoanButton(){

    const btn =cy.get('[routerlink="/manage-loan"] i img')
    btn.scrollIntoView().click() 

}
clickOnApplyLoanBtn(){
const applyLnBtn=cy.xpath("//button[@routerlink='apply-loan']")
applyLnBtn.scrollIntoView().click()
}

clickOnHomeIcon()
{
    cy.get('[routerlink="/home"]').click()
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

clickOnCheckEligibiltyBtn()
{
cy.get('[routerlink="check-eligibility"]').click()
cy.get('[class="h-Enter-Details mt-4 ng-star-inserted"]').scrollIntoView().should('be.visible')
.and('have.text','Enter your details')
}

clickOnCheckEligibilityLink()
{
cy.get('[class="headerButton"] p').scrollIntoView().click({force:true})

}

clickOnManagePersonalLoan(){

    cy.get('[routerlink="/manage-loan/manage-personal-loan"]').click()
    
    }
    
    clickOnPrePaymentOfPersonalLoan()
    {
    cy.contains('Pre-payment of Personal Loan').click()
    }


clickOnHelpCenter()
{
cy.get('[routerlink="/help-center"] img').click()

}
clickOnCreditScore()
{
    cy.get('[class="col-sm-8 card-image"] [class="img-size"]').last().click()
}

}

export const onBase_Pg = new Base()