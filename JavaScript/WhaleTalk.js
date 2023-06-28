function returnText(){
  let input = document.getElementById("userInput").value;

let vowelArray = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(input[i]);
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
   for (let j = 0; j < vowelArray.length; j++) {
     // console.log(j);
     if (input[i] === vowelArray[j]) {
      resultArray.push(input[i]);
    }
  }
}

let resultString = resultArray.join('').toUpperCase();

let outputElement = document.getElementById('output');
outputElement.textContent = resultString;
}
