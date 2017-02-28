//TODO in a browser's dev console
console.log(this.length);

///////////////////////////////////////////////////////////
function foo () {
  console.log(this.length);
}

foo();
///////////////////////////////////////////////////////////

var bar = {
  myFunc: function () { 
    console.log(this.size);
 }
}
bar.myFunc();

