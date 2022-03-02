const express = require("express");
const router = express.Router();
const data = require("../data");


const Result = require("../models/result");

router.get("/", (req, res) => {
    //Retrieves the data of all results
    res.json(data);
  });
  

// get result based on id: e.g. http://localhost:3000/results/1
router.get("/:id", (request, response) => {
//Retrieves a result using its ID, with an error being displayed if the result is not found
try {
    const resultId = parseInt(request.params.id); //Retrieves the result's id
    const selectedResult = Result.findById(resultId); //Finds the resylt by the selected id
    response.send(selectedResult); //Sends the found result as a response
} catch (e) {
    console.log(e);
    response.status(404).send(`<h1>${e}</h1>`);
}
});
  

module.exports = router;  
