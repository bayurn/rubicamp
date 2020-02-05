function  stringManipulation(word) {
  if (word.charAt(0) === 'a' || word.charAt(0) === 'i' || word.charAt(0) === 'u' || word.charAt(0) === 'e' || word.charAt(0) === 'o') {
    return word;
    } else { return word.slice(1, 7) + word.charAt(0) + "nyo" 
    }
  }
function sentencesManipulation(sentence) {
  let str = "";
  let sliceWord = sentence.split(" ");
  for (let i = 0; i < sliceWord.length; i++){
    str += stringManipulation(sliceWord[i]) + " ";
  }
  console.log(str); 
}

sentencesManipulation('ibu pergi ke pasar bersama aku');