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
  return str
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini > '
});

rl.prompt();

rl.on('line', (answer) => {
  switch (answer.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log('hasil konversi: ' + sentencesManipulation(answer));
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Good Bye!');
  process.exit(0);
});