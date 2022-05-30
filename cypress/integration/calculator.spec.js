describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('.display').should('have.text', '1023456789')
  })


  // Test for add
  it('should be able to update the display with mathematical operations for addition', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '5');
  })

  // Test for subtract
  it('should be able to update the display with mathematical operations for subtraction', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '1');
  })

  // Test for multiply
  it('should be able to update the display with mathematical operations for multiplication', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '6');
  })

  // Test for divide
  it('should be able to update the display with mathematical operations for division', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '2');
  })


  it('should be able to chain multiple operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '-1');
  })

  // Test for normal size positive output
  it('should work for normal size positive outputs', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '18');
  })

  // Test for large size positive output
  it('should work for big size positive outputs', () => {
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '180000000000003');
  })

  // Test for negative output
  it('should work for big size negative outputs', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '-1999999999998');
  })

  // Test for decimal output
  it('should work decimal outputs outputs', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '1.6');
  })


  it('should return an error if trying to divide by 0', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', 'Error');
  })
})