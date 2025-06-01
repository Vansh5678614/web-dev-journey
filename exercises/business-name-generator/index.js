/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

adjectives = ["Crazy" ,"Amazing" , "Fire" ] ;
shopName=["Engine" , "Foods" , "Garments"];
anotherWord=["Bros" , "Limited" , "Hub"];

// console.log(adjectives);
// console.log(shopName);
// console.log(anotherWord);

function randomWordPicker( list){

    return list[Math.floor(Math.random()*3)] ;
}

let business_name = randomWordPicker(adjectives) +" "+ randomWordPicker(shopName)+ " "+randomWordPicker(anotherWord) ;
console.log(business_name) ;