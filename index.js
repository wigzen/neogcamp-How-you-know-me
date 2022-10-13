import chalk from "chalk";

import { createSpinner } from "nanospinner";
import ReadLine from "readline-sync";


// Welcome
function Welcome() {


  // setTimeout(() => {
  let username = ReadLine.question('Tell me your name bro')
  console.log(chalk.blue.bgGray("Hello") + " " + username)
  // }, 1000);

  // });    

  // Play

  let QnA = [
    {
      'question': "What is My Date of Birth? format:'DDMMYYYY'",
      'ans': "16022002"
    },
    {
      'question': "What is my favorite food ?",
      'ans': "khichadi"
    },
    {
      'question': "Which is my favorite place ?",
      'ans': "Mumbai"
    },
    {
      'question': "What is my Hobby ?",
      'ans': "Reading Articles"
    },
    {
      'question': "Do you know my current College",
      'ans': "Thakur College"
    }
  ]
  let score = 0
  const spinner = createSpinner('Checking Answer')
  QnA.forEach((val) => {
    var ans = ReadLine.question(val.question)
    if (ans.toUpperCase() == val.ans.toUpperCase()) {
      score += 1

      setTimeout(() => {
        spinner.success()
      }, 1000)
    }
    else {
      setTimeout(() => {
        spinner.error()
      }, 1000)
    }
  })
  setTimeout(() => {
    console.log(`${username} your Score is ${score}/5`)
  }, 1000)
}

Welcome()
