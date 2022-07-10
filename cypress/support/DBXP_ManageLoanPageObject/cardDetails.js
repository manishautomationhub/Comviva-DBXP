/// <reference types="Cypress"/>

export class CardDetailsPage
{

    getCardDetails()
    {
        cy.get('div').find('[class="personal-loan"]').each((listOfcard) =>{
        cy.wrap(listOfcard).find('[class="account-loan"]').each((listOfLoanType)=>{
           const LoneType= listOfLoanType.text().trim()
           cy.log('Loan Type',LoneType)
           const arrayObj1={LoneType}
        cy.writeFile('cypress//fixtures//Read_Data_Of_Card.json',[arrayObj1])
    })
        cy.wrap(listOfcard).find('[class="account-number"]').each((listOfAccount)=>{
           const AccountNumber = listOfAccount.text().trim()
           cy.log('Account Number',AccountNumber)
           const arrayObj={AccountNumber}
            cy.writeFile('cypress//fixtures//Read_Data_Of_Card.json',[arrayObj])
        })
           cy.wrap(listOfcard).find('[class="outstanding-due-days"] p').each((listOfDetails)=>{
            const TextOfDetails=  listOfDetails.text().trim()
       cy.log('Details of card ',TextOfDetails)
       const arrayObj2={TextOfDetails}
       cy.writeFile('cypress//fixtures//Read_Data_Of_Card.json',[arrayObj2])
        
        })
        })
    }


}
export const onCardDetailsPage = new CardDetailsPage()