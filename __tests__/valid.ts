// These should NOT trigger the prefer-arrow-function rule

const foo = () => {};

const bar = (a: number, b: number) => {
  return a + b;
};

export const baz = () => {
  console.log("hello");
};

const fetchData = async () => {
  return await fetch("/api");
};

// Generator functions should be excluded
function* gen() {
  yield 1;
}

export function* genExport() {
  yield 2;
}
