// cypress/support/e2e.js
import { setupUserway } from '@userway/a11y-cypress';
  
setupUserway({
 reportPath: './uw-a11y-reports'
});


describe('Acme Org Website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Adjust the URL as needed
        cy.userwayAnalysis()
    });

    it('should load the homepage', () => {
        cy.get('h1').should('contain', 'Welcome to Acme Org'); // Adjust the selector and text as needed
        cy.userwayAnalysis()
    });

    it('should navigate to the about page', () => {
        cy.get('a[href="/about"]').click(); // Adjust the selector as needed
        cy.url().should('include', '/about');
        cy.get('h1').should('contain', 'About Us'); // Adjust the selector and text as needed
        cy.userwayAnalysis()
    });

    it('should submit the contact form', () => {
        cy.get('input[name="name"]').type('John Doe'); // Adjust the selector as needed
        cy.get('input[name="email"]').type('john@example.com'); // Adjust the selector as needed
        cy.get('textarea[name="message"]').type('Hello!'); // Adjust the selector as needed
        cy.get('form').submit(); // Adjust the selector as needed
        cy.get('.success-message').should('contain', 'Thank you for your message!'); // Adjust the selector and text as needed
        cy.userwayAnalysis()  
    });
});

