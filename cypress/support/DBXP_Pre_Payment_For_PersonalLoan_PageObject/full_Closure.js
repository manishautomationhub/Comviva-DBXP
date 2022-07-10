/// <reference types="Cypress"/>


export class FullClosure_Pg 
{

  choosePreClosureOption(typeOfPreClosure)
  {
cy.get('div').find('.pre-closed-option-card').then(preClosure =>{
    cy.wrap(preClosure).find('.col-md-2 span').each((listOfCheckBox)=>{
      const textOfCheckBox=  listOfCheckBox.text().trim()
      if(textOfCheckBox.includes(typeOfPreClosure)){
        if(textOfCheckBox.includes(' Full closure ')){
            cy.wrap(listOfCheckBox).should('be.checked')
        }
        else{
            cy.wrap(listOfCheckBox).check({force:true}).should('be.checked')
        }

      }
    })
})




  }  




}
export const onFull_Closure_Pg  = new FullClosure_Pg()