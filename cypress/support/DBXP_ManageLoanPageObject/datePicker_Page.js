/// <reference types="Cypress"/>

export class DataPickerPage
{

    getDatePicker(){
        return   cy.get('[class="mat-datepicker-toggle"] [class="mat-icon-button"]').first()
      }
      
      getCalendar()
      {
        return  cy.get('[class="mat-calendar ng-trigger ng-trigger-fadeInCalendar"]')
      }
      
      getNavigateBack(){
      return cy.get('[class="mat-calendar-controls"] [type="button"]').eq(1)
      }
      getNavigateForword(){
      return cy.get('[class="mat-calendar-controls"] [type="button"]').last()
      }
      
      getMonth()
      {
        return cy.get('[aria-label="Choose month and year"]')
      }
      
      getYear()
      {
        return cy.get('[aria-label="Choose month and year"]')
      }
      getCalendarDays()
      {
        return cy.get('table.mat-calendar-table div.mat-calendar-body-cell-content')
      }

 getMonthIndexByMonthName(monthName){
  
     var months = {

      "Jan":"1",
      "Feb":"2",
      "Mar":"3",
      "Apr":"4",
      "May":"5",
      "Jun":"6",
      "Jul":"7",
      "Aug":"8",
      "Sep":"9",
      "Oct":"10",
      "Nov":"11",
      "Dec":"12",


     }
 return months[monthName]

 }

}

export const onDatePicker_Page = new DataPickerPage()