const triangle = (num, mode = '') => {
  const character = '#';
  let printCharacter = '';
  let loopLength = num > 0 ? num : -num;

  if (mode === '' || mode === 'left' || mode === 'right') {
    for (let i=1; i<=loopLength; i++) {
      printCharacter = '';
      for (let j=1; j<=loopLength; j++) {
        if ((num > 0) && (mode === 'left' || mode === '')) {
          printCharacter = j <= i ? printCharacter + character : printCharacter + ' ';
        } else if (num > 0 && mode === 'right') {
          printCharacter = j < num - i + 1 ? printCharacter + ' ' : printCharacter + character ;
        } else if (num < 0 && mode === 'left') {
          printCharacter = j <= -num - i + 1 ? printCharacter + character : printCharacter + ' ' ;
        } else if (num < 0 && mode === 'right') {
          printCharacter = j < -num - i + 1 ? printCharacter + ' ' : printCharacter + character ;
        } 
      }
      console.log(printCharacter);
    }
  } else if (mode === 'isosceles') {
    for (let i=1; i<=loopLength; i++) {
      printCharacter = '';
      for (let j=1; j<2*loopLength; j++) {
        if (num > 0) {
          printCharacter = j <= num - i || j >= num + i ? printCharacter + ' ' : printCharacter += character;
        }  
        else if (num < 0) {
          printCharacter = j >= i && j <= 2*-num - i ? printCharacter + character : printCharacter += ' ';
        }
      }
      console.log(printCharacter);
    }
  } else {
    console.log("Please enter 'left', 'right', 'isosceles' or leave it this option blank");
  }
}

//tests
//triangle(2);
//triangle(-2);
//triangle(-4);
//triangle(4);
//triangle(-4, 'right');
//triangle(4, 'right');
//triangle(-4, 'left');
//triangle(4, 'left');
//triangle(-4, 'isosceles');
//triangle(4, 'isosceles');