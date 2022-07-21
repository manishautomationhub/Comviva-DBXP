/// <reference types="Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"

describe('DBXP Login Page',function(){

    it('Validate Login Page',()=>{
onLoginPage.validateLoginPage()
    })

})