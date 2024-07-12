describe('Manejo de menus desplegables', ()=>{

    it.skip('Menu desplegable(dropdown - select) con select',()=>{

        //visitamos la pagina web
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country").select('Ecuador').should('have.value','Ecuador')

    })

    it.skip('Menu desplegable(dropdown - not select) sin select pero que tienen la lista desplegable',()=>{

        //visitamos la pagina web
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        //Clic sobre el menu deplegable
        cy.get("#select2-billing_country-container").click()
        // Escribimos el pais al que queremos ir y presionamos enter
        cy.get(".select2-search__field").type("Ecuador").type('{enter}')
        // Comprobamos que lo ingresado sea correcto
        cy.get("#select2-billing_country-container").should('have.text', 'Ecuador')
    })

    it.skip('Menu desplegable de sugerencia automatica',()=>{

        //visitamos la pagina web
        cy.visit("https://www.wikipedia.org/")
        //Clic el input para ingresar texto
        cy.get("#searchInput").type('Delhi')
        // Comprobamos dentro del menu desplegable se encuentre la opcion de Delhi Durbar y damos click
        cy.get('.suggestion-title').contains('Delhi Durbar').click()

    })

    it('Menu desplegable de sugerencia dinamica',()=>{

        //visitamos la pagina web
        cy.visit("https://www.google.com/")
        //Clic el input para ingresar texto
        cy.get("#APjFqb").type('cypress automation')

        cy.wait(2000)

        cy.get('div.wM6W7d>span').should('have.length', 13)

        // Iteramos a traves de los elementos
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if ($el.text()=='cypress automation testing') 
            {
                cy.wrap($el).click()
            }
        })

        // Verificamos que lo ingresado sea correcto
        cy.get("#APjFqb").should('have.value', 'cypress automation testing')

    })

})