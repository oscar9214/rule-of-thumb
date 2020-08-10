describe('Check the current votings', () => {
  it('There are 4 votings opened', () => {
    cy.visit('/')
    cy.get('.profile').should('be.visible')
    cy.get('.profile').should('have.length', 4)
  })
})

describe('Check that vote click updates the percentages', () => {
  it('Click like updates both percentages', () => {
    cy.visit('/')

    cy.get('.profile').first().find('.profile__stats__like').first().invoke('text').then((text1) => {
      const likePercetageBefore = parseInt(text1.split('%')[0])
      cy.get('.profile').first().find('.profile__controls__like').first().click()
      cy.get('.profile').first().find('.profile__vote-now').first().click()

      cy.get('.profile').first().find('.profile__stats__like').first().invoke('text').then(text2 => {
        const likePercetageAfter = parseInt(text2.split('%')[0])
        expect(likePercetageBefore).to.be.lessThan(likePercetageAfter)
      })
    })

    // wait for animation to reappear buttons
    cy.wait(1200)

    // vote again
    cy.get('.profile').first().find('.profile__vote-now').first().click()

    // wait for animation to reappear buttons
    cy.wait(1200)

    cy.get('.profile').first().find('.profile__stats__dislike').first().invoke('text').then((text1) => {
      const dislikePercetageBefore = parseInt(text1.split('%')[0])
      cy.get('.profile').first().find('.profile__controls__like').first().click()
      cy.get('.profile').first().find('.profile__vote-now').first().click()

      cy.get('.profile').first().find('.profile__stats__dislike').first().invoke('text').then(text2 => {
        const dislikePercetageAfter = parseInt(text2.split('%')[0])
        expect(dislikePercetageBefore).to.be.greaterThan(dislikePercetageAfter)
      })
    })
  })
})