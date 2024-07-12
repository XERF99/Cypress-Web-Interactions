describe('Aserciones de demostracion explicitas e implicitas', () => {

    it.skip('Aserciones implicitas', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // should --- and -- Afirmaciones positivas
        //cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain', 'orangehrmlive')

        // Otra forma de usar should, se pueden utilizar varias afirmaciones a la vez

        //cy.url().should('include', 'orangehrmlive.com')
        //.should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain', 'orangehrmlive')

        // Se puede hacer lo mismo con And
        //cy.url().should('include', 'orangehrmlive.com')
        //.and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.and('contain', 'orangehrmlive')

        // Se puede convinar should con and al mismo tiempo 

        //cy.url().should('include', 'orangehrmlive.com')
        //.and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain', 'orangehrmlive')

        // should --- and -- Afirmaciones negativas - se pueden negar con not
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('not.contain', 'ordf5')

        cy.title().should('include', 'Orange')
        .and('eq', "OrangeHRM")
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')


        // con xpath
        cy.xpath("//a").should('have.length','5')

        cy.get("input[placeholder='Username']").type("Admin") // proporciona un valor en el cuadro de la pagina web
        // verificamos que el valor sea correcto
        cy.get("input[placeholder='Username']").should('have.value', 'Admin') // verificacion de valores
    })

    it('Aserciones explicitas', ()=>{

        // Las aserciones explicitas son aserciones personalizadas que no estan en cypress
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let nombreEsperado='manda user'
            // validamos y capturamos cualquier elementos que nos devuelve la pagina para comprobarlo con nuestro nombre esperado
        cy.get(".oxd-userdropdown-name").then((x)=>{

            let nombreActual= x.text()

            // Aserciones en estilo BDD
            expect(nombreActual).to.equal(nombreEsperado)
            //Asercion negativa
            //expect(nombreActual).to.not.equal(nombreEsperado)
            
            // Aserciones en estilo TDD
            assert.equal(nombreActual, nombreEsperado)
            //assert.notEqual(nombreActual, nombreEsperado)

        
        })

    })


})