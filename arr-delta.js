// let arr = [2,3,4,5,67,7];
// let delta = 10;
let arrOfDelta = [];

const increaseEvenEl = (arr,delta) => {
  if(!Array.isArray(arr)){
    return null;
  }
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 === 0){
      arr[i] += delta;
      arrOfDelta.push(arr[i]);
    }
  }
  return arrOfDelta;
}

// console.log(increaseEvenEl(arr,delta));



// function ar(arr){
//   if(Array.isArray(arr)){
//     console.log(arr.reverse());
//   }else return null;
// }

// console.log(ar(0));

// function cloneArr(arr){
//   let newArr = [];
//   if(Array.isArray(arr)){
//       newArr = arr;
//   }else return null;

//   return newArr;
// }



// function checker(arr){
//   let sum = Math.max(...arr) + Math.min(...arr);

//   if(!Array.isArray(arr)){
//       return null;
//   }
//     if(sum > 1000){ 
//       return true;
//       }
//     else return false;
// }

// console.log(checker(arr));


// function checkSum(arr){
//   if(!Array.isArray(arr)){
//           return null;
//       }
//   let sumOfElements = 0;

// }