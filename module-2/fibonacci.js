console.log(
  "%c - Fibonacci Algorithm",
  "color: green; font-style: italic; background-color: black; padding: 2px"
);

// I think that it is the least performance because it asks for 
// an start element and this one initialize the array of elements
function fib(startElement, nthElement) {
  let nextElement = 0;
  let previousElement = startElement;
  let elements = [startElement];
  let index = 0;

  do {
    nextElement += previousElement;
    elements.push(nextElement);
    previousElement = elements[elements.length - 2];

    index++;
  } while (index < nthElement);

  console.log(
    "%cArray of elements in fibonacci: ",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    elements
  );

  return elements[nthElement];
}

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
