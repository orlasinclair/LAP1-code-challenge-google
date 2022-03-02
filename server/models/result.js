let resultsData = require("../data.js");

class Result {
    //Create a Result class
    constructor(data) {
      this.id = data.id;
      this.result = data.result;
    }

    static get all() {
        //Method to retrieve the data for all results
        const results = resultsData.map((result) => new Result(result));
        return results;
      }

    static findById(id) {
        //Finds a result by its ID
        try {
        const resultData = resultsData.find((result) => result.id === id); //Returns the data of a result by using its ID
        const result = new Result(resultData); /*Creates a new result, maybe we'll not use it since we are giving 10 fixed results*/
        return result;
        } catch (e) {
        throw new Error("This ID does not exist");
        }
    }

    static findRandom(id) {
        //Finds a random result
        try {
        const resultData = resultsData.find((result) => result.id === id); //Returns the data of a result by using its ID
        const result = new Result(resultData); /*Creates a new result, maybe we'll not use it since we are giving 10 fixed results*/

        const randomResult = result[Math.floor(Math.random() * result.length)];
        return randomResult;
        } catch (e) {
        throw new Error(`${e}`);
        }
    }





};    

module.exports = Result;


