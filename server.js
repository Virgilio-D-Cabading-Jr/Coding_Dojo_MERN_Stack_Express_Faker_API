// **** Express ********
const express = require("express");
const app = express();
const PORT = 8000;
// **** Faker *******
const faker = require('@faker-js/faker');

///////////////////////////////////////////////
//  SERVER JAVASCRIPT
///////////////////////////////////////////////

/**
 * User Class **********************************
 */
class User {
  constructor() {
    this._id = faker.finance.account();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

/**
 * Company Class *******************************
 */
class Company {
  constructor() {
    this._id = faker.finance.account();
    this.name = faker.company.companyName() + " " + faker.company.companySuffix()
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}

// //// ROUTES ////////////////////////////////
//    req is short for request, res is short for response

/**
 * User Route *********************************
 */
 app.get("/api/users/new", (req, res) => {
  const user = new User();
  console.log(".: User :", user, ":.");
  res.send(user);
});

app.get("/api/company", (req, res) => {
  const company = new Company();
  console.log("Navigated to /api/company || ", JSON.stringify(company));
  res.send(`Company: ${ JSON.stringify(company) }`);
});

const server = app.listen(PORT, () =>
  console.log(`🦄 🦄 🦄 Server is running and listening on Port ${server.address().port}! 🦄 🦄 🦄`)
);