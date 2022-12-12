export default function factorial() {
  /**
   Calculate the factorial of a number. 

   fact(5) = 5 x 4 x 3 x 2 x 1 = 120

   I math, the representation of this operation is 5!

   The algorithm needs to do one thing:
    - Go through all smaller numbers of the given number and multiply them with each other (and with the input number)
  */

  function factorial(number) {
    let factorial = number;
    for (let i = 1; i < number; i++) {
      factorial = factorial * (number - i)
    }

    return factorial;
  }

  console.log(
    "%c - Factorial N! - O(n)",
    "color: green; font-style: italic; background-color: black; padding: 2px"
  );

  console.log(
    "%cThe factorial of 5 is:",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    factorial(5)
  );

  console.log(
    "%cThe factorial of 8 is:",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    factorial(8)
  );
  console.log(
    "%cThe factorial of 10 is:",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    factorial(10)
  );
}
