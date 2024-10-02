/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const movies = ["Spiderman", "Antman", "Ironman", "Hulk", "Captain America", "Thor"];
let list = "";
for (const x of movies) {
    list += x + "<br>";
}
document.getElementById("list").innerHTML = list;

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(["Lo Que Siento", "Amor de Siempre", "Si Me Voy", "Heartquake", "La Novela"]);
let set = "";
for (const x of songs) {
    set += x + "<br>";
}
document.getElementById("set1").innerHTML = set;

// add two more songs to the set then display in the set2 paragraph
songs.add("Aura");
songs.add("Decir Adios");
for(const x of songs) {
    set += x + "<br>";
}
document.getElementById("set2").innerHTML = set;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const map = new Map([
    ["Jaime", "jaime@gmail.com"],
    ["Elizabeth", "elizabeth@gmail.com"],
    ["Keren", "keren@gmail.com"],
    ["Jeremy", "jeremy@gmail.com"],
    ["Ricardo", "ricardo@gmail.com"] 
]);

let map1 = "";
map.forEach(function(value, key) {
    map1 += key + "'s email is " + value + "<br>";
});
document.getElementById("map1").innerHTML = map1;


// add two new names and emails and display in map2 use the forEach() method
map.set("Ana", "ana@gmail.com");
map.set("Giselle", "giselle@gmail.com");

let map2 = "";
map.forEach(function(value, key) {
    map2 += key + "'s email is " + value + "<br>";
});
document.getElementById("map2").innerHTML = map2;


// get and display the email of one person, display in map3
let map3 = map.get("Jaime");
document.getElementById("map3").innerHTML = map3;