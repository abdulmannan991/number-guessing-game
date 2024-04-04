#! /usr/bin/env node

import inquirer from "inquirer";

const random_number = Math.floor(Math.random()*10 +1 );

const answers = await inquirer.prompt([

    {
        name : "userguessednumber",
        type : "number",
        message : "Please guess a number between 1 - 10 \n",
    }
]);




if (random_number === answers.userguessednumber) {
    console.log("You guessed a correct number! ")
} else {
    console.log("You guessed a wrong number . The correct number is  :-"+ random_number);
}

