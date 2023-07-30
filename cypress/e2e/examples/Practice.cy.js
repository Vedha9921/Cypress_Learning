/// <reference types="cypress" />

import commoncode from "../../Baseclass/Reusable";
describe('This is my first testsuite', () => {

    it('Test case1', ()=> {
        const cm=new commoncode();
        cy.log("Welcome to ecommerce application")
        cm.loginpage()
        cy.title().should('eq',"Dashboard / nopCommerce administration")
    })
    it('Test case 2', function(){
        const cm=new commoncode();

        cm.registraion_checkbox_Dropdown()

    })
    it('Handling Iframe',function(){
        const cm=new commoncode();
        cm.Handling_Iframe()
    })
    it('Displaying_Dropdown_values',function(){
        const cm=new commoncode();
        cm.Displaying_Dropdown_values()

    }) 
    it.only('Verifying_Alerts',function(){
        const cm=new commoncode();
        cm.Verifying_Alerts()

    })
    

})




