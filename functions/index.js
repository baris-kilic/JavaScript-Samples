//classic fizzBuzz algorithm
function fizzBuzz(input) {
    if (typeof(input) != 'number') 
        return 'Not a number';   
    else if (input % 3 === 0 && input % 5 === 0) 
        return 'FizzBuzz';         
    else if (input % 3 === 0) 
        return 'Fizz';                
    else if (input % 5 === 0) 
        return 'Buzz';        
    return input;                           
}

//printing ordered numbers as even or odd up to limit
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++){
        if (i % 2 === 0)
            console.log(i,'EVEN');
        else
            console.log(i,'ODD');
    }
}

//count truthy number that in array
function countTruthy(array){
    let count = 0;
    for (let value of array){    
        if (value) count++;             
    }
    return count;
}

//show properties of a object that contains string type of members
function showProperties(obj){
    for (let key in obj){
        if (typeof(obj[key]) == 'string')
            console.log(key,obj[key]);
    }
}

//sum of multiples of 3 and 5 up to limit
function sum(limit){
    let sum = 0;
    for (let i = 0; i <= limit; i++){
        if (i % 3 === 0 || i % 5 === 0) 
            sum += i;         
    }
    return sum;
}

//calculating average grade of marks array and scales for grading
function calculateGrade(marks) {
    let sum = 0;
    for (let grades of marks){
        sum += grades;
    }
    let average = sum/marks.length;
    console.log(average);
    if (average < 60) return 'F';       
    if (average < 70) return 'D';        
    if (average < 80) return 'C';        
    if (average < 90) return 'B';        
    return 'A';       
}

//classic star algorithm                      //for 3 rows print will be
function showStars(rows){                       //*  
    let string = '';                            //**
    for (let i = 0; i < rows; i++){             //*** 
        string += '*'
        console.log(string);
    }
}

//function for calculating primes of given value
function showPrimes(lim){
    for (let i = 2; i <= lim; i++){    //starting at 2 because 0 and 1 are not prime numbers
        let count = 0;
        for (let j = 1; j <= i; j++){
            if (i % j === 0)
                count++;
        }
        if (count === 2)
            console.log(i);
    }
}