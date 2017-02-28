var myNamespace = {	
    MyObject: (function () {
            MyObject.myProp = 'myProp';
            function MyObject() {
                this.property1 = {};
            }

            MyObject.prototype.myFunction = function () {
                console.log('myFunction');
            };
            return MyObject;
        }())
}

var myInstance = new myNamespace.MyObject();
console.log('myInstance', myInstance);
console.log('');
console.log('MyObject', myNamespace.MyObject);

console.log('');
console.log(myNamespace.MyObject.myProp);

