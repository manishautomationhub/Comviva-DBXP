/// <reference types="Cypress"/>

export class EMI_Details 
{

emi_Details(enterDate)
{
cy.get('div').find('[class="emi-inside-card"]').then(emi =>{
cy.wrap(emi).find('[class="col-sm-6"] label').then((selectDate)=>{
 const text=   selectDate.text().trim()
if(text.includes(' Select EMI Date')){
    cy.wrap(emi).find('[class="emi-label"]').then(dropDown=>{
    const textOfDropDown= dropDown.text().trim()
    cy.log(textOfDropDown)
    expect(textOfDropDown).to.equals('Day 05 of every month')
    })
cy.wrap(emi).find('[formcontrolname="newEmiDate"]').then(EMiDropDown=>{
cy.wrap(EMiDropDown).click()
cy.get('mat-option[role="option"] span').each((listOfDate)=>{
    const textOfDate = listOfDate.text().trim()
if(textOfDate.includes(enterDate)){
cy.wrap(listOfDate).click()
cy.wrap(dropDown).should('contain','Day '+enterDate+' of every month')
}
})
})
}
})
})
}


clickOnRequest_Intrest_Certificate(){
cy.get('[routerlink="/manage-loan/interest-request"]').click()
}

clickOnRequest_Statement()
{
cy.get('[routerlink="/manage-loan/export-statement"]').click()

}
more_Options(enterNameForStatement)
{

    cy.get('[class="more-option-card"] p').each((listOfMoreOptions)=>{
        const text= listOfMoreOptions.text().trim()
        cy.log(text)
if(text.includes(enterNameForStatement)){
cy.wrap(listOfMoreOptions).click()
}
    })
}

}
export const onEMI_Details_Pg =new EMI_Details()