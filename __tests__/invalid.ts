// These should trigger the prefer-arrow-function rule

function foo() {}

function bar(a: number, b: number) {
  return a + b;
}

export function baz() {
  console.log("hello");
}

export default function qux() {
  return 42;
}

async function fetchData() {
  return await fetch("/api");
}
