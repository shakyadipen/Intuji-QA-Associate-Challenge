// Import the faker library
const { Faker, en } = require('@faker-js/faker');
const fs = require('fs');

// Initialize Faker with Japanese locale
const faker = new Faker({
  locale: [en] // Japanese locale with English fallback
});

// Function to generate fake test data
function generateTestData() {
  const testData = {
    firstName:faker.person.firstName(),
     lastName :faker.person.lastName(),
    email : faker.internet.email(),
   password : faker.internet.password(),
   address : faker.location.streetAddress(),
    city:faker.location.city(),
     zipCode : faker.location.zipCode(),
     state:faker.number.int({ min: 10, max: 99 }),
     month:faker.date.month(),
     day:faker.number.int({ min: 10, max: 29 }),
     year:'20'+faker.number.int({ min: 10, max: 21 }).toString(),
     country:'India',
    mobileNumber: '98' + faker.number.int({ min: 10000000, max: 99999999 }).toString(),
    
  };

  // Write the data to testData.json file
  fs.writeFileSync('cypress/fixtures/testData.json', JSON.stringify(testData, null, 2));
}

// Call the function to generate test data
generateTestData();
