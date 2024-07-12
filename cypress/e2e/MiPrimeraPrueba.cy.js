describe('Mi primera prueba', () => {
    
    it('Verificar el titilo de la web - caso positivo', () => {
        // pasos
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        // comprobamos el titulo de la pagina
        cy.title().should('eq','OrangeHRM')
    })

    it('Verificar el titilo de la web - caso negativo', () => {
        // pasos
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        // comprobamos el titulo de la pagina
        cy.title().should('eq','OrangeHRM478')
    })

})