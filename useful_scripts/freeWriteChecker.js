let testString = `
Look at me, I have some notes
#N I really need to buy milk today. Catherine like dairy in her coffee
Should I be eating poptarts? No, I really should stop doing that.

#N This is another notes

Man I do love poptarts though

#N Third Note!
`;
wordCount = string => {
  let stringArr = string.split(" ");
  let counter = 0;
  stringArr.forEach(element => {
    if (element.length > 0) {
      counter++;
    }
  });
  let newLineCount = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === "\n") newLineCount++;
  }
  counter += newLineCount;
  console.log(counter);
  return counter;
};

noteChecker = string => {
  notes = [];
  stringArrNL = string.split("\n");
  stringArrNL.forEach(element => {
    if (element[0] === "#" && element[1] === "N") {
      notes.push(element.slice(2));
    }
  });
  console.log(notes);
  return notes;
};

function main(string) {
  if (string) {
    let resultObject = {};
    readableStream = string;
    wordCount = wordCount(readableStream);
    notes = noteChecker(readableStream);
    let newLineCount = 0;
    for (let index = 0; index < readableStream.length; index++) {
      if (readableStream[index] === "\n") newLineCount++;
    }
    resultObject.wordCount = wordCount + newLineCount;
    resultObject.notesArray = notes;
    console.log(resultObject);
  } else {
    console.log(err);
  }
}

wordCount(testString);
noteChecker(testString);
