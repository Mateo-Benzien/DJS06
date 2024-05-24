// Datasets
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. ForEach Basics
// Log each name and province
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// Log each name with matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. Uppercase Transformation
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// 3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

// 6. Finding 'S'
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

// 7. Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Exercises (Single console.log Execution)

// 1. Log Products
console.log(products.forEach(product => console.log(product.product)));

// 2. Filter by Name Length
console.log(products.filter(product => product.product.length <= 5));

// 3. Price Manipulation
console.log(
  products
    .filter(product => product.price !== '' && product.price.trim() !== '')
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0)
);

// 4. Concatenate Product Names
console.log(products.reduce((acc, product) => acc + product.product, ''));

// 5. Find Extremes in Prices
const validProducts = products.filter(product => product.price !== '' && product.price.trim() !== '')
                              .map(product => ({ ...product, price: Number(product.price) }));
const highestPriceProduct = validProducts.reduce((prev, curr) => (curr.price > prev.price ? curr : prev), validProducts[0]);
const lowestPriceProduct = validProducts.reduce((prev, curr) => (curr.price < prev.price ? curr : prev), validProducts[0]);
console.log(`Highest: ${highestPriceProduct.product}. Lowest: ${lowestPriceProduct.product}.`);

// 6. Object Transformation
const transformedProducts = Object.entries(products.reduce((acc, product, index) => {
  acc[`product${index + 1}`] = { name: product.product, cost: product.price };
  return acc;
}, {}));
console.log(transformedProducts);
