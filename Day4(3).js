/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
let Polygon = class{
    constructor(a){
        this.a = a;
    }
    perimeter(){
      return this.a.reduce(x);  
    }    
}
function x(total, num){
        return total + num;
    }