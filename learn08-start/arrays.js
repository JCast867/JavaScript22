function start() {

    /* Follow the directions in the comments to demonstrate the use of arrays */

    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1
    let name = "Jaime Castaneda";
    document.getElementById("name").innerHTML = name;

    // Create an array called months that holds all the months of the year
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
        "October", "November", "December"]


    // use the index to print the month May from the months array the may paragraph
    let may = months[4];
    document.getElementById("may").innerHTML = may;

    // print the length of the month array to the length paragraph
    let length = months.length;
    document.getElementById("length").innerHTML = length;

    // Loop through all of the months array and print each month to the months paragraph
    let text = "<ul>";
    for (let i = 0; i < length; i++) {
        text += "<li>" + months[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("months").innerHTML = text;

    //JS Array Methods:https://www.w3schools.com/js/js_array_methods.asp


    // convert the months array to a string and print to the string paragraph
    let monthsString = months.toString();
    document.getElementById("string").innerHTML = monthsString;

    // create two new arrays - weekends and weekdays, add the appropriate days to eachk
    let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let weekends = ["Saturday", "Sunday"];

    // join the two arrays into a new array - week
    let week = weekdays.concat(weekends);


    // print the contents of week to the week paragraph
    document.getElementById("week").innerHTML = week;

    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph
    let pop = week.pop();
    document.getElementById("pop").innerHTML = pop;

    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    fruits = ["Apple", "Kiwi", "Mango"]
    fruits.push("Banana");
    fruits.push("Orange");
    document.getElementById("fruits").innerHTML = fruits;

    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
    fruits.shift();
    document.getElementById("fruits2").innerHTML = fruits;

    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"]
        // sort the array languages and print to the paragraph sorted
        // reverse the array languages and print to the paragraph reversed
    languages.sort();
    document.getElementById("sorted").innerHTML = languages;

    languages.reverse();
    document.getElementById("reversed").innerHTML = languages;

    // use the compare function to sort the numbers  and print to the num-sorted paragraph
    numbers = [42, 23, 21, 50, 20, 6, 31, 9];
    numbers.sort(function(a, b){return a - b});
    document.getElementById("num-sorted").innerHTML = numbers;

    // Read the Array Iteration page https://www.w3schools.com/js/js_array_iteration.asp 
    // read the Array Const page https://www.w3schools.com/js/js_array_const.asp
}