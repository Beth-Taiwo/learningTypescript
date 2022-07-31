"use strict";
// Language: typescript
// Path: main.ts
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.firstName} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.lastName} says hello`);
};
logDetails(123, "car");
greet({ firstName: "Max", lastName: "Smith" });
greetAgain({ firstName: "Jane", lastName: "Doe" });
// function signature
let calc;
calc = (numOne, numTwo, operator) => {
    if (operator === "+") {
        console.log(numOne + numTwo);
        return numOne + numTwo;
    }
    else {
        console.log(numOne - numTwo);
        return numOne - numTwo;
    }
};
calc(2, 3, "-");
let printDetails;
printDetails = (ninja) => {
    console.log(`${ninja.name} is not up to ${ninja.age} years old`);
};
printDetails({ name: "Beth", age: 30 });
