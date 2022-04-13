# Big O Notation 

Big O is about generalizing, talking about and comparing code and performance to other pieces of code (the best way to approach/best solution)

It is important to understand how your code performs compared to others. Always consider the trade off.

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.


the time complexity of the function below is O(n)

function addNums(n){
    let total = 0
    for(let i =1; i> n; i++){
        total += i;
    }
    return total
}

__________________________________

the time complexity of the function below is O(1)


function addNums(n) {
    return n * (n+1)/2                 
}

_____________________________________

the time complexity of the function below is O(n^2)

 function printAllPairs(n){
     for(let i=0; i< n; i++){
         for(let j=0; j < n; j++){
             console.log(i,j)
         }
     }
 }

____________________________________

the time complexity of the function below is 

function logAtLeast5(n) {
    for(let i = 1; i <= Math.max(5,n); i++){
        console.log(i)
    }
}




_____________________________________



Big O Notation is a fuzzy way of counting the operations that are occurring as the function is running 
based on your number of operation the time complexity of that operation grows as well
 O(n)   <------- this function describes that based on the number n the time complexity of that function will be the same  which is the output of O(n) (output grew relative to n )
                 so if the number that is put into the function is small the time it takes to run the function will be a small number as well but the larger the number you put into  the function the larger the time it takes to run the function (as in grows the run time grows)


 O(1) <--------- this function is a constant meaning the number of operation that are taking place in the function doesn't have a significant impact on the time complexity or out put of 
                O(1) --- so no matter how big my input of n into a function that has a time complexity of O(1) the time it takes for that function to run is roughly the same (the time ) 


 O(n^2) <-------- this function is quadratic meaning the number n that is being put into this function is being multiples by n (n*n) (this is typically the case for nested loops) so O(n)
                  being nested inside of another O(n) function is O(n^2) it takes. so the number of the output you get is n^2. because in the example above if I input 3 as the n the number of possible outputs i will have is 9 not 6 so it gets squared not doubled which affects the time it takes to run the function because the time complexity is being squared.

Big O shorthand 

1. Arithmetic operations are constant 
2. Variable assignment is also constant 
3. Accessing elements in an array (by its index) or object (by its key) is constant 
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop  

