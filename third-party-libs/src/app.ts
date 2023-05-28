import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import 'reflect-metadata';

import Product from './product.model';

/** mock data from server */
const products = [
  { title: 'Pen', price: 29.99 },
  { title: 'Pencil', price: 10.99 },
];
const prod = new Product('', -5.99);
validate(prod).then(errors => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!');
    console.log(errors);
  } else {
    console.log(prod.getInformation());
  }
});

// const loadedProducts = products.map(
//   product => new Product(product.title, product.price)
// );
const loadedProducts = plainToInstance(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}
