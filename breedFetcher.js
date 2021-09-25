const request = require('request');
let breedName = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
console.log(typeof body);

// console.log(typeof error);
// console.log(error);
// const errData = JSON.parse(error); //Convert string to object
// console.log(errData);
if (error !== null) {
console.log(error);
return error;
}
const data = JSON.parse(body); //Convert string to object
if (!Array.isArray(data) || !data.length ) {
console.log("Breed Not Found: " + breedName);
return breedName;
}

// if (data[0]["name"] !== breedName) {
// console.log("Invalid cat name: " + breedName);
// return breedName;
// }

console.log(data);
console.log(typeof data);
console.log(data[0]["description"]);
});