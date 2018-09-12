/* global cy */
describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('starts without player', () => {
    cy.get('[data-test-id="StartScreen-player"]').should('not.exist')
    cy.get('input').should('have.attr', 'placeholder', 'Player name')
  })

  it('starts without play button, but with hint text', () => {
    cy.get('button').should('not.exist')

    cy.get('[data-test-id="StartScreen-hint"]').should(
      'contain',
      'Please add some players'
    )
  })

  describe('App with a player', () => {
    beforeEach(() => {
      cy.get('input')
        .should('have.attr', 'placeholder', 'Player name')
        .type('John{Enter}')
    })

    it('has a player', () => {
      cy.get('[data-test-id="StartScreen-player"] span:first-child').should(
        'contain',
        'John'
      )
    })

    it('has a play button', () => {
      cy.get('button')
        .contains('Play')
        .should('exist')
    })

    it('can delete all players', () => {
      cy.get('[data-test-id="StartScreen-player"]').should('exist')
      cy.get('button')
        .contains('or delete all players')
        .should('exist')
        .click()

      cy.get('[data-test-id="StartScreen-player"]').should('not.exist')
    })
  })
})