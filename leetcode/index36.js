// 2154. Keep Multiplying Found Values by Two

// Example 1:

// Input: nums = [5,3,6,1,12], original = 3
// Output: 24
// Explanation: 
// - 3 is found in nums. 3 is multiplied by 2 to obtain 6.
// - 6 is found in nums. 6 is multiplied by 2 to obtain 12.
// - 12 is found in nums. 12 is multiplied by 2 to obtain 24.
// - 24 is not found in nums. Thus, 24 is returned.

function findFinalValue(nums,original){
   while(nums.includes(original)){
    original = original * 2
   }
   return original
}
var nums = [2,7,9]
var original = 4
console.log(findFinalValue(nums,original))