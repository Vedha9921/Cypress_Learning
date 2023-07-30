import testrepo from '../e2e/repository/testrepo.json'


class commoncode {

    loginpage() {

        cy.visit(Cypress.env('url'))
        cy.wait(1000)
        cy.get(testrepo.login.userName).clear().type(Cypress.env('userName'))
        // cy.wait(3000)
        cy.get(testrepo.login.password).clear().type(Cypress.env('password'))
        cy.get(testrepo.login.submit).click()
    }

    registraion_checkbox_Dropdown() {

        cy.visit(Cypress.env('reg_url'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.wait(1000)

        cy.get(testrepo.Registration.check1).check().should('be.checked').and('have.value', 'Cricket')
        cy.get(testrepo.Registration.check1).uncheck().should('not.be.checked').and('have.value', 'Cricket')
        cy.get(testrepo.Registration.check2).check().should('be.checked').and('have.value', 'Movies')
        cy.wait(3000)
        cy.get('#Skills').select("Android")
        cy.get('#basicBootstrapForm > div:nth-child(10) > div > span > span.selection > span').click()
        cy.get('#firstpassword').click({ force: true })
    }
    Handling_Iframe() {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then(function ($iframe) {
            let iframebody = $iframe.contents().find('body')
            cy.wrap(iframebody)
                .clear()
                .type("This new text entered in the iframe body")
                .type('{selectall}')
            cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1) > span > svg').click()

        })
    }

    Displaying_Dropdown_values() {

        cy.visit(Cypress.env('reg_url'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        let array = []
        cy.wait(1000)
        cy.get('#Skills').then($value => {
            const getvalue=$value.text()
            cy.log("hello")
            cy.wait(2000)
            cy.log("text issss", getvalue)
            cy.wait(3000)
        })
            cy.get('#Skills').each(($option, index) => {
            array.push(Cypress.$($option).text())
            cy.log(array[index])
           // cy.screenshot()

        })
    }

    Verifying_Alerts(){
            
        //senario one alert with ok 
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('#content > div > ul > li:nth-child(1) > button').click();
        cy.on('window:alert',(t)=>{
            expect(t).to.equal("I am a JS Alert");
        })
        cy.get('#result').should('have.text',"You successfully clicked an alert")
        
        //senario two confirmation alert with ok button

        cy.get('#content > div > ul > li:nth-child(2) > button').click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal("I am a JS Confirm");
        })
        cy.get('#result').should('have.text',"You clicked: Ok")
        cy.wait(2000)

        //senario two confirmation alert with cancel button

        cy.get('#content > div > ul > li:nth-child(2) > button').click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal("I am a JS Confirm");
        })
        cy.on('window:confirm',()=>false)
        cy.get('#result').should('have.text',"You clicked: Cancel")

    //senario three promt alert with ok button

        cy.window().then((win)=>{
            cy.stub(win,promt).returns("welcome")
        })
        cy.get('#content > div > ul > li:nth-child(3) > button').click();
        cy.get('#result').should('have.text',"You entered: welcome")

    //senario three promt alert with cancel button

    cy.on('window:confirm',()=>false)
    //cy.get('#content > div > ul > li:nth-child(3) > button').click();
    cy.get('#result').should('have.text',"You entered: null")

   
    
    
    
    }



}

export default commoncode