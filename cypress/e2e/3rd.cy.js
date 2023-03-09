it("Log in to Canary and add 5 device options at a time", function(){
    cy.visit('https://canary.api.meld.cx/login'),
cy.get(':nth-child(2) > span > input').type(Cypress.env('email')),
cy.get(':nth-child(3) > span > input').type(Cypress.env('password')),
cy.get('.glow > span').click(),
cy.get('.nav-bar-burger').click(),
cy.get('[href="/devices"]').click(),
cy.get(':nth-child(1) > .tr-link > .td-name').get('.last-seen-online').click(),
cy.get('.tabs > :nth-child(4)').click(),
Cypress._.times(5, function() {
    const value = () => Cypress._.random(0, 1e6);
const NaV = value();
const NameV = `nameV${NaV}`;

    cy.get('.create-row > :nth-child(1)').type(NameV),
    cy.get('.create-row > :nth-child(2)').type('true'),
    cy.get('.create-row > select').select('Secret'),
    cy.get('.end > .material-icons').click()
})
cy.get('#content-applications > .content').should('exist')

})