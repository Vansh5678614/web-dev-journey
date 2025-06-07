// The Password Validator: You are building a password validation feature.
//  Create a function that checks if a given password meets the following criteria:
//  at least 8 characters long, contains both uppercase and lowercase letters, and 
// includes at least one digit.


// method 1 
function checkValidPassword (password){

    if (password.length <8){
        return false ;
    }
    let isDigit = false , isUpperCaseLetter = false , isLowerCaseLetter = false ;
    for (const ch of password) {  
        if ( ch >= 'A' && ch <= 'Z'){
            isUpperCaseLetter= true ;
        }
        
        else if (ch >= 'a' && ch <= 'z'){
            isLowerCaseLetter= true ;
        }
        
        else if(ch >='0' && ch <= '9'){
            isDigit= true ;
        
        }
    }

    return  isUpperCaseLetter && isLowerCaseLetter && isDigit ;

}

console.log(checkValidPassword("orjrfc7"));

// alternate using the ascii value 

// let ch = "z" ;
// console.log(ch.charCodeAt(0));

// for uppercase ascii  65 -90
// 97 -122
// 48 -57