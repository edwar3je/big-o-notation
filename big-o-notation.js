// Part 1: Simplify the following big O expressions as much as possible
// Q1: O(n + 10)
// A1: O(n)
// Q2: O(100 * n)
// A2: O(n)
// Q3: O(25)
// A3: O(1)
// Q4: O(n^2 + n^3)
// A4: O(n^3)
// Q5: O(n + n + n + n)
// A5: O(n)
// Q6: O(1000 * log(n) + n)
// A6: O(n)
// Q7: O(1000 * n * log(n) + n)
// A7: O(n log(n))
// Q8: O(2^n + n^2)
// A8: O(2^n)
// Q9: O(5 + 3 + 1)
// A9: O(1)
// Q10: O(n + n^(1/2) + n^2 + n * log(n)^10)
// A10: O(n^2)

//Part 2: Determine the time complexities of the following functions.
// Q1:
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
// A1: O(n) because the complexity depends on the length of n
// Q2: 
function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
// A2: O(1)
// Q3:
function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }
// A3: O(n)
// Q4:
function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
// A4: O(n)
// Q5:
function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
// A5: O(n^2)
// Q6: 
function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }
// A6: O(n)

// Part 3: Answer the following questions
// Q1: True or false: n^2 + n is O(n^2)
// A1: True, because + n has a negligent effect on time compared to squaring n
// Q2: True or false: n^2 * n is O(n^3)
// A2: True, because multiplying n by itself increases the power by one, and has a considerable effect on time
// Q3: True or false: n^2 + n is O(n)
// A3: False, because n^2 has a larger effect on time (should be O(n^2))
// Q4: What's the time complexity of the .indexOf array method?
// A4: O(n), because .indexOf must scan through the entire array to look for the value (the longer the array, the longer the time)
// Q5: What's the time complexity of the .includes array method?
// A5: O(n), because .includes is always on a string or array with a fixed length.
// Q6: What's the time complexity of the .forEach array method?
// A6: O(n) because the method executes a specific function on each value in the array, thus the length of the array affects how many operations will occur
// Q7: What's the time complexity of the .sort array method?
// A7: O(n log n)
// Q8: What's the time complexity of the .unshift array method?
// A8: O(n)
// Q9: What's the time complexity of the .push array method?
// A9: O(1)
// Q10: What's the time complexity of the .splice array method?
// A10: O(n)
// Q11: What's the time complexity of the .pop array method?
// A11: O(n)
// Q12: What's the time complexity of the Object.keys() function?
// A12: O(n) because the function goes through an object to print out all the keys (the longer the length, the more time it requires)