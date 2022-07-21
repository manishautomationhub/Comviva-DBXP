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
    cy.wrap(form).find('[placeholder="Employer Name"]').type(lastEmployerName)
    cy.scrollTo('bottomRight', { ensureScrollable: false })
    cy.wrap(form).find('div[class="row"] button[type="submit"]').click()
})

    }

enterDataForBusinessOwner(startDate, companyName, lastYearPAT)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Company Name"]').type(companyName)
cy.wrap(form).find('[class="mat-form-field-infix"] [type="text"]')
.eq(6).type(lastYearPAT)
cy.wrap(form).find('[placeholder="Start Date"]').clear().type(startDate)
cy.wrap(form).find('[class="row"] [type="submit"]').click()
    })

}

enterDataForSalaried(enterEmployerName,enterMonthlyIncome)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Employer Name"]').clear().type(enterEmployerName)
cy.wrap(form).find('[class="mat-form-field-infix"] [type="text"]').last().clear().type(enterMonthlyIncome)
cy.wrap(form).find('[class="row"] [type="submit"]').click()
})
}

enterDataForStudent(co_BorrowerMonthlyIncome, co_BorrowerName, qualification)
{


// cy.xpath("//input[@placeholder='What's your co-borrower’s Monthly Income ?']").type(co_BorrowerMonthlyIncome)
cy.get('#mat-input-9').clear().type(co_BorrowerMonthlyIncome)
cy.get('#mat-input-10').clear().type(co_BorrowerName)
cy.get('[placeholder="Qualification"]').clear().type(qualification)
cy.get('[class="row"] [type="submit"]').click()

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

enterDataForSelfEmployed(enterProfessionType,companyNameS_E, startDateProfession, lastYearPAT)
{
cy.get('div').find('form').then(form =>{

cy.wrap(form).find('[placeholder="Select your Profession"]').type(enterProfessionType)
cy.wrap(form).find('[placeholder="Company Name"]').clear().type(companyNameS_E)
cy.wrap(form).find('[placeholder="Start Date"]').scrollIntoView().clear().type(startDateProfession)
cy.wrap(form).find('[class="mat-form-field-infix"] [type="text"]').eq(5).type(lastYearPAT)
cy.scrollTo('bottom',{ensureScrollable:false})
cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.enabled').click() 

    })

}


}
export const onEmploymentTypePage = new EmploymentTypePage()