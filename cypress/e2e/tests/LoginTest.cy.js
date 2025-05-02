import homePage from "../../pageObjects/HomePage.cy";
import loginPage from "../../pageObjects/LoginPage.cy";
describe("user should successfully Login and Logout With Valid Credentials",()=>{
    const loginObj=new loginPage()
        const homeObj=new homePage()
    beforeEach(function(){
        cy.visit("https://automationexercise.com/login");
        cy.fixture('testData').as('data'); 
        
    })
    it("Should Logout and re-login with proper credentials ",()=>{
        if(loginObj.isLogoutElementVisible){
            homeObj.clickLogout()
            cy.log("User Successfully logged out")
        }else{
            cy.get('@data').then(data=>{
                cy.login(data.email,data.password)
                homeObj.clickLogout()
    
            })

        }
        //Use fixture to use the data
        cy.get('@data').then(data=>{
            cy.login(data.email,data.password)

        })
            
    })
    it("Should not login with invalid credentials provided",()=>{
        if(loginObj.isLogoutElementVisible){
            homeObj.clickLogout()
            cy.log("User Successfully logged out")
        }else{
            cy.get('@data').then(data=>{
                cy.login(data.email,"WrongPassword")
                //homeObj.clickLogout()
                loginObj.getErrorMessage().should('be.visible').contains("Your email or password is incorrect!")
                })

        }
        cy.get('@data').then(data=>{
            cy.login(data.email,"WrongPassword")
            loginObj.getErrorMessage().should('be.visible').contains("Your email or password is incorrect!")
           

        })
        

    })
        

    })