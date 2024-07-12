describe('Manejo de XPath',()=>{

    it('Buscar numero de productos',()=>{
        // visitamos la pagina
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers[data-toggle='tab']").click()
        // utilizamos xpath para localizar elementos xpath, get solo se usa para elementos css, clases, ids, y names
        cy.xpath("//ul[@id='blockbestsellers']//li").should('have.length', 6)
    })
})