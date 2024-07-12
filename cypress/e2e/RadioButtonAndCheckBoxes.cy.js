describe('Manejo de Radio Button y Check Boxes', ()=>{

    it.skip('Radio Button',()=>{

        cy.visit("http://itera-qa.azurewebsites.net/home/automation")
        // verificamos que los botones esten visibles
        cy.get("input#male").should('be.visible')
        cy.get("input#famale").should('be.visible')

        // Seleccionamos los radios button, vemos que este seleccionado la opcion del hombre y no seleccionada la opcion de mujer
        cy.get("input#male").check().should('be.checked')
        cy.get("input#famale").should('not.be.checked')

        // Ahora hacemos lo contrario

        cy.get("input#famale").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

    })

    it.skip('Check Boxes',()=>{

        cy.visit("http://itera-qa.azurewebsites.net/home/automation")
        // verificamos que los botones esten visibles
        cy.get("input#monday").should('be.visible')

        // Selecionamos un solo elementos del checkbox
        cy.get("input#monday").check().should('be.checked')

        // Deselecionamos un elemento
        cy.get("input#monday").uncheck().should('not.be.checked')

        // Seleccionamos todos los elementos de un checkbox
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        // Deseleccionamos todos los elementos de un checkbox
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // Selecionamos solo el primer elemento
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()

    })
})