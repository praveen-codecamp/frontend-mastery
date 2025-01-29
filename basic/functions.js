const selection = (xyz) => {
  console.log("hello ", xyz);
};

selection("raju");
selection("ramu");

let count = 0;

const increment = (value) => {
  count = value + 2;
  console.log(count);
};
const decrement = (value) => {
  count = value - 1;
  console.log(count);
};
increment(count);
increment(count);
decrement(count);
increment(count);

decrement(count);
decrement(count);
decrement(count);
