/// <reference types="Cypress"/>

export class Export_Statement_Pg
{

validateExportStatementPg()
{
  cy.get('[class="export-title"]').then(statement=>{
    const text =statement.text().trim()
    expect(text).to.equals('Export Statement')
  })
}

chooseCustomDate_For_End(yearName,monthName,DayName)
{
  cy.get('[class="mat-datepicker-toggle"] [class="mat-icon-button"]').last().click()
  cy.get('[cdkarialive="polite"]').click()
  cy.get('[class="ng-star-inserted"] tr div').each((listOfYear)=>{  
    const textOfYear = listOfYear.text().trim()
        if(textOfYear.includes(yearName)){
          cy.wrap(listOfYear)
      .click()
        cy.log(yearName + ' Year is selected')
        }
  })
  cy.get('[class="ng-star-inserted"] tr div').each((listOfMonth)=>{
    const textOfMonths=  listOfMonth.text().trim()
  if(textOfMonths.includes(monthName)){
  cy.wrap(listOfMonth).click()
  cy.log(monthName+'Month is selected')
  }
    })
  
    cy.get('table.mat-calendar-table div.mat-calendar-body-cell-content').eq(DayName+1).click()
    cy.log(DayName + 'Day is Selected')
    this.clickOnSubmitBtn()
}

chooseCustomOption()
{
cy.get('label[for="chooseCustom-input"] div[class="mat-radio-label-content"]').click()
  
}

chooseCustomDateForStart(year,month,day){
  cy.get('[class="mat-datepicker-toggle"] [class="mat-icon-button"]').first().click()
cy.get('[cdkarialive="polite"]').click()
cy.get('[class="ng-star-inserted"] tr div').each((listOfYear)=>{  
  const textOfYear = listOfYear.text().trim()
      if(textOfYear.includes(year)){
        cy.wrap(listOfYear)
    .click()
      cy.log(year + ' Year is selected')
      }
})

cy.get('[class="ng-star-inserted"] tr div').each((listOfMonth)=>{
  const textOfMonths=  listOfMonth.text().trim()
if(textOfMonths.includes(month)){
cy.wrap(listOfMonth).click()
cy.log(month+'Month is selected')
}
  })

  cy.get('table.mat-calendar-table div.mat-calendar-body-cell-content').eq(day-1).click()
  cy.log(day + 'Day is Selected')

}

chooseMonthForStatement(chosseMonthforStatment)
{
cy.get('[class="mat-radio-group"]').find('[class="radio-btns mat-radio-button mat-accent"] div').each((listOfDate)=>{
  const textOfDate = listOfDate.text().trim()
if(textOfDate.includes(chosseMonthforStatment)){
  cy.wrap(listOfDate).click()
}
})
this.clickOnSubmitBtn()
}

clickOnSubmitBtn()
{
  cy.get('[class="proceed-btn send-btn mat-stroked-button"]').click()

}

}
export const onExport_Statement_Pg = new Export_Statement_Pg ()