function checkEquals(arr1, arr2) {
   if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
     return true;
   } else {
     return false;
   }
 }
 
 
 console.log(checkEquals([1, 2], [1, 2]));
 console.log(checkEquals([1, 2], [1, 3]));
 