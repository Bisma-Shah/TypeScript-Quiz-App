#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Welcome message
console.log(chalk.bold.rgb(171, 248, 90)("\n\t<<<========== Welcome to the TypeScript Quiz! ==========>>>"));
console.log(chalk.bold.rgb( 240, 250, 114)("\t<<<======= Let's test your TypeScript knowledge. Good luck! =======>>>\n"));

// Define questions for the quiz
const quiz: {
    Q1: string;
    Q2: string;
    Q3: string;
    Q4: string;
    Q5: string;
    Q6: string;
    Q7: string; 
    Q8: string; 
    Q9: string; 
    Q10: string; 
    Q11: string; 
    Q12: string; 
    Q13: string; 
    Q14: string; 
    Q15: string; 
} = await inquirer.prompt(
    [
        {
            name: "Q1",
            type: "list",
            message: chalk.bold.rgb(51, 255, 224)("Q1: What is the file extension of TypeScript?"),
            choices: ["a) .js","b) .ts", "c) .html", "d) .css"]
        },
        {
            name: "Q2",
            type: "list",
            message: chalk.bold.rgb(252, 240, 117)("Q2: TypeScript is a superset of which programming language?"),
            choices: ["a) Java", "b) JavaScript", "c) Python", "d) C++"]
        },
        {
            name: "Q3",
            type: "list",
            message: chalk.bold.rgb(51, 255, 134)("Q3: Which keyword is used to declare variables in TypeScript?"),
            choices: ["a) var", "b) let", "c) const", "d) both b and c (let and const)"]
        },
        {
            name: "Q4",
            type: "list",
            message: chalk.bold.rgb(182, 175, 234)("Q4: What symbol is used for type annotation in TypeScript?"),
            choices: ["a) :", "b) =","c) =>","d) ::"]
        },
        {
            name: "Q5",
            type: "list",
            message: chalk.bold.rgb(135, 238, 183)("Q5: Which keyword is used to declare optional parameters in TypeScript?"),
            choices: ["a) required", "b) void ", "c) optional", "d) any"]
        },
        {
            name: "Q6",
            type: "list",
            message: chalk.bold.rgb(189, 252, 117)("Q6: Which TypeScript operator is used for checking if a property exists in an object?"),
            choices: ["a) ==", "b) in", "c) ===", "d) typeof"]
        },
        {
            name: "Q7",
            type: "list",
            message: chalk.bold.rgb(255, 170, 118)("Q7: Besides 'number', 'string', and 'boolean', what other data type exists in TypeScript?"),
            choices: ["a) decimal", "b) null", "c) undefined", "d) void"]
        },
        {
            name: "Q8",
            type: "list",
            message: chalk.bold.rgb(120, 233, 36)("Q8: What can be defined using the 'interface' keyword in TypeScript?"),
            choices: ["a) Objects", "b) Functions", "c) Classes", "d) All of the above"]
        },
        {
            name: "Q9",
            type: "list",
            message: chalk.bold.rgb(116, 210, 250)("Q9: Which keyword is used for type assertion in TypeScript?"),
            choices: ["a) as", "b) is", "c) to", "d) type"]
        },
        {
            name: "Q10",
            type: "list",
            message: chalk.bold.rgb(233, 241, 53)("Q10: Which operator checks for strict equality in TypeScript?"),
            choices: ["a) ==", "b) ===", "c) =", "d) !=="]
        },
        {
            name: "Q11",
            type: "list",
            message: chalk.bold.rgb(190, 148, 236)("Q11: Which keyword in TypeScript makes object properties optional?"),
            choices: ["a) maybe", "b) undefined", "c) partial", "d) optional"]
        },
        {
            name: "Q12",
            type: "list",
            message: chalk.bold.rgb(184, 234, 171)("Q12: How is the union type of 'null' and 'undefined' represented in TypeScript?"),
            choices: ["a) |", "b) &", "c) !", "d) /"]
        },
        {
            name: "Q13",
            type: "list",
            message: chalk.bold.rgb(240, 189, 87)("Q13: Which keyword is used to assign multiple types to a variable in TypeScript?"),
            choices: ["a) union", "b) intersection", "c) any", "d) all"]
        },
        {
            name: "Q14",
            type: "list",
            message: chalk.bold.rgb(141, 235, 197)("Q14: Which keyword is used to explicitly set a value to 'undefined' or 'null' in TypeScript?"),
            choices: ["a) none", "b) void", "c) never", "d) null"]
        },
        {
            name: "Q15",
            type: "list",
            message: chalk.bold.rgb(185, 188, 241)("Q15: Which concept is used for type guard in TypeScript?"),
            choices: ["a) Generics", "b) Enums", "c) Interfaces", "d) Enums"]
        }
    ]
);

// Initialize score
let score: number = 0;

switch(quiz.Q1) {
    case "b) .ts":
        console.log(chalk.bold.rgb(51, 255, 134)(("1. Correct!")));
        ++score;
        break;
        default: console.log(chalk.red.bold("1. Incorrect!"));     
}
switch(quiz.Q2) {
    case "b) JavaScript":
        console.log(chalk.bold.rgb(51, 255, 134)("2. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("2. Incorrect!"));     
}
switch(quiz.Q3) {
    case "d) both b and c (let and const)":
        console.log(chalk.bold.rgb(51, 255, 134)("3. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("3. Incorrect!"));     
}
switch(quiz.Q4) {
    case "a) :":
        console.log(chalk.bold.rgb(51, 255, 134)("4. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("4. Incorrect!"));     
}
switch(quiz.Q5) {
    case "c) optional":
        console.log(chalk.bold.rgb(51, 255, 134)("5. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("5. Incorrect!"));     
}
switch(quiz.Q6) {
    case "b) in":
        console.log(chalk.bold.rgb(51, 255, 134)("6. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("6. Incorrect!"));     
}
switch(quiz.Q7) {
    case "d) void":
        console.log(chalk.bold.rgb(51, 255, 134)("7. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("7. Incorrect!"));     
}
switch(quiz.Q8) {
    case "a) Objects":
        console.log(chalk.bold.rgb(51, 255, 134)("8. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("8. Incorrect!"));     
}
switch(quiz.Q9) {
    case "a) as":
        console.log(chalk.bold.rgb(51, 255, 134)("9. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("9. Incorrect!"));     
}
switch(quiz.Q10) {
    case "b) ===":
        console.log(chalk.bold.rgb(51, 255, 134)("10. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("10. Incorrect!"));     
}
switch(quiz.Q11) {
    case "d) optional":
        console.log(chalk.bold.rgb(51, 255, 134)("11. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("11. Incorrect!"));     
}

switch(quiz.Q12) {
    case "a) |":
        console.log(chalk.bold.rgb(51, 255, 134)("12. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("12. Incorrect!"));     
}
switch(quiz.Q13) {
    case "a) union":
        console.log(chalk.bold.rgb(51, 255, 134)("13. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("13. Incorrect!"));     
}
switch(quiz.Q14) {
    case "d) null":
        console.log(chalk.bold.rgb(51, 255, 134)("14. Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("14. Incorrect!"));     
}
switch(quiz.Q15) {
    case "a) Generics":
        console.log(chalk.bold.rgb(51, 255, 134)("15 Correct!"));
        ++score;
        break;
        default: console.log(chalk.red.bold("15. Incorrect!"));     
}
console.log(chalk.bold.yellow(`<<<========== Total Score: ${score} ==========>>>`));



