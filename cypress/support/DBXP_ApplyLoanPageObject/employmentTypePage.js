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
            cy.wrap(dropdown).should('contain',itemText)
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
    cy.wrap(listCurrency).should('contain',currencyText)
}
})
    })
    })
}

enterDataForRetired(lastEmployerName){
   
    cy.get('div').find('form').then(form =>{
    cy.wrap(form).find('[class="form-input mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid"]').type(lastEmployerName)
    cy.scrollTo('bottomRight', { ensureScrollable: false })
    cy.wrap(form).find('div[class="row"] button[type="submit"]').click()
})

    }

enterDataForBusinessOwner(startDate, companyName, currency, lastYearPAT)
{

    cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Start Date"]').clear().type(startDate)
cy.wrap(form).find('[class="mat-form-field-infix"] [type="text"]').eq(5).type(companyName)
this.chooseCurrency(currency)
cy.wrap(form).find('[class="mat-form-field-infix"] [type="text"]').eq(6).type(lastYearPAT)
cy.wrap(form).find('div[class="row"] button[type="submit"]').click()
    })

}

enetrDataForSalaried(enterEmployerName, currency, enterMonthlyIncome)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Employer Name"]').clear().type(enterEmployerName)
this.chooseCurrency(currency)
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(5).clear().type(enterMonthlyIncome)
cy.wrap(form).find('div[class="row"] button[type="submit"]').click()    
})

}

enterDataForStaudent(qualification, co_BorrowerName, enterCurrency, co_BorrowerMonthlyIncome)
{

cy.get('div').find('form').then(form =>{
cy.wrap(form).find('[placeholder="Qualification"]').clear().type(qualification)
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(5).clear().type(co_BorrowerName)
this.chooseCurrency(enterCurrency)
cy.wrap(form).find('[class="mat-form-field-infix"] input[type="text"]').eq(6).clear().type(co_BorrowerMonthlyIncome)
cy.wrap(form).find('div[class="row"] button[type="submit"]').click()     
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
listprofession.click()
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
this.chooseCurrency(enterCurrency)
cy.scrollTo('bottom',{ensureScrollable:false})
cy.wrap(form).find('[class="mat-form-field-infix"] input').eq(7).type(lastYearPAT)
this.chooseProfession(enterProfessionType)
cy.wrap(form).find('div[class="row"] button[type="submit"]').should('be.enabled').click() 

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