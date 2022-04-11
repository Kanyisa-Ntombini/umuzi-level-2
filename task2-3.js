const getLongestWordLength = arrWords => {
  let longestNumber = Number.NEGATIVE_INFINITY;

  for (let word of arrWords) {
    longestNumber = word.length > longestNumber ? word.length : longestNumber;
  }
  return longestNumber;
}

const columns = (arr, longestWordFunc) => {
  const longestWordLength = longestWordFunc(arr);

  for (let i=0; i<longestWordLength; i++) {
    let printWord = '';
    for (let word of arr) {
      printWord = word[i] ? printWord + word[i] + ' ': printWord + '  ';
    }
    console.log(printWord);
  }
}

columns(["Write","good","code","every","day"], getLongestWordLength);