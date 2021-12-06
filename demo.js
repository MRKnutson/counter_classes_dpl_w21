const foo = () => {
  return () => {
    return () => {
      return "hello";
    };
  };
};

let bar = foo();
let szhamm = bar();
console.log("szhamm", szhamm);
console.log("szhamm()", szhamm());

// what is this going to log?
console.log("bar:", bar);

// what is this going to log?
console.log("bar():", bar());

const x = () => {
  return "X";
};

const y = (z) => {
  return z();
};

const b = (c) => {
  return c;
};

let aTest = y(x);
let bTest = b(x()); // "X"
let cTest = b(x); //
// let dTest = y(x()); // ERROR
console.log(aTest); // "X"
console.log(bTest); // "X"
console.log(cTest); // function :x
