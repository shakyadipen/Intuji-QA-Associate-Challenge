import registerPage from "../../pageObjects/Register.cy";
import signupPage from "../../pageObjects/signupPage.cy";
import { faker } from '@faker-js/faker';
describe("user should successfully Register",()=>{
    beforeEach(function(){
        cy.visit("https://automationexercise.com/login");
        cy.fixture('testData').as('data'); 
        
          Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
          });
    })
    it("User Registration Test",()=>{
        const registerObj=new registerPage();
        const signupObj=new signupPage();
      
        //Crate User Regristration Data using faker
        // const firstName = faker.person.firstName();
        // const lastName = faker.person.lastName();
        // const email = faker.internet.email();
        // const password = faker.internet.password();
        // const address = faker.location.streetAddress();
        // const city = faker.location.city();
        // const zipCode = faker.location.zipCode();
        // const state=faker.location.state();
        // const mobileNumber=faker.phone.number() ;
        // const month=faker.date.month();

        registerObj.enterName('follower')
        cy.get('@data').then(data=>{
            registerObj.enterEmail(data.email)

        })
        
        
        registerObj.clickSignup()
        cy.get('@data').then(data=>{
            signupObj.fillRegistrationForm(data)
        })
    //     if(registerObj.getErrorMessage().contains("Email Address already exist!")){
    //         //retry with another username and email
    //         registerObj.enterName('nonfollower')
    //        // registerObj.enterEmail(data.email)
    //         cy.get('@data').then(data=>{
    //             registerObj.enterEmail(data.email)
    
    //         })
    //         registerObj.clickSignup()
    //     }else{
    //     cy.get('@data').then(data=>{
    //         signupObj.fillRegistrationForm(data)
    //     })
    // }
       // signupObj.fillRegistrationForm(data);
        // cy.fixture("testData.json").then((data) => {
        //     signupObj.fillRegistrationForm(data);
        //   });

        //signupObj.fillRegistrationForm(firstName,lastName,password,12,"December","1998",city,"India",state,address,zipCode,mobileNumber)
        // signupObj.selectTitle()
        // signupObj.enterPassword("admin@012")
        // signupObj.setDay(12)
        // signupObj.setMonth("December")
        // signupObj.setYear("1998")
        // signupObj.setFirstName("Bob")
        // signupObj.setLastName("peter")
        // signupObj.setAddress("texas")
        // signupObj.setCountry("India")
        // signupObj.setState('03')
        // signupObj.setCity("Kualalampur")
        // signupObj.setZipCode("7788")
        // signupObj.setMobileNumber("8888888888")
        signupObj.clickCreatebutton()
        cy.wait(2000)
        if(signupObj.getSuccessMessage().contains("Account Created!")){
            signupObj.clickContinueBtn()
            cy.log("Account Created Successfully")
        }
        else{

        }

    })

})