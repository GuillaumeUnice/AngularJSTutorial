var MyObject = (function () {
	    MyObject.myProp = 'myProp';
	    function MyObject() {
	        this.property1 = {};
	    }
	    
	    MyObject.prototype.myFunction = function () {
	        console.log('myFunction');
	    };
	    return MyObject;
	}());

var myInstance = new MyObject();

console.log('myInstance', myInstance);
console.log('');
console.log('MyObject', MyObject);

console.log('');
console.log(MyObject.myProp);
