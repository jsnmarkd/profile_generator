const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  `What's your name ? Nicknames are also acceptable :) \n`,
  `What's an activity you like doing? \n`,
  `What do you listen to while doing that? \n`,
  `Which meal is your favourite (eg: dinner, brunch, etc.) \n`,
  `What's your favourite thing to eat for that meal? \n`,
  `Which sport is your absolute favourite? \n`,
  `What is your superpower? In a few words, tell us what you are amazing at! \n`,
];
const answers = [];
let i = 0;
function ask() {
  if (i < questions.length) {
    rl.question(questions[i], (answer) => {
      answers.push(answer);
      i++;
      ask();  
    });
  } else {
    for (const ans of answers) {
      console.log(ans);
    }         
    rl.close();
  }
};
ask();