/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const basic = new Date();    
document.getElementById("basic").innerHTML = basic;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const today = new Date(2024, 8, 21);
document.getElementById("today").innerHTML = today;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const birthday = new Date("May 7, 2003 05:10:00");
document.getElementById("birthday").innerHTML = birthday;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
const d = new Date();
iso = d.toISOString();
document.getElementById("iso").innerHTML = iso;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const date1 = new Date("2024-10");
document.getElementById("date1").innerHTML = date1;

const date2 = new Date("03/23/2021");
document.getElementById("date2").innerHTML = date2;

const date3 = new Date("January 18 2021");
document.getElementById("date3").innerHTML = date3;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const get1 = date1.getFullYear();
document.getElementById("get1").innerHTML = get1;

const get2 = date2.getMonth() + 1;
document.getElementById("get2").innerHTML = get2;

const get3 = date3.getDate();
document.getElementById("get3").innerHTML = get3;

const get4 = birthday.getMinutes();
document.getElementById("get4").innerHTML = get4;

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const set1 = date1.setFullYear(2020);
document.getElementById("set1").innerHTML = set1;

const set2 = date2.setMonth(5);
document.getElementById("set2").innerHTML = set2;

const set3 = date3.setDate(31);
document.getElementById("set3").innerHTML = set3;

const set4 = birthday.setHours(11);
document.getElementById("set4").innerHTML = set4;