## **Module 2**

### **Math algorithms**

#### **Fibonacci Algorithm**

"_Is a sequence of infinite numbers where every other element is the sum of its two precending elements._"

#### **💭 Problem**

Return the N+th element of the Fibonacci Sequence. E.g:

- fib(4) yields 5

The algorithm needs to do **two things**:

1. Calculate the sequence up to the element we're looking for.
2. Return that element.

You can see the code for fibonacci [here](https://github.com/xdiegom/algorithms-crash-course-notes/blob/main/module-2/fibonacci.js)

See the console of your web browser to see the result.

#### **Prime Algorithm**

"_Is a sequence of infinite numbers where every other element is the sum of its two precending elements._"

#### **💭 Problem**

Determine whether an input number is a prime number

- isPrime(9) // false
- isPrime(5) // true

A prime number is a number that can only be divided by 1 and by itself.

The algorithm needs to do **one thing**:

1. Try dividing the number by all smaller numbers and return true if it's only divisible by itself and 1

You can see the code for prime [here](https://github.com/xdiegom/algorithms-crash-course-notes/blob/main/module-2/prime.js)

See the console of your web browser to see the result.


#### **Determine the Nature of an Algorithm**

We have seen to Big O notation by far, and these are:
- O(n): Higher n leads to a linear increase in runtime. 
- O(1): Higher n does not affect runtime.

#### **How to quickly identify the time complexity of an algorithm?**

There are two simple rules to identify the complexity of an algorithm:

1. > Typically when you have a single loop (no nested loops), it is often that the complexity will be O(n) [Linear time complexity]

2. > If there are no loops and no nested function calls, it is often that is a O(1) complexity [Constant time complexity]

#### **The bitwise magic 🤯**

The bitwise operator using the operator '&' takes two equal-length binary representations and performs the logical AND operation on each pair of the corresponding bits. 

For example: 
If we have the binary representation for the integers 12 (1100) and 5 (0101), the bitwise operator is going to 

```yml
1100
0101
-----
0101 // yields
```

See the the example function that performs an O(1) for the "is power of two? algorithm"

⚠️ It is not a very common interview question but this is a really nice approach to find the best performance to solve this problem.