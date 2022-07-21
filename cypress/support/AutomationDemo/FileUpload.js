describe('MyFirstSuite', function() {

    it('File Upload using selectFile with select mode', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('cypress/fixtures/API TestCase.png')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('API TestCase.png')
      })
    //   cypress/fixtures/API TestCase.png
  }) 