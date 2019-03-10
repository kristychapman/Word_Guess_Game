//array of animals   
var animals = ["zebra", "starfish", "horse", "starnosed mole", "antelope", "lamb", "armadillo", "giraffe"];
//choose animal at random
let randNum = Math.floor(Math.random() * animals.length);
let thriving = [];
let extinct = [];
let chooseAnimal = animals[randNum];
let blankSpace = [];

//Dom manipulations
let docBlankSpace = document.getElementsByClassName('blankspace');
let docGuessCorrect = document.getElementsByClassName('guesses_correct');
let docGuessIncorrect = document.getElementsByClassName('guesses_incorrect');
//Testing
console.log(chooseAnimal);
//create underscores based on length of word
let generateBlankSpace = () => {
  for (var i = 0; i < chooseAnimal.length; i++){
    blankSpace.push('_');
      }
  return blankSpace;
}
//Testing
console.log(generateBlankSpace());

//User guess
document.addEventListener('keypress', (event) =>{
  let keyword = String.fromCharCode(event.keyCode);
//If User Guess is right
  if(chooseAnimal.indexOf(keyword) > -1){
//push to thriving array
    thriving.push(keyword);
    docBlankSpace[0].innerHTML = blankSpace.join(' ');
    docGuessCorrect[0].innerHTML = thriving; 
//replace underscore with letter
    blankSpace[chooseAnimal.indexOf(keyword)] = keyword;
//Check to see if user word matches guesses
   if (blankSpace.join('') == chooseAnimal) {
    //change header image to new image.
    alert('You Win!')
   }
  }else{
    extinct.push(keyword);
    docBlankSpace[0].innerHTML = generateBlankSpace().join(' '); 
    docGuessIncorrect[0].innerHTML = extinct;
    }

  });



//wins


//losses
