/// <reference types="Cypress"/>

export class SuccessfullyApplyLon
{

ValidateStatus()
{
cy.xpath("//p[@class='second-title']")
.should('be.visible')
}

ValidateApplicationNo()
{
    cy.xpath("p[class='first-heading-success'] span")
    .should('be.visible')
    
}

ValidateApplicationRequest()
{
cy.xpath("//p[@class='first-heading']")
.should('be.visible')

}

validateSuccessSymbol(){
    cy.xpath("//img[@class='card-image']")
    .should('be.visible')

}
validateSuccessPage(){
    this.ValidateStatus()
    this.validateSuccessSymbol()
    this.ValidateApplicationRequest()
    this.ValidateApplicationNo()
}
ClickOnCloseBtn(){
    cy.xpath("//button[@class='button-close']")
    .click({force:true})

}
}

export const onSuccessfullPage  = new SuccessfullyApplyLon()