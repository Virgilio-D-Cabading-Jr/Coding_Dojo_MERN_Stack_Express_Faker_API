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
 * Product Class ******************************
 */
 class Product {
  constructor() {
      this.name = faker.commerce.productName();
      this.price = `$${ faker.commerce.price() }`;
      this.department = faker.commerce.department();
  }
}

/**
 * User Class **********************************
 */
class User {
  constructor() {
    
  }
}

// //// FIELDS ////////////////////////////////
const randomName = faker.name.findName();

// //// ROUTES ////////////////////////////////
//    req is short for request, res is short for response

/**
 * Product Route ******************************
 */
app.get("/api/product", (req, res) => {
  const product = new Product();
  console.log(".: Product :", product, ":.");
  // res.send("Our express api server is now sending this over to the browser");
  res.send(`Product: ${ JSON.stringify(product) }`)
});

const server = app.listen(PORT, () =>
  console.log(`🦄 🦄 🦄 Server is running and listening on Port ${server.address().port}! 🦄 🦄 🦄`)
);