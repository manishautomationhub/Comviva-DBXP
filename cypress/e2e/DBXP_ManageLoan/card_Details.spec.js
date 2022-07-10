/// <reference types="Cypress"/>


import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onCardDetailsPage } from "../../support/DBXP_ManageLoanPageObject/cardDetails"
import { onBase_Pg } from "../../support/Utility/Base_Pg"

describe('DBXP Manage Loan ',()=> {
    
    
    it('Valid Credit card Details',()=> {

        cy.fixture('ApplyLoanData').then(loginData => {
            onLoginPage.loginWithValidUserNameAndPassword(loginData.Username, loginData.Password)
        })
        onBase_Pg.clickOnMyAccountButton()
        onBase_Pg.syncAccountButton()
        onBase_Pg.clickOnLoanButton()
        onCardDetailsPage.getCardDetails()




    })
    })