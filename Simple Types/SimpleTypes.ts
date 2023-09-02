//Explicit type
let firstName: string = "Dylan";

//Implicit type
let firstName2 = "Dylan";

let firstName3: string = "Dylan"; // type string
//firstName3 = 33; // attempts to re-assign the value to a different type

let firstName4 = "Dylan"; // inferred to type string
//firstName4 = 33; // attempts to re-assign the value to a different type

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);