describe('Manejo de ventanas de alerta', ()=>{

    // Alerta Javascript: Cuando en la ventana solo aparece la opcion de OK
    it('Alerta JS Ok',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        // evento de ventana para realizar una validacion
        cy.on('window:alert', (t)=>{
            expect(t).to.contain('I am a JS Alert')
        })

        // ventana de alerta cerrada automaticamente por cypress

        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    // Alerta de confirmacion de JS con OK y Cancelar
    it('Alerta de confirmacion JS - Boton OK',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })
        //Cypress cierra automaticamente la ventana abierta usando el boton OK 
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('Alerta de confirmacion JS - Boton Cancelar',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=> false) // Cypress cierra la ventana de alerta usando la opcion de cancelar


        //Cypress cierra automaticamente la ventana abierta usando el boton OK 
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    // JS ventana que solicita una entrada y para cerrar la ventana cypress espera que el usuario ingrese algo
    it('Alerta solicitada - con boton OK',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        // para pasarle el valor a la ventana de entrada que se abre automaticamente
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Bienvenido')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        // Cypress cerrara automaticamente la alerta solicitada y usara el boton Ok de forma automatica
        cy.get('#result').should('have.text','You entered: Bienvenido')
        
    })

    it('Alerta solicitada - con boton Cancelar',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        // para pasarle el valor a la ventana de entrada que se abre automaticamente
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Bienvenido')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        
       // cy.on('window:prompt', ()=> false)

        cy.get('#result').should('have.text','You entered: Bienvenido')
        
    })

    // Alerta de autenticacion
    it.only('Alerta de autenticacion',()=>{
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
                                                                    {
                                                                        username: 'admin', 
                                                                        password: "admin"
                                                                    }
        })

        cy.get('p').should('have.contain','Congratulations')*/
        // Otra manera de omitir la ventana de autenticacion ingresando el usuario y la clave en la url
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('p').should('have.contain','Congratulations')
        
    })


})