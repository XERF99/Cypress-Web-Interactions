describe('Localizadores CSS',()=>{

    it("localizadores css", ()=>{
        // visitando la pagina web
        cy.visit("http://www.automationpractice.pl/index.php")
        // Usando un localizador css
        cy.get("#search_query_top").type("T-Shirts")   
        // Localizador por el nombre
        cy.get("[name='submit_search']").click()
        // Localizador por clase
        cy.get(".lighter").contains("T-Shirts") // Assertion o verificacion

    })
})