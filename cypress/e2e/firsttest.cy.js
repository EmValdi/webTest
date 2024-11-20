/// <reference types="cypress"/>

describe("First Test", () =>{
    it("should find components", () =>{
        cy.visit("http://localhost:3000/todo");
        // by tag name
        cy.get("input");

        //write on the input field
        cy.get("input").type("Hello World");

        //Assert
        cy.get("input").should("have.value", "Hello World");
    });
});