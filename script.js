var passwordLength = 8;

var characterOptions = [];
var useLowercase = false;
var useUppercase = false;
var useNumbers = false;
var useSpecial = false;
var generated = false;

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = lowercase.map(letter => letter.toUpperCase())
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var special = ["!","@","#","$","%","^","&","*","(" ,")","-","_","=","+","[","]","{","}","|","/","\\",":",";",'"',"'","<",">",",",".","?"]

//end off variables
//these function control password creation variables
function chooseLength(){
  console.log("looped")
  length = prompt("Enter password length betweeen 8 and 20 characters.")
  passwordLength = parseInt(length)

  if (passwordLength > 20){
    passwordLength = 20
    return;
  }

  if (passwordLength < 8){
    passwordLength = 8
    return;
  }

  if (passwordLength > 8 || passwordLength < 20){
    return;
  }

  if (typeof passwordLength != Number){
    chooseLength()
  }
}



//bools only allow for y or no, will loop
function enableLowercase(){
  var input = prompt("Would you like your password to include lowercase letters? Y or N")
  var answer = input.toUpperCase()
  console.log(answer)
  if(answer === "Y"){
    useLowercase = true;
    return;
  }
  else if (answer === "N"){
    useLowercase = false;
    return;
  }
  else{
    enableLowercase()
  }
}


function enableUppercase(){
  var input = prompt("Would you like your password to include uppercase letters? Y or N")
  var answer = input.toUpperCase()
  console.log(answer)
  if(answer === "Y"){
    useUppercase = true;
    return;
  }
  else if (answer === "N"){
    useUppercase = false;
    return;
  }
  else{
    enableUppercase()
  }
}



function enableNumbers(){
  var input = prompt("Would you like your password to include numbers? Y or N")
  var answer = input.toUpperCase()
  console.log(answer)
  if(answer === "Y"){
    useNumbers = true;
    return;
  }
  else if (answer === "N"){
    useNumbers = false;
    return;
  }
  else{
    enableNumbers()
  }
}



function enableSpecial(){
  var input = prompt("Would you like your password to include special characters? Y or N")
  var answer = input.toUpperCase()
  console.log(answer)
  if(answer === "Y"){
    useSpecial = true;
    return;
  }
  else if (answer === "N"){
    useSpecial = false;
    return;
  }
  else{
    enableSpecial()
  }

}

//prompts endlessly loop without this. not sure why. research buttons
//probably not needed now that generate function works. out of time to test
function start(){
  chooseLength()
  conditionsCheck()
}


//loops through bools until at least 1 is true
function conditionsCheck(){
  console.log("check")
  enableLowercase()
  console.log("lower")
  enableUppercase()
  console.log("upper")
  enableNumbers()
  console.log("num")
  enableSpecial()
  console.log("spec")

  
  if (!useLowercase && !useUppercase && !useNumbers && !useSpecial){
    alert("please answer yes to allow at least one character type.")
    console.log("pick one")
    conditionsCheck()
  }

  else{
    console.log("pass")
    writePassword()
    return;
  }
}

//first click opens prompts, other clicks generate new passwords
function generate(){
  if(generated){
    writePassword()
  }
  else{
    generated = true;
    start()
  }
}
///------------end of variable functions-------------------

//----------------------password generation-----------------

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
 

//randomly generates a character from merged array and creates string
function selectCharacters(){
  mergedString = ""
  for (var i = 0; i < passwordLength; i++){
    var index = Math.floor(Math.random() * characterOptions.length)
    var character = characterOptions[index]
    // var nextCharacter = character
    mergedString = mergedString.concat(character)
  }
  console.log(mergedString)
  return mergedString
}


//takes the output of the previous functions and adds them to the display
function writePassword() {
finalMerge()
password = selectCharacters()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("display")
  return;
}


//button click start generate function
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generate);

