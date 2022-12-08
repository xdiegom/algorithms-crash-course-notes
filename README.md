# Algorithms Crash Course - [Academind](https://www.youtube.com/watch?v=JgWm6sQwS_I)

⚠️ Disclaimer: the examples in this repository will be in JavaScript and are notes from the course.

## **What and Why are algorithms?**

Algorithms are a sequence of steps (instructions) to solve a *clearly* defined problem.

Every program is an algorithm or _every algorithm consists of many smaller algorithms_

### **What is the "Best possible solution"?**

There so many possible solutions and it depends on what you are trying to achieve:

1. Is it the algorithm that has the Minimum amount of code?
2. Is it the algorithm that has the Best performance? *
3. Is it the algorithm that has the Least memory usage?
4. Is it the algorithm that is a Personal preference?

##### \* Often this is the best possible solution that you are looking for on a certain problem.

<br>

#### Example of a possible problem in an interview

>You got a **list of items**, where every item has a **value and a weight**. You got a bag that holds a **maximum weight of X**.
>
> Write a programa that maximizes the value of the items you put into the bag whilst ensuring that you **don't exceed the maximum weight**.

```js
items = [
  {id: 'a', val:10, w:3},
  {id: 'a', val:6, w:8},
  {id: 'a', val:3, w:3}
]

maxWeight = 8;

bag = ['a', 'c'] // solution

/**
- Value: 13
- Weight: 6 (<8)
 */
```

## **Measuring Performance (Time complexity - Big O)**

Depending on the algorithms we can have different type of time complexities.

When it comes to measuring performance **we care about the trend/kind of function** for example:

- **Linear Time complexity**: the bigger the input the longer the execution time takes. Execution time grows **linearly** with "n".

Example: 
```js
function sumUp(n) {
  let result;
  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}
// If you put it in a web browser console and use the reserved variable called `performance.now()` to get the current timestamp you'll see that we have a trend of 10x the execution:

const start = performance.now();
sumUp(100000); // you can increase the input N
const end = performance.now();
end - start // result
```

- **Constant Time complexity**: the time it takes to execute a function is almost the same. It has **no effect** on the time the algorithm takes.

Example: 
```js
// The mathematical operation replaced in "sumUp()" function returns the same result as the for loop in the Linear time, but it improves the performance of the "sumUp()" function

function sumUp(n) {
  return (n / 2) * (1 + n);
}

// If you put it in a web browser console and use the reserved variable called `performance.now()` to get the current timestamp you'll see that we have a trend of 10x the execution:

const start = performance.now();
sumUp(100000); // you can increase the input N
const end = performance.now();
end - start // result
```
- **Logarithmic Time Complexity**: Execution time grows **logarithmically** with "n"

- **Quadratic Time Complexity**: Execution time grows **quadratically** with "n"

- **Exponential Time Complexity**: Execution time grows **exponentially** with "n"

In programming we use something that we called **Big O Notation**. A Big O notation looks like this for the given time complexities types:

- Linear Time => O(n)
- Constant Time => O(1)
- Logarithmic Time Complexity => O (log n)
- Quadratic Time => O(n^2)
- Exponential Time => O(2^n)

It is worth noting that it doesn't matter if you have extra lines of code on a function. In practice we care about the _general trend_, we focus on the fastest growing term and how many times did it take to execute certain function or algorithm.