/// <reference types="Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onHelpCenter_Pg } from "../../support/DBXP_Help_Center_PageObject/active_Request_Page"
import { onBase_Pg } from "../../support/Utility/Base_Pg"



describe('DBXP Help Center ',function(){

    it('Validate Active loan data of help center',()=>{

        cy.fixture('LoginData').then(loginData=>{
            onLoginPage.loginWithValidUserNameAndPassword(loginData.Username, loginData.Password)
        })
        onBase_Pg.clickOnHelpCenter()
        onHelpCenter_Pg.clickOnActiveRequest()
        onHelpCenter_Pg.DataOfActiveLoan()
        onHelpCenter_Pg.applicationStatus()
    })
})