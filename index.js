function hasTargetSum(array, target) {
  // Write your algorithm here
  function hasTargetSum(array, target) {
    // Iterate through each element in the array
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          return true; // If found, return true
        }
      }
    }
  
    // If no pair is found, return false
    return false;
  }
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n^2) - Nested loops iterate through each pair of elements in the array.
  Space complexity: O(1) - Constant space used, no additional data structures created.
*/

/* 
  Add your pseudocode here
  Pseudocode:

  1. Iterate through each element in the array using a loop.
  2. For each element, iterate through the rest of the array using another loop.
  3. Check if the current pair of elements adds up to the target.
  4. If yes, return true.
  5. If no pair is found, return false.
*/

/*
  Add written explanation of your solution here
  This solution uses a brute-force approach by checking all possible pairs in the array. 
  The nested loops iterate through each pair of elements, checking if their sum equals the target.
  If a pair is found, the function returns true; otherwise, it returns false.
  While this solution is straightforward, it has a time complexity of O(n^2), which means it may not be efficient for large arrays.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("=>", hasTargetSum([1, 2, 3, 4, 5, 6], 7))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  
  // In this case, 3 and 4 add up to 7

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10, 20, 30, 40], 100));
  // No pair adds up to 100

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5));
  // Empty array, no pairs possible

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 0, 1, 2, -1, -4], 0));
}

module.exports = hasTargetSum;
