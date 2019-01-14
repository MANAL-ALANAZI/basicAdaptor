
let request = require('request');
const readline = require('readline');

let apiKey = 'f5a8d06a-60b6-4ccf-afc1-953c1874a896';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you want to search? ', (answer) => {
    console.log('Getting the definition of', answer, ':');
    //this.keyword = answer;
    getDefinition(answer);
    rl.close();
});

var getDefinition = function (keyword) {

    //let keyword = 'melanoma';
    let url = `http://data.bioontology.org/search?q=${keyword}&ontologies=NCIT,GO&roots_only=true&apikey=${apiKey}`

    request(url, function (err, res, body) {
        if (err) {
            console.log('error:', error);
        } else {

            let response = JSON.parse(body);

            if (response.collection[0] && response.collection[0].definition[0])
                console.log(response.collection[0].definition[0]);

            else
                console.log('No Definition found');
        }
    });
}