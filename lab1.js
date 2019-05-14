const readline  = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max + 1));
}

const question = questionText => 
new Promise(resolve =>{
    rl.question(questionText, answer=> resolve(answer));
});

const correctOptions = ['rock','paper','scissors'];

const RPSgame = async() => {

    let selection = null ;

    while (!correctOptions.includes(selection))
     {
        selection = await question(
            `please choose one of the following 
            Rock
            Paper
            Scissors
            `
        );
        //if (selection = correctOptions) {
        //console.log('----You chose wrong option----');
        //} 
        selection = selection.toLowerCase();
    }

    const compSelection = correctOptions[getRandomInt(2)];
     if (selection === compSelection) {
        console.log('There was a tie');

    } else if (
        (selection === 'rock' && compSelection === 'scissors')||
        (selection === 'scissors' && compSelection === 'paper')||
        (selection === 'paper' && compSelection === 'rock')
        ){
            console.log(`The Player won`);
        } else {
            console.log(`The Computer won`);
        }
        console.log(``);
        console.log(`Player Selected :${selection}
Computer Selected :${compSelection}`);
};

RPSgame();