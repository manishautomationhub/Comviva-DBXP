/// <reference types="Cypress"/>

export class PurposeLoanDetails
{

choosePurposeOfLoanWithFatherAndMotherName(enterPurposeOfLoan,fathername, motherName)
{
  
cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[formcontrolname="loanPurpose"] span').then(loanPurposeDD =>{
   const textOfDD= loanPurposeDD.text().trim()
   if(textOfDD.includes('Choose Purpose')){
    cy.wrap(loanPurposeDD).click()
cy.get('[role="option"] span').each((listOfPurpose)=>{
const textOfLoanPurpose = listOfPurpose.text().trim()
cy.log('All Purpose Of loan',textOfLoanPurpose)
if(textOfLoanPurpose.includes(enterPurposeOfLoan)){
cy.wrap(listOfPurpose).click()
cy.wrap(listOfPurpose).should('contain',textOfLoanPurpose)
}
   })
   }
})
cy.wrap(form).find('[formcontrolname="fathersName"]')
.clear().type(fathername)
cy.wrap(form).find('[formcontrolname="motherName"]')
.clear().type(motherName)
cy.scrollTo('bottomRight', { ensureScrollable: false })
cy.wrap(form).find('[type="submit"]').eq(3).click()
})

}

purposeOfLoanWithFatherAndMotherName(fathername, motherName)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[formcontrolname="fathersName"]')
.clear().type(fathername)
cy.wrap(form).find('[formcontrolname="motherName"]]')
.clear().type(motherName)
cy.scrollTo('bottomRight', { ensureScrollable: false })
cy.wrap(form).find('[type="submit"]').eq(3).click()
})

}

}

export const onPurposeOfLoanPage  = new PurposeLoanDetails();
