let input = 'turpentine and turtles';
const vowel = ['a', 'e', 'i','o','u'];
resultArray = []
for(let i = 0; i< input.length; i++){
  for(let j=0; j< vowel.length; j++){
    if (input[i] == 'e' || input[i] == 'u'){
    resultArray.push(input[i]);
    }
  }
} 
console.log(resultArray.join('').toUpperCase());

