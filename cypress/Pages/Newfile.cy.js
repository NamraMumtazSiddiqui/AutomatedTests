export class LoginPage{
    click=".oxd-button";
    navigate(url){
        cy.visit(url)
    }
    username(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',{setTimeout:70000}).type('Admin').click();
    }
    password(){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',{setTimeout:70000}).type('admin123').click();
    }
   Loginbutton(){
    cy.get(this.click).click();
}
}