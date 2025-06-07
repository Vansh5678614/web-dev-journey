// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it
//  encounters a negative number. Write a function that performs this summation.

function sum(arr) {
    let sum =0 ;

    for  ( const  val  of arr){
        if(val <0){
            break ;
        }

        sum += val ;
    }

    return sum ;
}

const arr=[1,2,3,-1 ,5,6]
console.log(sum(arr));