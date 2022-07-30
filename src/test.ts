console.log("testing 1 2 3!!!");

let greet: Function;

greet = () => {
  console.log("Hi there!");
};

const add = (a: number, b: number, c: number | string = "Well") => {
  console.log(a + b);
  console.log(c);
};
add(2, 3);
