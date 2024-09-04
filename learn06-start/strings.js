function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Jaime Castaneda";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    let myStringLength = myString.length;
    document.getElementById("length").innerHTML = myStringLength;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let moreStrings = "They called \"The Best\" for a reason. Also, this is a backslash \\. \r\nThis is going to be in a new line.";
    document.getElementById("escape").innerHTML = moreStrings;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    let fullName = "Jaime JCast Castaneda";
    // Use the JavaScript slice function to display your first name to first paragraph
    let firstName = fullName.slice(0, 5);
    document.getElementById("first").innerHTML = firstName;

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let middle = fullName.substring(6, 12);
    document.getElementById("middle").innerHTML = middle;

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let lastName = fullName.substr(12, 9);
    document.getElementById("last").innerHTML = lastName;


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College";
    let actualMajor = major.replace("Physical Therapy", "Computer Science");
    document.getElementById("major").innerHTML = actualMajor;


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!";
    let upper = myText.toUpperCase();
    document.getElementById("upper").innerHTML = upper;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trim = trimText.trim();
    document.getElementById("trim").innerHTML = trim;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let index = months.indexOf("May");
    document.getElementById("index").innerHTML = index;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = `Jaime`;
    let last = `Castaneda`;

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph

    let greeting = `Hello, ${first} ${last}! How nice to see you again.`;
    document.getElementById("greeting").innerHTML = greeting;
}