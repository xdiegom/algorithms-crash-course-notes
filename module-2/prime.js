export default function prime() {
  console.log(
    "%c - Prime Algorithm O(n)",
    "color: green; font-style: italic; background-color: black; padding: 2px"
  );

  // I added more time complexity if you want to know if the smaller numbers
  // divided by the given number are the same number and one 😅
  
  // Although: This function will always iterate all over the smallest numbers of the given number
  // compare to the "isPrimeSolution" 🥲
  function isPrime(number) {
    const arr = [];
    let smallerNumber = number;
    for (let i = 1; i <= number; i++) {
      if (number % smallerNumber === 0) {
        arr.push(smallerNumber);
      }
      smallerNumber = number - i;
    }

    return arr.includes(number) && arr.includes(1) && arr.length == 2;
  }

  function isPrimeSolution(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  console.log(
    "%cPrime practice result (Is 11 Prime?):",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPrime(11)
  );
  
  console.log(
    "%cPrime practice result (Is 12 Prime?):",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPrime(12)
  );

  console.log(
    "%cPrime solution result (Is 11 Prime?):",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPrimeSolution(11)
  );
  
  console.log(
    "%cPrime solution result (Is 12 Prime?):",
    "color: yellow; font-style: italic; background-color: black; padding: 2px",
    isPrimeSolution(12)
  );
}
