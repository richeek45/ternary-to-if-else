// Create a if-else loop from the ternary operator
// 


// Example expression: (a, b, c, d, e, f, g) are the expressions
// 1. const val = a ? b ? c ? d : e : f : g
// 2. const val = a ? b : c ? d : e ? f : g
// firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted"


// if (firstCheck) {
// 	"Access denied"
// } else {
// 	if (secondCheck) {
// 		"Access denied"
// 	} else {
// 		"Access granted"
// 	}
// }

// Step 1. Enter a string as an input
// Step 2. Parse the string. Split by ? and : expressions
// statement = true ? then do this : do something else ? this works : this dont work
class Stack {
  constructor() {
      this.items = [];
  }
  
  push(item) {
      this.items.push(item);
  }
  
  pop() {
      if (this.items.length === 0) {
          return "Underflow";
      }
      return this.items.pop();
  }
  
  peek() {
      return this.items[this.items.length - 1];
  }
  
  isEmpty() {
      return this.items.length === 0;
  }
  
  printStack() {
      let str = "";
      for(let i = 0; i < this.items.length; i++) {
          str += this.items[i] + " ";
      }
      return str;
  }
  
}


const handleConvert = (string) => {
    const outputDiv = document.querySelector(".output");
    const pattern = /([?:])/;
    const parsedStatements = string.split(pattern);
    outputDiv.textContent = string;
    console.log(parsedStatements)
    
    let index = 0;
    let length = parsedStatements.length;
    let trueStatement = "";
    let ifStatement = "";
    let finalString = "";
    const stack = new Stack();
    stack.push(parsedStatements[index++]);
    while(!stack.isEmpty() && index <= length) {
        console.log("not empty", index)
        if (parsedStatements[index] !== ":") {
            stack.push(parsedStatements[index++]);
        } else {
            trueStatement = stack.pop();
            if (stack.pop() === "?") {
                ifStatement = stack.pop();
            }
            stack.push(parsedStatements[index++]);
            finalString += `if (${ifStatement}) {
                \n ${trueStatement} } else {\n ${parsedStatements[index]}}`
        } 
    }
    
    outputDiv.textContent = finalString ?? string;
    console.log(finalString, stack);
}