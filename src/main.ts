// Language: typescript
// Path: main.ts

// type aliases
type StringOrNum = string | number;
type User = { firstName: string; lastName: string };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: User) => {
  console.log(`${user.firstName} says hello`);
};

const greetAgain = (user: User) => {
  console.log(`${user.lastName} says hello`);
};

logDetails(123, "car");
greet({ firstName: "Max", lastName: "Smith" });
greetAgain({ firstName: "Jane", lastName: "Doe" });

// function signature
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, operator: string) => {
  if (operator === "+") {
    console.log(numOne + numTwo);
    return numOne + numTwo;
  } else {
    console.log(numOne - numTwo);
    return numOne - numTwo;
  }
};
calc(2, 3, "-");

let printDetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };

printDetails = (ninja: person) => {
  console.log(`${ninja.name} is not up to ${ninja.age} years old`);
};

printDetails({ name: "Beth", age: 30 });
