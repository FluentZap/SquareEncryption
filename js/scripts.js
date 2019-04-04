
function truncatePhrase(sentence) {
  var regExFilter = /([a-z]|\d)/
  var newSentence = "";
  sentence = sentence.toLowerCase();
  for(let i = 0; i < sentence.length; i++) {
    var letter = sentence.charAt(i);
    if(regExFilter.test(sentence.charAt(i))) newSentence += letter;
  }
  return newSentence;
}


function cryptofySentance(sentence) {
  var cryptoArray = truncatePhrase(sentence).split("")
  var cryptofiedSentence = ""
  var size = Math.ceil(Math.sqrt(sentence.length));

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (cryptoArray[x + (y * size)] !== undefined) {
        cryptofiedSentence += cryptoArray[x + (y * size)]
      }
    }
  }
  return cryptofiedSentence;
}

function addSpacesEvery(sentence, number) {
  var newString = "";
  for (let i = number; i < sentence.length + number; i += number) {
    newString += sentence.substring(i - number, i) + ' ';

  }
  return newString;
}

function createTable(userInput, size) {
  userInput = truncatePhrase(userInput);
  var htmlContent = ""
  for (let y = 0; y < size; y++) {
    htmlContent += "<tr>"
    for (let x = 0; x < size; x++) {
      if (userInput[x + (y * size)] !== undefined) {
        htmlContent += "<td>" + userInput[x + (y * size)] +"</td>"
      }
    }
    htmlContent += "</tr>"
  }
  return htmlContent;
}


$(document).ready(function (){
  $('#original').on('input', function() {
    var userInput = $('#original').val();
    var cryptoPhrase = cryptofySentance(userInput);
    $('#crypto').val(addSpacesEvery(cryptoPhrase, 5));
    $('#cryptoTable').html(createTable(userInput, Math.ceil(Math.sqrt(userInput.length))));
  })
});

cryptofySentance(truncatePhrase("Apple juice is soo good for my tummy"));

//Remove spaces and special characters and case
//Take length and get square root then round up


//array[y + (x * height)]

//array[colmumn1[], ]

//output in groups of five letters
