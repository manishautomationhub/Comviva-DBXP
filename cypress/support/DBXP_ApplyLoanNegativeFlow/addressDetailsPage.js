/// <reference types="Cypress"/>

export class AddressDetailsPage
{

enterAddress(address, pinCode)
{
   
cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[class="edit-button ng-star-inserted"]').first().click()
cy.wrap(form).find('[placeholder="Enter Address"]').clear().type(address)
cy.wrap(form).find('[class="edit-button ng-star-inserted"]').last().click()
cy.wrap(form).find('[formcontrolname="pincode"]').clear().type(pinCode)
cy.wrap(form).find('[formcontrolname="currentAddress"] input').check({force:true}).should('be.checked')
cy.scrollTo('bottomRight',{ensureScrollable:false})
cy.wrap(form).find('div[class="checkBoxNproceed ml-1 mt-0"] button[type="submit"]').click()
})

}


}
export const onAddressPage  = new AddressDetailsPage()