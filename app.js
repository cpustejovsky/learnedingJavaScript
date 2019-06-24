//working on leetcode example

const isValid = string => {
   let stack = [];
   let mapping = {
      ")": "(",
      "]": "[",
      "}": "{"
   };
   for (const char in string) {
      if (mapping.hasOwnProperty(char)) {
         if (stack.length) {
            topElement = stack.pop();
         } else {
            topElement = "#";
         }
      }
   }
};
