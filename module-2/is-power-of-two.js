export default function isPowerOfTwo() {
  /**
   Determine whether an input number is a power of two.

   The algorithm needs to do one thing:
    - Divide the number and future division result by two, until 1 is reached and check if
      the number is always 0.
  */

  // Solution given in tutorial is fine to me, but I think the refactored code
  // is better 😃
  function isPowerOfTwo(number) {
    if (number < 1) {
      return false;
    }

    let dividedNumber = number;
    let isPowerOfTwo = false;

    while (dividedNumber !== 1 && dividedNumber % 2 === 0) {
      dividedNumber = dividedNumber / 2;
      isPowerOfTwo = dividedNumber === 1;
    }

    return isPowerOfTwo;
  }

  function isPowerOfTwoBEST(number) {
    if (number < 1) {
      return false;
    }
    return (number & (number - 1)) === 0;
  }

  console.log(
    "%cIs power of two? - O(log n)",
    "color: green; font-style: italic; background-color: black; padding: 2px"
  );

  console.log(
    "%cIs 8 power of two?:",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPowerOfTwo(8)
  );
  console.log(
    "%cIs 5 power of two?:",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPowerOfTwo(5)
  );
  console.log(
    "%cIs 20 power of two?:",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPowerOfTwo(20)
  );
  console.log(
    "%cIs 16 power of two?:",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPowerOfTwo(16)
  );
  console.log(
    "%cIs 13 power of two?:",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPowerOfTwo(13)
  );

  console.log(
    "%cIs 8 power of two? 🤯 The bitwise magic (binary) => O(1)",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPowerOfTwoBEST(8)
  );
}
