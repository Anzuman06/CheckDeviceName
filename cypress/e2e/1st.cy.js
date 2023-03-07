it('Log in to Canary and check the device name in device details form', function(){
  cy.visit('https://canary.api.meld.cx/login'),
  cy.get(':nth-child(2) > span > input').type(Cypress.env('email')),
  cy.get(':nth-child(3) > span > input').type(Cypress.env('password')),
  cy.get('.glow > span').click(),
  cy.get('.devices-recent > .content'),
  cy.get('[href="/device/3929"] > span.ellipsis').click(),
  cy.get(':nth-child(2) > :nth-child(2) > .label'),
  cy.get(':nth-child(2) > :nth-child(2) > input').should('have.value', Cypress.env('chromedevicename'))
})

