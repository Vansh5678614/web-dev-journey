// The Double Trouble: You are tasked with writing a function that
// doubles each element in an array. However, there's a catch: if the array contains
//  consecutive duplicate elements, only double one of them.

const arr = [2, 2, 3, 5, 5, 5, 7, 8, 8, 10];

function double(arr) {
  let i = 0,
    j = 0;
  while (i < arr.length) {
    while (j < arr.length && arr[j] == arr[i]) {
      j++;
    }

    let  k = i+ Math.floor(Math.random()*( j-i)) 
    arr[k] *=2 ;
    // arr[i] *= 2; 
    // now let i wish to  double random  duplicate one 

    i = j;
  }
}
double(arr);
console.log(arr);
