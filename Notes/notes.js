//Javascript Notes
//==============================================================

//String to number conversion
parseInt() //should only be used with a radix paramter

//We can use the plus operator to convert to a number. 
(+"1.1") + (+"1.1");// = 2.2 


//We don't need to use 'var', but it's good pratice. 
//Otherwise it declares a global variable
var x = 42;// local + global if declared in such a way
x = 42; // global only, generates strict javascript warning


//You can use undefined to determine whether a variable has a value. 
//In the following code, the variable input is not assigned a value, 
//and the if statement evaluates to true.

var input;
if(input === undefined){
  doThis();
} else {
  doThat();
}


//The undefined value behaves as false when used in a boolean context. 
//For example, the following code executes the function myFunction because 
//the myArray element is not defined:

var myArray = new Array();
if (!myArray[0]) myFunction();


//The undefined value converts to NaN when used in numeric context.
var a;
a + 2 = NaN

//When you evaluate a null variable, the null value behaves as 0 in numeric 
//contexts and as false in boolean contexts. For example:

var n = null;
console.log(n * 32); // logs 0


//Array literals
var coffees = ["French Roast", "Colombian", "Kona"];

// You do not have to specify all elements in an array literal. If you put two
// commas in a row, the array is created with undefined for the unspecified 
// elements. The following example creates the fish array:
var fish = ["Lion", , "Angel"];
// If you include a trailing comma at the end of the list of elements, the comma is 
// ignored. In the following example, the length of the array is three. There is 
// no myList[3]. All other commas in the list indicate a new element. (Note: trailing 
// commas can create errors in older browser versions and it is a best practice to remove them.)

// You can also escape line breaks by preceding them with backslash. The backslash 
// and line break are both removed from the value of the string.
var str = "this string \
is broken \
across multiple\
lines."
console.log(str);   // this string is broken across multiplelines.

delete
	// The delete operator deletes an object, an object's property, or an element at a 
	// specified index in an array. The syntax is:

	delete objectName;
	delete objectName.property;
	delete objectName[index];
	delete property; // legal only within a with statement
	// If the delete operator succeeds, it sets the property or element to undefined. 
	// The delete operator returns true if the operation is possible; it returns false 
	// if the operation is not possible.


in
	// The in operator returns true if the specified property is in the specified object. 
	// The syntax is:

	propNameOrNumber in objectName

	var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
	0 in trees;        // returns true
	3 in trees;        // returns true
	6 in trees;        // returns false
	"bay" in trees;    // returns false (you must specify the index number,
	                   // not the value at that index)
	"length" in trees; // returns true (length is an Array property)


instanceof
	// The instanceof operator returns true if the specified object is of the specified 
	// object type. The syntax is:

	objectName instanceof objectType

	var theDay = new Date(1995, 12, 17);
	if (theDay instanceof Date) {
	  // statements to execute
	}


new
	// You can use the new operator to create an instance of a user-defined object type or 
	// of one of the predefined object types Array, Boolean, Date, Function, Image, Number, 
	// Object, Option, RegExp, or String. On the server, you can also use it with DbPool, 
	// Lock, File, or SendMail. Use new as follows:

	var objectName = new objectType([param1, param2, ..., paramN]);

this
	// Use the this keyword to refer to the current object. In general, this refers to the 
	// calling object in a method. Use this as follows:

	this["propertyName"]
	this.propertyName

	// Suppose a function called validate validates an object's value property, given the object
	// and the high and low values:

	function validate(obj, lowval, hival){
	  if ((obj.value < lowval) || (obj.value > hival))
	    alert("Invalid Value!");
	}
	// You could call validate in each form element's onChange event handler, using this to pass 
	// it the form element, as in the following example:

	<B>Enter a number between 18 and 99:</B>
	<INPUT TYPE="text" NAME="age" SIZE=3
	   onChange="validate(this, 18, 99);">


typeof
	// The typeof operator is used in either of the following ways:

	typeof operand

	var myFun = new Function("5 + 2");
	var shape = "round";
	var size = 1;
	var today = new Date();
	// The typeof operator returns the following results for these variables:

	typeof myFun;     // returns "function"
	typeof shape;     // returns "string"
	typeof size;      // returns "number"
	typeof today;     // returns "object"
	typeof dontExist; // returns "undefined"


void
	// The following code creates a hypertext link that does nothing when the user 
	// clicks it. When the user clicks the link, void(0) evaluates to undefined, 
	// which has no effect in JavaScript.

	<A HREF="javascript:void(0)">Click here to do nothing</A>
	// The following code creates a hypertext link that submits a form when the user 
	// clicks it.

	<A HREF="javascript:void(document.form.submit())">
	Click here to submit</A>


// Using a regular expression literal, as follows:
	var re = /ab+c/;
	// Regular expression literals provide compilation of the regular expression when 
	// the script is evaluated. When the regular expression will remain constant, use
	// this for better performance.

	// Calling the constructor function of the RegExp object, as follows:
	var re = new RegExp("ab+c");
	// Escaping user input to be treated as a literal string within a regular expression 
	// can be accomplished by simple replacement:
	function escapeRegExp(string){
	  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}
	// In the following example, the script uses the exec method to find a match in a string.
	var myRe = /d(b+)d/g;
	var myArray = myRe.exec("cdbbdbsbz");

	// As shown in the second form of this example, you can use a regular expression created 
	// with an object initializer without assigning it to a variable. If you do, however, 
	// every occurrence is a new regular expression. For this reason, if you use this form 
	// without assigning it to a variable, you cannot subsequently access the properties of 
	// that regular expression. For example, assume you have this script
	var myRe = /d(b+)d/g;
	var myArray = myRe.exec("cdbbdbsbz");
	console.log("The value of lastIndex is " + myRe.lastIndex);
	// This script displays: The value of lastIndex is 5
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// Do not confuse the primitive boolean values true and false with the true and false 
// values of the Boolean object. For example:
	var b = new Boolean(false);
	if (b) // this condition evaluates to true

	// Do not use a Boolean object to convert a non-boolean value to a boolean value. Instead, 
	// use Boolean as a function to perform this task:
	x = Boolean(expression);     // preferred
	x = new Boolean(expression); // don't use

