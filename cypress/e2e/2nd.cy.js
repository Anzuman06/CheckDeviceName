it("Go to logs and download Payments logs", function(){
    cy.visit('https://canary.api.meld.cx/login'),
cy.get(':nth-child(2) > span > input').type(Cypress.env('email')),
cy.get(':nth-child(3) > span > input').type(Cypress.env('password')),
cy.get('.glow > span').click(),
cy.get('.nav-bar-burger').click(),
cy.get('[href="/devices"]').click(),
cy.get(':nth-child(1) > .tr-link > .td-name').get('.last-seen-online').click(),
cy.get(':nth-child(2) > :nth-child(2) > .label'),
cy.get(':nth-child(2) > :nth-child(2) > input').should('have.value', Cypress.env('chromedevicename'))
})
