describe('Page d\'accueil', () => {
    it('charge le contenu attendu', () => {
      cy.visit('http://localhost:3000') // Visitez la page d'accueil
        .contains('Bienvenue sur notre serveur Express !'); // Vérifiez que le texte "Bienvenue sur notre site web" est présent sur la page
    });
  });
  