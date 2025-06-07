// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string.
//  Consider both uppercase and lowercase vowels.

let str ="Vansh Hari"
function countVowels( str) {
    vowels =["A" , "E" , "I" , "O" , "U" , "a" , "e" , "i" , "o" , "u"];
    // can convert to upper or lower case 
    let cnt =0  ;
    for (const ch of str) {
        // way1 
        //convert to upper or lower case  then in  if condition check a ,e , i , o, u
        // way 2 ch >= a && ch <=z
        // way 3
        if(vowels.includes(ch) ){
            cnt++ ;
        }


    }
    return cnt ;
}

console.log(countVowels(str)); 