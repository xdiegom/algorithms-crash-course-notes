export default function practice() {
  console.log(
    "%c - Practice time Module 2",
    "color: green; font-style: italic; background-color: black; padding: 2px"
  );

  /**
  * 1st algorithm:  
    Take an array of numbers as input and return the minimum value in the
    array. E.g: The smallest number.
  
  * 2nd algorithm:
    Should take a number as input and return "true" if it's an even number, 
    "false" for odd number.

  For the two algorithms, calculate the time complexity and possible cases
  for both algorithms.
 
  */

  function minimumValue(numbers) {
    let number = numbers[0]; // 1
    for (let i = 0; i < numbers.length; i++) {
      // 1
      if (numbers[i] < number) {
        // n
        number = numbers[i];
      }
    }

    return number; // 1
  }

  function minNumSolution(numbers) {
    let currentMin = numbers[0];
    for (const num of numbers) {
      // 1
      if (num < currentMin) {
        // n
        currentMin = num; // 0 times (Best), n times (Worst), n times (Avg.)
      }
    }

    return currentMin;
  }
  /* CASES 
   "Best case: [1, 2, 3] => O(n)"
   "Avg. case: [3, 2, 1] => O(n)"
   "Worst case: [2, 1, 3] => O(n)"
   */
  console.log(
    "%c   - Minimum number in array:",
    "color: cyan; font-style: italic; background-color: black; padding: 2px"
  );

  const numbers = [66, 915, 25, 213, 715, 39, 131];
  console.log(
    "%cArray of numbers: ",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    numbers
  );

  console.log(
    "%cSmallest number practice: ",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    minimumValue(numbers)
  );

  console.log(
    `%cCases:
    \nBest case: [1, 2, 3] => O(n)
    \nAvg. case: [3, 2, 1] => O(n)
    \nWorst case: [2, 1, 3] => O(n)`,
    "color: yellow; font-style: italic; background-color: black; padding: 2px"
  );

  console.log(
    "%cSmallest number solution: ",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    minNumSolution(numbers)
  );

  console.log(
    "%cTime complexity: O(n)",
    "color: yellow; font-style: italic; background-color: black; padding: 2px"
  );

  function isEvenOrOdd(number) {
    return number % 2 === 0; // 1
  }

  function isEvenSolution(number) {
    return number % 2 === 0; // 1
  }

  // T = 1
  let number = 11;
  console.log(
    `%c   - Is ${number} even or odd number?:`,
    "color: cyan; font-style: italic; background-color: black; padding: 2px"
  );

  console.log(
    isEvenOrOdd(number) ? "  %ceven" : "   %codd",
    "color: yellow; font-style: italic; background-color: black; padding: 2px"
  );

  console.log(
    `%c   - [Solution] Is ${number} even or odd number?:`,
    "color: cyan; font-style: italic; background-color: black; padding: 2px"
  );
  console.log(
    `%c ${isEvenSolution(number)}`,
    "color: yellow; font-style: italic; background-color: black; padding: 2px"
  );

  console.log(
    `%cCases:
    \nOne Case => O(1)`,
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
  );

  console.log(
    "%cTime complexity: O(1)",
    "color: yellow; font-style: italic; background-color: black; padding: 2px"
  );
}
