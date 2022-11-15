describe('when a user visits our shorten URL website', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: "urlObject"})
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      body: {
        id:2,
        long_url: "http://This.is.my.mod3.final/dffdsfds/dfsdfsd/ewrwere",
        short_url: "http://localhost:3001/useshorturl/2",
        title: "This is Sweet!"
      }
    }) 
    cy.visit('http://localhost:3000/')
  })

  it("should be able to view the page title and the existing shortened URLs", () => {
    cy.get("h1").contains("URL Shortener")
    cy.get('h3.title').contains('Awesome photo')
    cy.get("a.short-url").contains("http://localhost:3001/useshorturl/1")
    cy.get('p.long-url').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  });

  it("should be able to view the form with the proper inputs", () => {
    cy.get("form").should("exist")
    cy.get("input").should("have.length", 2)
    cy.get("input").first().should("be.visible")
    cy.get("input").last().should("be.visible")
  });

  it("should be able to view the information reflected in the input fields when they fill out the form", () => {
    cy.get("input").first().type("This is Sweet!")
    cy.get("input").first().should("have.value", "This is Sweet!")
    cy.get("input").last().type("http://This.is.my.mod3.final/dffdsfds/dfsdfsd/ewrwere") 
  });

  it(" should show the new shortened URL is rendered", () => {
    cy.get("input").first().type("This is Sweet!")
    cy.get("input").first().should("have.value", "This is Sweet!")
    cy.get("input").last().type("http://This.is.my.mod3.final/dffdsfds/dfsdfsd/ewrwere")
    cy.get('button').click() 
    cy.intercept("http://localhost:3001/api/v1/urls", { fixture: "urlPostObject.json" })
    cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
          statusCode: 201,
          body: {
            id:2,
            long_url: "http://This.is.my.mod3.final/dffdsfds/dfsdfsd/ewrwere",
            short_url: "http://localhost:3001/useshorturl/2",
            title: "This is Sweet!"
          }
  });
})




})