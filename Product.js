// **** Faker *******
const faker = require('@faker-js/faker');

////////////////////////////////////////////
//  PRODUCT
////////////////////////////////////////////

/**
 * Product Class
 */
class Product {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = `$${ faker.commerce.price() }`;
        this.department = faker.commerce.department();
    }
}

export default Product;