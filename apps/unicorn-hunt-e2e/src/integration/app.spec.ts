describe('unicorn-hunt', () => {
  beforeEach(() => cy.visit('/'));

  it('should show the website correctly', () => {
    cy.visit('/')
      .then(() => {
        cy.get('body').toMatchImageSnapshot();
      });
  });
});
