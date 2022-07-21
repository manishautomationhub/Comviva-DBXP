/// <reference types="Cypress"/>


export class EmploymentTypePage
{

chooseEmploymentType(enterEmploymentType)
{
    cy.get('[class="h-Enter-Details"]').should('be.visible')
    .and('have.text','Enter your additional details')
    cy.get('[class="check-eligibility-card-inside"]').find('form').then(form =>{
        cy.wrap(form).find('mat-select[formcontrolname="employmentType"]').then(dropdown =>{
            cy.wrap(dropdown).click()
            cy.get('mat-option[role="option"] span').each((listItem)=>{
            const itemText = listItem.text().trim()
            if(itemText.includes(enterEmploymentType)){
            cy.wrap(listItem).click()
            cy.wrap(dropdown).should('contain',itemText)
            }
        })
            })
        })

}

enterDataForRetired(lastEmployerName){
   
    cy.get('div').find('form').then(form =>{
    cy.wrap(form).find('[placeholder="Employer Name"]').clear().type(lastEmployerName)
    cy.scrollTo('bottomRight', { ensureScrollable: false })
    cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.disabled').click()
    cy.contains(' Alphabets, numbers, space and special characters allowed ').should('be.visible')
    cy.wrap(form).find('[placeholder="Employer Name"]').clear().type('hgfdsasd')
    cy.wrap(form).find('[placeholder="Employer Name"]').clear().type(lastEmployerName)
    cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.disabled').click()
    cy.contains(' Alphabets, numbers, space and special characters allowed ').should('be.visible')
})

    }

enterDataForBusinessOwner(startDate, companyName, lastYearPAT)
{

    cy.get('div').find('form').then(form =>{

cy.wrap(form).find('[placeholder="Company Name"]').type(companyName)
cy.wrap(form).find('[class="input-value mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid"]')
.eq(1).type(lastYearPAT)
cy.wrap(form).find('[placeholder="Start Date"]').clear().type(startDate)
cy.contains(' Alphabets, numbers, space and special characters allowed ').should('be.visible')
cy.contains(' Only Numbers Allowed ').should('be.visible')
cy.wrap(form).find('[class="row"] [type="submit"]').should('be.disabled')
    })

}

enetrDataForSalaried(enterEmployerName,enterMonthlyIncome)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Employer Name"]').clear().type(enterEmployerName)
cy.wrap(form).find('[class="mat-form-field-infix"] [type="text"]').last().clear().type(enterMonthlyIncome)
cy.contains(' Alphabets, numbers, space and special characters allowed ').should('be.visible')
cy.wrap(form).find('[class="row"] [type="submit"]').should('be.disabled')
cy.wrap(form).find('[placeholder="Employer Name"]').clear().type(enterEmployerName)
cy.contains(' Only numbers and comma or decimal ').should('be.visible')

})

}

enterDataForStaudent(qualification, co_BorrowerName, co_BorrowerMonthlyIncome)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(5).clear().type(co_BorrowerMonthlyIncome)
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(6).clear().type(co_BorrowerName)
cy.wrap(form).find('[placeholder="Qualification"]').clear().type(qualification)
cy.contains(' Only digitis, decimal and comma allowed ').should('be.visible')
cy.wrap(form).find('[class="row"] [type="submit"]').should('be.disabled')
cy.contains(' Only Alphabets Allowed ').should('be.visible')
cy.contains(' Alphabets, numbers, space and special characters allowed ').should('be.visible')
})

}

chooseProfession(enterProfession)
{
    cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[aria-label="Select your Profession"]').then(professionDD =>{
cy.wrap(professionDD).click()
cy.get('[role="option"] span').each((listprofession)=>{
const professionText = listprofession.text().trim()
if(professionText.includes(enterProfession))
cy.wrap(listprofession).click()
cy.wrap(listprofession).should('contain',professionText)
})
})
    })
}

enterDataForSelfEmployed(startDateProfession, companyNameS_E, lastYearPAT, enterProfessionType)
{
cy.get('div').find('form').then(form =>{
    cy.wrap(form).find('[class="mat-form-field-infix"] input').eq(6).type(lastYearPAT)
    cy.wrap(form).find('[placeholder="Select your Profession"]').type(enterProfessionType)
    cy.wrap(form).find('[placeholder="Company Name"]').clear().type(companyNameS_E)
cy.wrap(form).find('[placeholder="Start Date"]').scrollIntoView().clear().type(startDateProfession)
cy.scrollTo('bottom',{ensureScrollable:false})
cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.disabled')
cy.contains(' Only Numbers Allowed ').should('be.visible') 
cy.contains(' Alphabets, numbers, space and special characters allowed ').should('be.visible')
    })

}

validateEmploymentType()
{
    // cy.xpath("//div[@class='mat-select-value']//span[contains(text(),'Choose Employment Type' )]").click()
    cy.get('@employmentDD').click()
    cy.get('@salariedVisibility').scrollIntoView().should('be.visible')
    cy.get('@businessOwnerVisibility').scrollIntoView().should('be.visible')
    cy.get('@selfEmployedVisibility').scrollIntoView().should('be.visible')
    cy.get('@retiredVisibility').scrollIntoView().should('be.visible')
    cy.get('@studentVisibility').scrollIntoView().should('be.visible')
}

}
export const onEmploymentTypePage = new EmploymentTypePage()