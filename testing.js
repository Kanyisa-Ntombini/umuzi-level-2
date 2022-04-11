const longestWord = arrWords => {
  let longestNumber = Number.NEGATIVE_INFINITY;

  for (let word of arrWords) {
    longestNumber = word.length > longestNumber ? word.length : longestNumber;
  }
  return longestNumber;
}

console.log(longestWord(["Write","good","code", 'dfsdgdsfgds',"every","day"]));