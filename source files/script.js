const fs = require('fs');

let riddles;

function getJSON() {
    jsonFile = fs.readFile('riddles.json');
    console.log(jsonFile)
    return jsonFile;
}

window.addEventListener('load', () => {
    riddles = getJSON();
    console.log(riddles);    
});
