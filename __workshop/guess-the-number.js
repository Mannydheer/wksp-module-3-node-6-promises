// This exercise will be done in a new file, `guess-the-number.js`.

// Using the `inquirer` module, write a program that will play the "guess the number game":

//   * Create a random number between 1 and 100. Call it the hidden number
//   * Start with 5 guesses
//   * As long as there are guesses left:
//     * Ask the user for a number between 1 and 100 until they give you one
//     * If they find the hidden number, they win the game. END
//     * Otherwise, tell them whether their guess is lower or higher than the hidden number
//     * Loop back
//   * The user has lost the game. END

// ---

// const inquirer = require('inquirer');

// const questions = [
//     {
//         type: 'input',
//         name: 'first',
//         message: 'Name Please?' 
//     }
// ];

// inquirer.prompt(questions)
//     .then(answers => {
//         console.log(answers);
//     });

//https://www.npmjs.com/package/inquirer

const inquirer = require('inquirer');


let hiddenNumber = Math.floor(Math.random() * 101) + 1;     // returns a random integer from 1 to 100

const questions = [
    {
        type: 'input', //define type of Q you want to ask. 
        name: 'first', //name is what will show up in asneres. It will be the name of the key. (keyvalue object pair)
        message: 'Name Please?' //define the message you want to ask. 
    },
    {
        type: 'input',
        name: 'number',
        message: "Guess a number"
    }
];

inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
    });

