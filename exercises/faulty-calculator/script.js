// console.log(7) ; 
alert("mobile phone will blast");
let num1 =Number(prompt("Enter first number:")) ;
let num2 =Number( prompt("Enter second number:")) ;
console.log(num1 , num2);

let opr = prompt("Enter the operation") ;
console.log(opr) ;
let is_faulty = Math.random() <= 0.1;
console.log(is_faulty);
let res ;
switch (opr) {
    case "+":
        res= is_faulty? num1- num2 : num1+ num2 ;
        console.log(res);
        break;
    case "-":
        res= is_faulty? num1/num2 : num1 -num2 ;
        console.log(res);
        break;
    case "*":
        res= is_faulty? num1+num2 : num1*num2 ;
        console.log(res);
        break;

    case "/":
        res= is_faulty? num1**num2 : num1/ num2;
        console.log(res); 
        break;

    default:
        console.log("invalid operation");
        break;
        
}
