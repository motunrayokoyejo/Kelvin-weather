const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
return userInput;
}else{
  console.log('Please enter the right input')
}
};

const getComputerChoice = () =>{
 randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors'
  }
};

console.log(getComputerChoice());

function determineWinner(userChoice,computerChoice){
  if (userChoice ===computerChoice){
  return 'This game was a tie'
  }
  if (userChoice === 'rock'){
  if (computerChoice === 'paper'){
    return 'The computer won';
  } else{
    return 'You won';
  }
  }
  if (userChoice === 'paper'){
    if (computerChoice ==='scissors' || computerChoice ==='rock'){
      return 'The computer won!';
    } else{
      return 'You won!';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock' || computerChoice === 'paper'){
      return 'The computer won!';
    } else{
      return 'You won!';
    }
  }
}
 
const playGame = () => {
const userChoice =getUserChoice('rock');
const computerChoice = getComputerChoice();
console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
