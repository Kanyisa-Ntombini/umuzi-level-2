const square = (num, character = '#') => {
  for (let i=0; i<num; i++) {
    let printCharacter = '';
    for (let j=0; j<num; j++) {
      printCharacter += character;
    }
    console.log(printCharacter);
  }
}

//tests
//square(2);
//square(3);
//square(4);
//square(6, '$');