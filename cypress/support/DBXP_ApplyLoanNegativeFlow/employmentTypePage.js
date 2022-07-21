/// <reference types="Cypress"/>


export class EmploymentTypePage
{

chooseEmploymentType(enterEmploymentType)
{
   
    cy.get('[class="loan-card-body pl-3"]').find('form').then(form =>{
        cy.wrap(form).find('mat-select[formcontrolname="employeeType"]').then(dropdown =>{
            cy.wrap(dropdown).click()
            cy.get('mat-option[role="option"] span').each((listItem)=>{
            const itemText = listItem.text().trim()
            if(itemText.includes(enterEmploymentType)){
            cy.wrap(listItem).click()
            
            }
        })
            })
        })

}

chooseCurrency(enterCurrency)
{
    cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[formcontrolname="currencyId"]').first().then(currencyDropdown =>{
cy.wrap(currencyDropdown).click()
cy.get('[role="option"] span').each((listCurrency)=>{
const currencyText = listCurrency.text().trim()
cy.log('All Currency Type',currencyText)
if(currencyText.includes(enterCurrency)){
    cy.wrap(listCurrency).click()
//    cy.wrap(from).find('[class="mat-error-text dropdown-mat-error mat-error ng-star-inserted"]')
//    .should('have.text',' Select valid Currency ')
}
})
    })
    })
}

enterDataForRetired(lastEmployerName){
   
    cy.get('div').find('form').then(form =>{
    cy.wrap(form).find('[class="form-input mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid"]').type(lastEmployerName)
    cy.scrollTo('bottomRight', { ensureScrollable: false })
    cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.disabled')
    this.chooseEmploymentType('Retired')
    cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').should('have.text',' Alphabets, numbers, space and special characters allowed ')
})

    }

enterDataForBusinessOwner(startDate, companyName, currency, lastYearPAT)
{

    cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Start Date"]').clear().type(startDate)
cy.wrap(form).find('[class="mat-form-field-infix"] [type="text"]').eq(5).type(companyName)
this.chooseCurrency(currency)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').eq(1).should('be.visible')
cy.wrap(form).find('[class="mat-form-field-infix"] [type="text"]').eq(6).type(lastYearPAT)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').eq(3).should('be.visible')
cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.disabled')
    })

}

enetrDataForSalaried(enterEmployerName, currency, enterMonthlyIncome)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Employer Name"]').clear().type(enterEmployerName)
this.chooseCurrency(currency)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').first().should('have.text',' Alphabets, numbers, space and special characters allowed ')
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(5).clear().type(enterMonthlyIncome)
this.chooseCurrency(currency)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').last().should('have.text',' Only numbers and comma or decimal ')
cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.disabled')

cy.wrap(form).find('[placeholder="Employer Name"]').clear().type(enterEmployerName)
this.chooseCurrency(currency)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').first().should('have.text',' Alphabets, numbers, space and special characters allowed ')
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(5).clear().type(enterMonthlyIncome)
this.chooseCurrency(currency)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').last().should('have.text',' Only numbers and comma or decimal ')


})

}

enterDataForStaudent(qualification, co_BorrowerName, enterCurrency, co_BorrowerMonthlyIncome)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Qualification"]').clear().type(qualification)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').first().should('be.visible')
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(5).clear().type(co_BorrowerName)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').eq(1).should('be.visible')
this.chooseCurrency(enterCurrency)
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(6).clear().type(co_BorrowerMonthlyIncome)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').eq(2).should('be.visible')
cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.disabled')     
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

enterDataForSelfEmployed(startDateProfession, companyNameS_E, enterCurrency, lastYearPAT, enterProfessionType)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Start Date"]').clear().type(startDateProfession)
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(5).clear().type(companyNameS_E)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').eq(1).should('be.visible')
this.chooseCurrency(enterCurrency)
cy.scrollTo('bottom',{ensureScrollable:false})
cy.wrap(form).find('[class="mat-form-field-infix"] input').eq(7).type(lastYearPAT)
cy.wrap(form).find('[class="mat-error-text mat-error ng-star-inserted"]').eq(2).should('be.visible')
this.chooseProfession(enterProfessionType)
cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.disabled')

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



validateProfessionVisibility(){
    cy.get('@professionDD').scrollIntoView().click()
    cy.get('@lawyerVisibility').scrollIntoView().should('be.visible')
    cy.get('@otherVisibility').scrollIntoView().should('be.visible')
    cy.get('@doctorVisibility').scrollIntoView().should('be.visible')

}

}
export const onEmploymentTypePage = new EmploymentTypePage()