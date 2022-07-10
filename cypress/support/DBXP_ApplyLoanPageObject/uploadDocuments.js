/// <reference types="Cypress"/>


export class UploadDocuments
{




upLoadDocumentsForRetired_BusinessOwner_SelfEmployed(pathOfFile)
{

    cy.get('div').find('form').then(form =>{
 cy.wrap(form).find('[class="col-lg-4 col-md-4 col-sm-12 ng-star-inserted"] label').then((documents)=>{
 const textOfDocuments = documents.text().trim()
cy.log('Name Of Ducoments', textOfDocuments)
cy.wrap(form).find('[class="custom-file-input form-control"]').attachFile(pathOfFile)
cy.scrollTo('bottomRight',{ensureScrollable:false})
cy.wrap(form).find('div[class="col-md-4 d-flex justify-content-around"] button[class="proceed-btn mat-stroked-button"]')
.should('be.enabled')
.click()
    })
})

}

upLoadDocumentsForSalaried_Student(pathOfFileOne ,pathOfFileTwo)
{
    
    cy.get('div').find('form').then(form =>{
 cy.wrap(form).find('[class="col-lg-4 col-md-4 col-sm-12 ng-star-inserted"] label').then((documents)=>{
 const textOfDocuments = documents.text().trim()
 cy.log('Name Of Documents' ,textOfDocuments)
cy.wrap(form).find('[class="custom-file-input form-control"]').first().attachFile(pathOfFileOne)
cy.wrap(form).find('[class="custom-file-input form-control"]').last().attachFile(pathOfFileTwo)
cy.scrollTo('bottomRight',{ensureScrollable:false})
cy.wrap(form).find('div[class="col-md-4 d-flex justify-content-around"] button[class="proceed-btn mat-stroked-button"]')
.should('be.enabled')
.click()
    })
    })

}


ValidateUploadDocumentPg(){
cy.xpath("//p[normalize-space()='Provide all Documents']")
.should('be.visible')

}

UploadEmployeeIDDocument()
{
cy.xpath("//label[@class='custom-file'][1]//input[@type='file']")
.attachFile("download (6).jpg")
// cy.xpath("//h3[@class='document-name'][1]").contains('download (6).jpg')

}

UploadPaySlipDocument()
{
    cy.xpath("(//label[@class='custom-file'])[2]//input[@type='file']")
.attachFile("images (8).pdf")
// cy.xpath("(//h3[@class='document-name'])[2]").contains('images (8).pdf')

}

ValidateEmployeeIDVisibility()
{
    cy.xpath("//label[@class='custom-file'][1]//input[@type='file']")
 .should('be.visible')

}

ValidatePaySlipIDVisibility()
{
    cy.xpath("(//label[@class='custom-file'])[2]//input[@type='file']")
    .should('be.visible')
 
}

ValidateSucSMSForEmpID()
{
    cy.xpath("//p[@class='successfully-msg ng-star-inserted'][1]")
    .should('be.visible')
}

ValidateSucSMSForPaySlip()
{
    cy.xpath("(//p[@class='successfully-msg ng-star-inserted'])[2]")
    .should('be.visible')
}

ClickOnSubmitBtn(){
    cy.xpath("//div[@id='cdk-step-content-0-5']/div[2]/div/form/div[2]/div/div[2]/button[2]")
.click()
return this
}
ValidateSubmitBtn()
{
    cy.xpath("//span[normalize-space()='Submit']")
    .should('be.visible')
    return this
}

uploadDocumentsForSalaried()
{

this.UploadEmployeeIDDocument()
cy.wait(2000)
this.ClickOnSubmitBtn()
this.UploadPaySlipDocument()
this.ValidateSucSMSForEmpID()
this.ValidateSucSMSForPaySlip
this.ClickOnSubmitBtn()

}

uploadDocumentForBusinessOwner()
    {

        this.UploadPaySlipDocument()
        this.ValidateSucSMSForEmpID()
        this.ClickOnSubmitBtn()
    }
uploadDocumentForRetaired()
{
  
    this.UploadEmployeeIDDocument()
    this.ValidateSucSMSForEmpID()
    this.ClickOnSubmitBtn()
}

uploadDocumentForStudent()
{


}


}

export const onUploadDocumentsPage = new UploadDocuments()