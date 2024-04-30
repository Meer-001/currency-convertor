#!/user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    USD: 1,
    EUR: 1.07,
    PKR: 278.5,
    INR: 83.45,
    AUD: 1.52,
    JPY: 156.38,
    KWD: 0.31,
    CNY: 7.24,
};
let userInput = await inquirer.prompt([
    {
        name: "from",
        message: "Select the currency you want to convert from!",
        type: "list",
        choices: ["USD", "EUR", "PKR", "INR", "AUD", "JPY", "KWD", "CNY"],
    },
    {
        name: "to",
        messae: "Select the currency you want to covert to!",
        type: "list",
        choices: ["USD", "EUR", "PKR", "INR", "AUD", "JPY", "KWD", "CNY"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to convert!",
    },
]);
let fromAmount = currency[userInput.from];
let toAmount = currency[userInput.to];
let userAmount = userInput.amount;
let baseAmount = userInput.amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(chalk.green("your answer is:"));
console.log(convertAmount);
console.log((chalk.gray("\n", "Developed by : Ahmer Shaikh", "\n")));
