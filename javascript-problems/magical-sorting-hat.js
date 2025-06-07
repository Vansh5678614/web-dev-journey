// The Magical Sorting Hat: Imagine you are creating a magical sorting hat 
// for a wizard school. Implement a JavaScript function that takes an array of
//  student names and assigns them to one of the four 
// houses (Gryffindor (length less than 6), Hufflepuff(length less than 8),
//  Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12))
//  based on the length of their names
const students = [
  "Ashwin",       // 6 letters
  "Priyanka",     // 8 letters
  "Vanshita",     // 8 letters
  "Chandresh",    // 9 letters
  "Aishwarya",    // 9 letters
  "Raghunathan",  // 11 letters
  "Jagannathan",  // 11 letters
  "Karthikeyan",  // 11 letters
  "Muralikrishn", // 13 letters
  "Thirumalai"    // 10 letters
];
let soln = {};
function assignHouses( students  ) {
    for (const name of students) {
        let  nameLength = name.length;
        if (nameLength <6){
            soln[name]= "Gryffindor";
        }
        else if (nameLength <8){
            soln[name]= "Hufflepuff";
        }
        else if (nameLength <12){
            soln[name]="Ravenclaw";
        }
        else{
            soln[name]= "Slytherin";
        }
        
    }
}

assignHouses(students);
console.log(soln) ;