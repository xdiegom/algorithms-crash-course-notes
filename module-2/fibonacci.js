console.log(
  "%c - Fibonacci Algorithm O(n)",
  "color: green; font-style: italic; background-color: black; padding: 2px"
);

// I think that it is the least performance because it asks for 
// an start element and this one initialize the array of elements
function fib(startElement, nthElement) {
  let nextElement = 0; // 1
  let previousElement = startElement; // 1
  let elements = [startElement]; // 1
  let index = 0; // 1

  do { // 1
    nextElement += previousElement; // n -1
    elements.push(nextElement); // n -1
    previousElement = elements[elements.length - 2]; // n -1

    index++; // n - 1
  } while (index < nthElement); // 1

  console.log(
    "%cArray of elements in fibonacci: ",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    elements
  );

  return elements[nthElement];
}
// T = 1 + 1 + 1 + 1 + 1 + 4(n - 1) + 1
// T = 6 + 4n - 4
// T = 2 + 4n
// T = 4n
// T = n
// O(n) => Linear Time Complexity

function fibSolution(n) {
  const numbers = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }

  return numbers[n];
}

setTimeout(() => {
  console.log(
    "%cFibonacci practice result: %d",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    fib(1, 4)
  );

  console.log(
    "%cFibonacci course result: %d",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    fibSolution(4)
  );
}, 100);
