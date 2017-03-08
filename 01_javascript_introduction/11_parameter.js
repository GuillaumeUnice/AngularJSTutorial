// in this case x is a closure
function inc ()
{
  console.log('before inc', x);
  x = 5;
  console.log('after inc', x);
}

x = 4;
console.log(x);
inc(x); 
console.log(x);

// here x is a parameter AND a primitive
// so it's passed by value
/*
function inc (x)
{
  console.log('before inc', x);
  x = 5;
  console.log('after inc', x);
}

x = 4;
console.log(x);
inc(x); 
console.log(x);
*/

// here x is a parameter BUT NOT a primitive
// so it's passed by reference not value
/*
function inc(obj) {
  console.log('before inc', obj.x);
  obj.x = 5;
  console.log('after inc', obj.x);
}

var obj = {
 x: 4
}

console.log(obj.x);
inc(obj); 
console.log(obj.x);
*/

// here is same thing BUT
// the function is execute in obj context
// so see the next example to see what kind or issue can appear
/*
var obj = {
  x: 4,
  inc: function () {
    console.log('before inc', this.x);
    this.x++;
    console.log('before inc', this.x);
  }
}

console.log(obj.x);
obj.inc(); 
console.log(obj.x);
*/

/*
// Here the function is not executed in obj context
// so this.x is undefined 
var obj = {
  x: 4,
  inc: function () {
    console.log('before inc', this.x);
    this.x++;
    console.log('before inc', this.x);
  }
}
function myFunction(fn) {
  fn(); // runs the function being passed in
}

myFunction(obj.inc);
console.log(obj.x);
//to solve this problem we can use some default JS
//function in order to exec function is a specific context
// call, apply and bind
//obj.inc.call(obj);
//console.log(obj.x);
*/

