const columns = arr => {
  let printWord = '';
  for (let i=0; i<10; i++) {
    printWord = '';
    for (let word of arr) {
      //printWord += word[i];
      printWord = word[i] ? printWord + word[i] + ' ': printWord + '  ';
    }
    console.log(printWord);
  }
}

columns(["Write","good","code","every","day"]);