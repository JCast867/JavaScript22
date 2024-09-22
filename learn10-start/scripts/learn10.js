function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    let round = Math.round(6.7);
    document.getElementById("round").innerHTML = round;

    let ceil = Math.ceil(4.1);
    document.getElementById("ceil").innerHTML = ceil;

    let floor = Math.floor(6.9);
    document.getElementById("floor").innerHTML = floor;

    let trunc = Math.trunc(7.5);
    document.getElementById("trunc").innerHTML = trunc;

    let sign = Math.sign(-8);
    document.getElementById("sign").innerHTML = sign;

    let pow = Math.pow(3, 5);
    document.getElementById("pow").innerHTML = pow;

    let min = Math.min(5, 2, 7, 9, 23, 58, 1);
    document.getElementById("min").innerHTML = min;

    let random = Math.random();
    document.getElementById("random").innerHTML = random;


    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    let random2 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random2").innerHTML = random2;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let comparisons = "The main difference between '==' and '===' is how strict they are. == is known as a 'Loose Equality'."  
    + " While === is know as a 'Strict Equality'. When you compare the number 1 and the "
    + "string '1' using '==', it'll come out as true. Which is weird considering that one's a string while the other one is "
    + "a number. But the == converts the string '1' to a number and compares them like that. So it compares two values for" 
    + "equality AFTER performing a type conversion if the values are different types. However, with '===', this " + 
    "compares the value and types without doing any type conversion. So if you try this with '===' the result will be false.";
    document.getElementById("comparisons").innerHTML = comparisons;


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}