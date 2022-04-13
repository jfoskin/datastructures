# Big O Notation 

Big O is about generalizing, talking about and comparing code and performance to other pieces of code (the best way to approach/best solution)

It is important to understand how your code performs compared to others. Always consider the trade off.

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

function addNums(n){
    let total = 0
    for(let i =1; i> n; i++){
        total += i;
    }
    return total
}

__________________________________
function addNums(n) {
    return n * (n+1)/2
}

Big O Notation is a fuzzy way of counting the operations that are occurring as the function is running 
based on your number of operation the time complexity of that operation grows as well
 O(n)   <------- this function describes that based on the number n the time complexity of that function will be the same  which is the output of O(n)