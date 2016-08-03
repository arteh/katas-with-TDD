function findMissing (arr) {
//look at each item in the  array
// look at the one after it
//is there a d difference of 1?
// if so, good
// if the difference is not one
  //return the missing number ( prev number + 1)
  
  var result = 0;
  
  for (var i = 0; i < arr.length - 1; i ++) {
    //console.log(i);
    
    if(i === 0 && arr[0] !== 1) {   //we are first testing if we are on the first iteration && if we are on index zero
      return 1;
    }
    var firstItem = arr[i];
    var secondItem = arr[i + 1];

    if (secondItem - firstItem !== 1) {
      result = firstItem + 1;
    }
    }
    return result;
  }
  
  
  

  //this function takes an array as an parameter

  //it needs to loop through all the numbers

  //for (var i = 0; i < arr.length; i ++) {
  //console.log(i);

  //   if (arr[i ] - arr[i - 1] !== 1) {    //checking the difference between an element and the number before it,
  //     var x = arr[i] - arr[i - 1];  //if the difference is bigger than 1
  //     var y = 1;
  //     while (y<x) //while the difference is bigger than 1, them missing number is pushed to the new awway
  //     {
  //     answer.push((arr[i-1]+y));
  //       y++;
  //     }
  //   }
  //
  // }
  //
  //  console.log(answer);



module.exports = findMissing;







