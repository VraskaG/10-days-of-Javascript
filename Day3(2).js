/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
     try{
    let array = s.split(""); //split is a string specific method, but yeilds an array
        array.reverse(); //reverse is an array specific method
        s = array.join("");  //join is an array specific method
  }
  catch(e){
    console.log(e.message); 
  }
  finally{
    console.log(s);
  }
}
