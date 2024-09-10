function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Jaime Castaneda"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
   let x = 11;
   let y = "9";
   let intString = x + y;
   document.getElementById("add").innerHTML = intString;


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let z = 867;
    let zString = z.toString();
    document.getElementById("to-string").innerHTML = zString;


    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let pi = 3.14159265;
    let piExp = pi.toExponential(2);
    document.getElementById("exponent").innerHTML = piExp;


    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let change = 258.490134;
    let changeFix = change.toFixed(2);
    document.getElementById("fixed").innerHTML = changeFix;


    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let money = 148.4592;
    let moneyPrec = money.toPrecision(3);
    document.getElementById("precision").innerHTML = moneyPrec;


    // Demonstrate the use of parseFloat() and print to the float paragraph
    let a = "99.99";
    let aFloat = parseFloat(a);
    document.getElementById("float").innerHTML = aFloat;


    // Demonstrate the use of parseInt() and print to the int paragraph
    let b = "55";
    let bInt = parseInt(b);
    document.getElementById("int").innerHTML = bInt;


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    // == is not as strict as ===
    let equals = "The main difference between '==' and '===' is how strict they are. == is known as a 'Loose Equality'."  
    + " While === is know as a 'Strict Equality'. When you compare the number 1 and the "
    + "string '1' using '==', it'll come out as true. Which is weird considering that one's a string while the other one is "
    + "a number. But the == converts the string '1' to a number and compares them like that. So it compares two values for" 
    + "equality AFTER performing a type conversion if the values are different types. However, with '===', this " + 
    "compares the value and types without doing any type conversion. So if you try this with '===' the result will be false.";
    document.getElementById("equals").innerHTML = equals;

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    let logic = "For the and operator, &&, it will return true only if every condition you passed to it is true. Even if 50 "
    + "of the conditions you passed to it are true and 1 is false, then it'll return false. However, for the or operator, ||, "
    + "it'll return true only if at least one of the conditions are true. So if 50 are false and 1 is true, it'll return true.";
    document.getElementById("logic").innerHTML = logic;


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    let month = "September";
    switch(month) {
        case "February":
            document.getElementById("switch").innerHTML = month + " has 28 days!"
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            document.getElementById("switch").innerHTML = month + " has 31 days!"
            break;
        case "April":
        case "June":
        case "September":
        case "November":
            document.getElementById("switch").innerHTML = month + " has 30 days!"
            break;
    }


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var person = "Righty";
    var ternary = (person === "Righty") ? ("You are righty!") : ("You are lefty!");
    document.getElementById("ternary").innerHTML = ternary;
}