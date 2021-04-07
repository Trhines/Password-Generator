var passwordLength = 20;
var pass = "";
var characterOptions = [];
var useLowercase = true;
var useUppercase = true;
var useNumbers = false;
var useSpecial = true;
var character = "";
var mergedString = "";

//code below given for assignment, I have no clue what this does, ill worry about that later
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = lowercase.map(letter => letter.toUpperCase())
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var special = ["!","@","#","$","%","^","&","*","(" ,")","-","_","=","+","[","]","{","}","|","/","\\",":",";",'"',"'","<",">",",",".","?"]
 
//merges arrays based on bools
function finalMerge(){
  if(useLowercase){
    characterOptions = characterOptions.concat(lowercase)
    // console.log(characterOptions)
  }
  if(useUppercase){
    characterOptions = characterOptions.concat(uppercase)
    // console.log(characterOptions)
  }
  if(useNumbers){
    characterOptions = characterOptions.concat(numbers)
    // console.log(characterOptions)
  }
  if(useSpecial){
    characterOptions = characterOptions.concat(special)
    // console.log(characterOptions)
  }
  console.log(characterOptions)
}
 
//randomly generates a character from merged array
//for loop is not working, only spits out one character
function selectCharacters(){
  mergedString = ""
  for (var i = 0; i < passwordLength; i++){
    var index = Math.floor(Math.random() * characterOptions.length)
    var character = characterOptions[index]
    var nextCharacter = character
    mergedString = mergedString.concat(nextCharacter)
    console.log(mergedString)
  }
}



finalMerge()
selectCharacters()








//from rock paper scissors bot
// var index = Math.floor(Math.random() * options.length);
// var computerChoice = options[index];