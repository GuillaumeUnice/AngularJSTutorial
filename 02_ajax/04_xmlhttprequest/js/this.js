console.log(this.length); // global object (window object in a browser

function foo () {
  console.log(this.length);
}

foo();
// same context in a function


var bar = {
  myFunc: function () {
    console.log(this);
 }
}
bar.myFunc(); // Here it's not the same context


