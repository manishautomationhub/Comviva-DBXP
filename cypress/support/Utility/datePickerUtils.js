import { onDatePicker_Page } from "../DBXP_ManageLoanPageObject/datePicker_Page"

export class DatePicker_Utility{

    selectYear(yearName){
        const currentYear = new Date().getFullYear()
    onDatePicker_Page.getYear().then(($year)=>{
        if($year.text()==yearName){
            cy.log(yearName+ ' Year is selected')
            return
        }
        else{
        if(yearName < currentYear){
            onDatePicker_Page.getNavigateBack().click()
        }
        else if(yearName > currentYear){
            onDatePicker_Page.getNavigateForword().click()
        }
        }
    
this.selectYear(yearName)
    
    })
    }
    
    selectMonth(monthName) {
    let currentMonth = new Date().getMonth() +1
    let givenMonth= onDatePicker_Page.getMonthIndexByMonthName(monthName)
    
    
    onDatePicker_Page.getMonth().then(($month)=>{
    
    if($month.text().includes(monthName)){
    cy.log(monthName+'Month is selected')
    return
    }
    
    else{
        if(givenMonth > currentMonth){
    onDatePicker_Page.getNavigateForword().click()
    
        }
        else   if(givenMonth < currentMonth){
            onDatePicker_Page.getNavigateBack().click()
            
                }
    }
    
    this.selectMonth(monthName)
    })
    
    }
    
    selectDay(dayName) {
        onDatePicker_Page.getCalendarDays().eq(dayName-1).click()
        cy.log(dayName + 'Day name is selected')
    }


}
export const onDatePicker_Utils_Pg = new DatePicker_Utility()