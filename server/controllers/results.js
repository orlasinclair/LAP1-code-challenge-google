const express = require("express");
const router = express.Router();
const data = require("../data");
const { findRandom } = require("../models/result");


const Result = require("../models/result");



//Retrieves the data of all results
router.get("/", (req, res) => {
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


// get result randomly -> Could be used on "I'm feeling lucky"
// Math floor

router.get("/random", (request, response) => {
    //Retrieves a result using its ID, with an error being displayed if the result is not found
        try {
            response.send(findRandom(any)); 
        } catch (e) {
            console.log(e);
            response.status(404).send(`<h1>${e}</h1>`);
        }
        });
    



module.exports = router;  
