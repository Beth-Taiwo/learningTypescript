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
