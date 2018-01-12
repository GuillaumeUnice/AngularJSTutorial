/*// scope limitation
var a = "world";
var foo = function () {
  var a = "foo world";
  console.log(a);
}
foo();
console.log(a);
*/

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

//################################################################################################
// call function
/*
  var obj1 = {num: 10}
  var obj2 = {num: 20}

  function  addToThis (a) {
    console.log(this.num + a)
  }

  addToThis(1);
  addToThis.call(obj1, 1);
  addToThis.call(obj2, 1);
*/

//###############################################################################################
// apply function
/*
  var obj1 = {num: 10}
  var obj2 = {num: 20}

  function  addToThis1 (a) {
    console.log("addToThis1");
    console.log(this.num + a)
  }
  function  addToThis2 () {
    console.log("addToThis2");
    console.log(this.num + arguments[0])
  }
  
  addToThis1.apply(obj1, [1]);
  addToThis1.apply(obj2, [1]);
  addToThis2.apply(obj1, [1]);
  addToThis2.apply(obj2, [1]);
*/

//###############################################################################################
// bind function
/*
  var foo = 9;
  var module = {
    foo: 81,
    getFoo: function() { console.log(this.foo); }
  };

  module.getFoo();

  var getFoo = module.getFoo;
  getFoo();

  var boundGetFoo = getFoo.bind(module);
  boundGetFoo();
*/

