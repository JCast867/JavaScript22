// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    //fix the errors
    var firstName = "Meredith";
    var lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    let firstName = "Meredith";
    const taxRate = .07; // This is a constant
    //fix the errors
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}


function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ivy";
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("new-doggos").innerHTML = dogs;
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}


function myMath() {
    // create statements demonstrating the use of each operator;

    let addition = 10 + 32;
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;

    let subtraction = 25 - 11;
    document.getElementById("subtraction").innerHTML = "25 - 11 = " + subtraction;

    let multiplication = 5 * 8;
    document.getElementById("multiplication").innerHTML = "5 * 8 = " + multiplication;

    let exponent = 5 ** 2;
    document.getElementById("exponent").innerHTML = "5^2 = " + exponent;

    let division = 80 / 10;
    document.getElementById("division").innerHTML = "80 / 10 = " + division;

    let modulus = 11 % 5;
    document.getElementById("modulus").innerHTML = "11 % 5 = " + modulus;

    let increment = 15;
    increment++;
    document.getElementById("increment").innerHTML = "15++ = " + increment;

    let decrement = 19;
    decrement--;
    document.getElementById("decrement").innerHTML = "19-- = " + decrement;
}


function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10  =" + " x = " + x;
    x += 1;
    document.getElementById("plus-equals").innerHTML = "x += 1 " + "= " + x;
    x -= 6;
    document.getElementById("minus-equals").innerHTML = "x -= 6 " + "= " + x;
    x *= 10;
    document.getElementById("times-equals").innerHTML = "x *= 10 " + "= " + x;
    x /= 5;
    document.getElementById("divide-equals").innerHTML = "x /= 5 " + "= " + x;
    x %= 8;
    document.getElementById("modulus-equals").innerHTML = "x %= 8 " + "= " + x;

}


function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    ;

    const majors = ["Computer Science", "Data Science", "Cybersecurity, Information Technology"];
    document.getElementById("array").innerHTML = majors;

    const student = {name: "Jaime", age: 21, major: "Computer Science", minor: "Data Science"};
    document.getElementById("object").innerHTML = student;

}
