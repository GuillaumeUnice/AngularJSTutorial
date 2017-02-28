function MyObject (prop) {
	this.prop = prop;
	this.myFunction = function() {
		console.log('myFunction');
	}
}

var myInstance = new MyObject('hello');
console.log(MyObject);
console.log(myInstance);

myInstance.myFunction();

/*
MyObject.prototype.anotherFunction = function() {
    console.log('anotherFunction');
}

myInstance.anotherFunction();
*/
