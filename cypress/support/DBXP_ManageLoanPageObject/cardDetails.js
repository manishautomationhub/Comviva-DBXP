/// <reference types="Cypress"/>

export class CardDetailsPage
{


    getCardDetails()
    {
    
        cy.get('div').find('[class="personal-loan"]').each((listOfcard) =>{
        cy.wrap(listOfcard).find('[class="account-loan"]').each((listOfLoanType)=>{
            const LoneType= listOfLoanType.text().trim()
           cy.log('Loan Type',LoneType)
            const loanType={LoneType}
            cy.writeFile('cypress//fixtures//Read_Data_Of_Card.json',[loanType],{flag:'a+'})
    })
        cy.wrap(listOfcard).find('[class="account-number"]').each((listOfAccount)=>{
           const AccountNumber = listOfAccount.text().trim()
           cy.log('Account Number',AccountNumber)
           const accountNumber={AccountNumber}
           cy.writeFile('cypress//fixtures//Read_Data_Of_Card.json',[accountNumber],{flag:'a+'})
        })
           cy.wrap(listOfcard).find('[class="price ng-star-inserted"]').each((listOfTotalTenure)=>{
            const TotalTenure=  listOfTotalTenure.text().trim()
       cy.log('Details of card ',TotalTenure)
       const totalTenure={TotalTenure}
       cy.writeFile('cypress//fixtures//Read_Data_Of_Card.json',[totalTenure],{flag:'a+'})
        
        })
        cy.wrap(listOfcard).find('[class="price"]').last().each((listOfEMILeft)=>{
            const EMILeft=  listOfEMILeft.text().trim()
       cy.log('Details of card ',EMILeft)
       const eMILeft={EMILeft}
       cy.writeFile('cypress//fixtures//Read_Data_Of_Card.json',[eMILeft],{flag:'a+'})
        
        })

        cy.wrap(listOfcard).find('[class="price"]').eq(1).then(listOfdueInDays =>{
       const DueInDays=  listOfdueInDays.text().trim()
       cy.log('Details of card ',DueInDays)
       const dueInDays={DueInDays}
       cy.writeFile('cypress//fixtures//Read_Data_Of_Card.json',[dueInDays],{flag:'a+'})

        })

        cy.wrap(listOfcard).find('[class="price"]').first().each((listOfOutStandingAmount)=>{
            const OutStandingAmount=  listOfOutStandingAmount.text().trim()
       cy.log('Details of card ',OutStandingAmount)
       const outStandingAmount={OutStandingAmount}
       cy.writeFile('cypress//fixtures//Read_Data_Of_Card.json',[outStandingAmount],{flag:'a+'})
        })
  
    })

    }
}
export const onCardDetailsPage = new CardDetailsPage()