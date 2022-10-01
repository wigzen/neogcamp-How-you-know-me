import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import ReadLine from "readline-sync";


// Welcome
function Welcome() {
    // figlet("WELCOME", {
    //     horizontalLayout: 'full',
    //     width: 80,
    //     whitespaceBreak: true
    // },function (err, data) {
    //   if (err) {
    //     console.log("kaboom");
    //     return;
    //   }
    // chalkAnimation.rainbow(data);

      // setTimeout(() => {
        let username = ReadLine.question('Tell me your name bro')
        console.log(chalk.blue.bgGray("Hello")+" "+username)
    // }, 1000);
    
    // });    

// Play

let QnA = [
    { 
        'question':"What is My Date of Birth? format:'DDMMYYYY'",
        'ans':"16022002"
    },
    { 
        'question':"What is my favorite food ?",
        'ans':"khichadi"
    },
    { 
        'question':"Which is my favorite place ?",
        'ans':"Mumbai"
    },
    { 
        'question':"What is my Hobby ?",
        'ans':"Reading Articles"
    },
    { 
        'question':"Do you know my current College",
        'ans':"Thakur College"
    }
]
let score =0
    const spinner = createSpinner('Checking Answer')
    QnA.forEach((val)=>{
        var ans = ReadLine.question(val.question)
        if (ans.toUpperCase() == val.ans.toUpperCase()){
            score+=1

            setTimeout(() => {
                spinner.success()
              }, 1000)
        }
        else{
            setTimeout(() => {
                spinner.error()
              }, 1000)
        }
    })

}

Welcome()
