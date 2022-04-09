const triangle = num => {
  let printHash = '';
  for (let i=1; i<=num; i++) {
    //console.log('----------------------');
    printHash = '';
    for (let j=1; j<2*num; j++) {
      if (j >= i && j <= 2*num - i) {
        printHash += '#';
        /*console.log('if');
        console.log(`j=${j}`);
        console.log(`num-i=${num-i}`);
        console.log(`2*num-i=${2*num-i}`);*/
      } else {
        printHash += 'o';
        /*console.log('if');
        console.log(`j=${j}`);
        console.log(`num-i=${num-i}`);
        console.log(`2*num-i=${2*num-i}`);*/
      }
    }
    console.log(printHash);
  }
}

triangle(4);