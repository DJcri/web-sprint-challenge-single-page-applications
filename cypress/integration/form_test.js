describe("Form", () => {
  const nameInput = () => {
    return cy.get("input[name=name]");
  };
  const sizeSelect = () => {
    return cy.get("select[name=size]");
  };
  const ranchSauce = () => {
    return cy.get("input[value=ranch]");
  };
  const orderBtn = () => {
    return cy.get("button").contains("order");
  };
  const pepperoniBox = () => {
    return cy.get("input[name=pepperoni]");
  };
  const sausageBox = () => {
    return cy.get("input[name=sausage]");
  };
  const pineappleBox = () => {
    return cy.get("input[name=pineapple]");
  };
  const onionsBox = () => {
    return cy.get("input[name=onions]");
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000/form");
  });

  it("proper elements exist", () => {
    nameInput().should("exist");
    orderBtn().should("exist");
    pepperoniBox().should("exist");
    sausageBox().should("exist");
    pineappleBox().should("exist");
    onionsBox().should("exist");
  });

  it("can type in name", () => {
    nameInput().type("fake name").should("have.value", "fake name");
  });

  it("can select multiple toppings", () => {
    pepperoniBox().click();
    sausageBox().click();
    pineappleBox().click();
    onionsBox().click();
    pepperoniBox().should("be.checked");
    sausageBox().should("be.checked");
    pineappleBox().should("be.checked");
    onionsBox().should("be.checked");
  });

  it("can submit form", () => {
    nameInput().type("fake name");
    sizeSelect().select("Small");
    ranchSauce().click();
    orderBtn().should("not.be", "disabled");
  });
});
