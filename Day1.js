/*
***** Binary Search *****
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

const search = function(nums, target) {
   
};


/*
Solution

JavaScript Solution:

var search = function(nums, target) {
let first = 0
let last = nums.length - 1

while(first <= last){
    let mid = Math.floor(((first + last) / 2))
    if(nums[mid] < target){
        first = mid + 1
    }else if(nums[mid] > target){
        last = mid - 1
    } else{
        return mid
    }
}
return - 1
};


___________
How I started this question no understand it is a binary search tree
const search = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(target === nums[i]){
            return i
        } else {
            return -1
        }
    }
};
*/