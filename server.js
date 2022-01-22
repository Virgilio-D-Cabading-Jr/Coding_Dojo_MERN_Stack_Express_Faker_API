// **** Express ********
const express = require("express");
const app = express();
const PORT = 8000;
// **** Faker *******
const faker = require('@faker-js/faker');

///////////////////////////////////////////////
//  SERVER JAVASCRIPT
///////////////////////////////////////////////

const randomName = faker.name.findName();

//  //// ROUTES ///////////////////////////////
//    req is short for request, res is short for response
app.get("/api", (req, res) => {
  // res.send("Our express api server is now sending this over to the browser");
  res.send(`Faker name: ${randomName}`)
});


const server = app.listen(PORT, () =>
  console.log(`🦄 🦄 🦄 Server is running and listening on Port ${server.address().port}! 🦄 🦄 🦄`)
);