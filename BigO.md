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