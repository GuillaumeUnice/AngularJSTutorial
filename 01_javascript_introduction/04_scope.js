// scope limitation
var a = "world";
var foo = function () {
  var a = "foo world";
  console.log(a);
}
foo();
console.log(a);


//#############################################################################################
/*
  var b = 'b';
  var bar = function () {
    console.log(b);
  }
  bar();
*/

//##############################################################################################
/*
  (function () {
    a = "No World";
    console.log(a);
  }) ()
  console.log(a);
*/

//###############################################################################################
/*
  for(var i = 0; i < 3; i++) {}
  console.log(i);
*/

//###############################################################################################
/*
  var i = 0;
  var testIValue = function () { console.log(i); }
  for(var i = 0; i < 3; i++) {
    testIValue();
  }
*/


