// Task01
// function currentDate() {
//   var date = new Date();
//   document.write(date);
// }
// currentDate();

// Task02
// function greet() {
//   var first = prompt("Enter First Name");
//   var last = prompt("Enter First Name");
//   alert("Welcome " + first + " " + last);
// }
// greet();

// Task03
// function sum() {
//   var num1 = Number(prompt("Enter First Number"));
//   var num2 = Number(prompt("Enter Second Number"));

//   return num1 + num2;
// }
// document.write(sum())

// Task04
// function calculator() {
//   var num1 = Number(prompt("Enter First Number"));
//   var num2 = Number(prompt("Enter Second Number"));
//   var operator = prompt("Enter operator (e.g +, -, *, /, %)");
//   var cal = 0;

//   if (operator === "+") {
//     cal = num1 + num2;
//   } else if (operator === "-") {
//     cal = num1 - num2;
//   } else if (operator === "*") {
//     cal = num1 * num2;
//   } else if (operator === "/") {
//     cal = num1 / num2;
//   } else if (operator === "%") {
//     cal = num1 % num2;
//   } else {
//     cal = null;
//     document.write("Please enter correct operator");
//   }

//   return cal;
// }

// document.write(calculator());

// Task05
// function square(number) {
//   number = number * number;

//   return number;
// }

// document.write(square(5));

// Task06
// function factorial() {
//   var num = Number(prompt("Enter Number"));
//   //   var fact = 1;

//   for (var i = num - 1; i > 0; i--) {
//     num = num * i;
//   }
//   console.log(num);
// }
// factorial();

// Task07
// function count() {
//   var start = Number(prompt("Enter start number"));
//   var end = Number(prompt("Enter end number"));

//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }
// count();

// Task08
// var hypotenuse, base, perpendicular;
// base = Number(prompt("Enter Base"));
// perpendicular = Number(prompt("Enter Perpendicular"));

// function calculateHypotenuse() {
//   function calculateSquare(a) {
//     a = a * a;

//     return a;
//   }

//   hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//   hypotenuse = Math.sqrt(hypotenuse)

//   return hypotenuse;
// }

// document.write("Hypotenuse of right angle triangle: " + calculateHypotenuse())

// Task09
// function area(width, height) {
//   var A = width * height;

//   return A;
// }

// document.write("Area of Rectangle: " + area(3,5));

// Task10
// function palindrome(word) {
//   var newArray = [];
//   word = word.toLowerCase()
//   var split = word.split("")

//   for (var i = word.length - 1; i >= 0; i--) {
//     newArray.push(word[i])
//   }
//   var join = newArray.join("")

//  if(word === join){
//   document.write("Entered word is palindrome")
//  }else{
//   document.write("Entered word is not palindrome")
//  }

// }

// palindrome("hamza");

// Task11
// function toUpperFirst(string) {
//   document.write("Example string: " + string + "<br>")
//   string = string.split(" ");
//   for (var i = 0; i < string.length; i++) {
//     string[i] = string[i][0].toUpperCase() + string[i].slice(1).toLowerCase();
//   }
//   var join = string.join(" ")
//   document.write("Expected Output: " + join)

// }

// toUpperFirst("the quick brown fox");

// Task12
// function longestWord(string) {
//   document.write("Example string: " + string + "<br>");
//   string = string.split(" ");
//   var max = 0;
//   for (var i = 0; i < string.length; i++) {
//     if(string[i].length > max){
//       max = string[i]
//     }else if(string[i].length > max.length){
//       max = string[i];
//     }
//   }
//   document.write("Expected string: " + max );

// }

// longestWord("web development tutorial");

// Task13
// function countOccurance(string, letter) {
//   document.write("String: " + string + "<br>");
//   var count = 0;
//   var split = string.split("");

//   for (var i = 0; i < string.length; i++) {
//     if (split[i] === letter) {
//       count = count + 1;
//     }
//   }
//   document.write("Letter to find: " + letter + "<br>")
//   document.write("No.of Occurance in String: " + count + "<br>")
// }
// countOccurance("My name is Hamza Habib", "z");

// Task14
// function calcCircumference(radius) {
//   const pi = 3.141592653589793238;
//   var circumference = 2 * pi * radius;
//   var fix = circumference.toFixed(2);

//   document.write("The circumference of circle is: " + fix);
// }
// calcCircumference(32);

function calcArea(radius) {
  const pi = 3.141592653589793238;
  var circumference = pi * (radius * radius);
  var fix = circumference.toFixed(2);

  document.write("The Area of circle is: " + fix);
}
calcArea(12);
