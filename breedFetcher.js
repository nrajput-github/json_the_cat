const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

      request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {

      if (error !== null) {
      return callback(error);

      }
      const data = JSON.parse(body); //Convert string to object
      if (!Array.isArray(data) || !data.length ) {
      return callback("Breed Not Found: " + breedName);

      }

      return callback(null, data[0]["description"]);
      });
};

module.exports = { fetchBreedDescription };
