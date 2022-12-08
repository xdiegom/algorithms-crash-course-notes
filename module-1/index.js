/**
 PROBLEM:

 Write an algorithm that takes an array of numbers as input and calculates the sum of those numebers.

 Define the Time Complexity of that algorithm and determine what the lowest possible Time Complexity is
 for this problem.
 */
console.info("**** PRACTICE ONE - CALCULATING TIME COMPLEXITY ****");
function sumNumbers(numbers) {
  let result = 0; // executed = 1
  for (const number of numbers) {
    // executed = 1
    result += number; // executed = 3 => n times
  }

  return result; // executed = 1

  // This is not the best solution because it calls another function "reduce" that has
  // antoher time complexity. Reduce is a built-in function of JS's arrays, thus it does
  // some other logic.
  return numbers.reduce((accumulator, number) => (accumulator += number), 0);
}

console.log(
  "%cResult: %d",
  "color: yellow; font-style: italic; background-color: black; padding: 2px",
  sumNumbers([1, 3, 10])
);

/**
  EXPLANATION: 

  In this example the for loop is the best scenario and we can break it down to 
  the time complexity of O(n) like this:
  
  Getting the variable "executed" for each line of the code:

  T = 1 + 1 + n + 1
  T = 3 + 1n
  -- 3 is a constant, thus we can ignore it because what we care about is the "n"
  
  T = 1*n
  -- And now we would remove the coefficient 1
  
  T = n => The time complexity is O(n) "Linear Time Complexity"
 */
