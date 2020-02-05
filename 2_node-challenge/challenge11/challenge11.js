const readline = require('readline');
const fs = require('fs');

fs.readFile('pertanyaanCh11.json', 'utf8', (err, jsonString) => {
  if (err) {
    throw (err)
  } else {
    let data = JSON.parse(jsonString)
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Tebakan: '
    });
    
    let count = 0;
    console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n');
    console.log(`pertanyaan: ${data[count].question}`)
    rl.prompt();
    rl.on('line', (line) => {
      if (line.toLowerCase() === data[count].answer) {
        console.log('Anda Beruntung!\n')
        count++
        if (count == data.length) {
          console.log(`Anda Berhasil!`)
          rl.close();
        } else {
          console.log(`pertanyaan: ${data[count].question}`)
          rl.prompt();
        }
      } else {
        console.log('Wkwkwk Anda kurang beruntung!')
        rl.prompt();
      }
    }).on('close', () => {
      process.exit(0);
    });
  }
});
