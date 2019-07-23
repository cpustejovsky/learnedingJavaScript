wordCount = string => {
  let stringArr = string.split(" ");
  let counter = 0;
  stringArr.forEach(element => {
    if (element.length > 0) {
      counter++;
    }
  });
  return counter;
};

noteChecker = string => {
  notes = [];
  stringArrNL = string.split("\n");
  stringArrNL.forEach(element => {
    if (element[0] === "#" && element[1] === "N") {
      notes.push(element);
    }
  });
  return notes;
};

let testString = `
  what to do? What shall I do? I'm not sure what to do!\n
  #N Start meditating\n
  I do need to get into meditating and clear my mind, but I just feel like it's so challening to do.\n
  #N email Fr. Barnabas about prayer rule.\n
  `;
// console.log(wordCount(testString));
console.log(noteChecker(testString));
