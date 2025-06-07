// The Mirror Mirror: Imagine you have a string, and you need to create a new string
//  that is a mirror image of the original. Write a function that appends
//  the reversed version of the original string
//  to itself.

str = "Vansh" ;
function mirrorMirror (str){
    let ans = str ;
    for(let i = str.length -1 ; i>= 0  ;i--){
        ans += str[i] ;
    }
    return ans ;
}
console.log(mirrorMirror(str)) ;