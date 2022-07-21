/// <reference types="Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onEMI_Details_Pg } from "../../support/DBXP_ManageLoanPageObject/emi_Details_Pg"
import { onBase_Pg } from "../../support/Utility/Base_Pg"



describe('DBXP EMI details ',function(){

    it('EMI Details testcase',()=>{

cy.fixture('LoginData').then(loginData=>{
    onLoginPage.loginWithValidUserNameAndPassword(loginData.Username,loginData.Password)
})
onBase_Pg.clickOnLoanButton()
onBase_Pg.clickOnCard()
onBase_Pg.clickOnManagePersonalLoan()
onEMI_Details_Pg.chooseEmiDate(2)
onEMI_Details_Pg.debitAccountDetails()
onEMI_Details_Pg.successValidate()

    })
})