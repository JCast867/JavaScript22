
// Objects

// For intelligence, I did a fun ranking on what degrees these dogs would get
// so not completely accurate. just my opinion :)
const dog1 = {
    name: "Ivy",
    breed: "Miniature Australian Shepard",
    size: "Small",
    image: "images/ivy.JPG",
    intelligence: "Bachelors",
    aggresiveness: "Medium"
};

const dog2 = {
    name: "Cookie",
    breed: "Border Collie",
    size: "Small",
    image: "images/bordercollie.jpg",
    intelligence: "PhD",
    aggresiveness: "Low"
};

const dog3 = {
    name: "Sunny",
    breed: "Golder Retriever",
    size: "Medium",
    image: "images/goldenretriever.jpg",
    intelligence: "High School",
    aggresiveness: "Low"
};

const dog4 = {
    name: "Oreo",
    breed: "Chihuahua",
    size: "Extra Small",
    image: "images/oreo.jpg",
    intelligence: "Middle School",
    aggresiveness: "Very High"
};

const dog5 = {
    name: "Zeus",
    breed: "German Shepard",
    size: "Large",
    image: "images/germanshepard.jpg",
    intelligence: "Masters",
    aggresiveness: "High"
};

function display() {
    let html1 = `<h2>${dog1.name}<h2>` + `<h3>Breed: ${dog1.breed}<h3>` + `<h3>Size: ${dog1.size}<h3>` +
    `<h3>Intelligence: ${dog1.intelligence}<h3>` + `<h3>Aggresiveness: ${dog1.aggresiveness}<h3>` + `<img src =${dog1.image}>`;

    document.getElementById("dog1").innerHTML = html1;

    let html2 = `<h2>${dog2.name}<h2>` + `<h3>Breed: ${dog2.breed}<h3>` + `<h3>Size: ${dog2.size}<h3>` +
    `<h3>Intelligence: ${dog2.intelligence}<h3>` + `<h3>Aggresiveness: ${dog2.aggresiveness}<h3>` + `<img src =${dog2.image}>`;

    document.getElementById("dog2").innerHTML = html2;

    let html3 = `<h2>${dog3.name}<h2>` + `<h3>Breed: ${dog3.breed}<h3>` + `<h3>Size: ${dog3.size}<h3>` +
    `<h3>Intelligence: ${dog3.intelligence}<h3>` + `<h3>Aggresiveness: ${dog3.aggresiveness}<h3>` + `<img src =${dog3.image}>`;

    document.getElementById("dog3").innerHTML = html3;

    let html4 = `<h2>${dog4.name}<h2>` + `<h3>Breed: ${dog4.breed}<h3>` + `<h3>Size: ${dog4.size}<h3>` +
    `<h3>Intelligence: ${dog4.intelligence}<h3>` + `<h3>Aggresiveness: ${dog4.aggresiveness}<h3>` + `<img src =${dog4.image}>`;

    document.getElementById("dog4").innerHTML = html4;

    let html5 = `<h2>${dog5.name}<h2>` + `<h3>Breed: ${dog5.breed}<h3>` + `<h3>Size: ${dog5.size}<h3>` +
    `<h3>Intelligence: ${dog5.intelligence}<h3>` + `<h3>Aggresiveness: ${dog5.aggresiveness}<h3>` + `<img src =${dog5.image}>`;

    document.getElementById("dog5").innerHTML = html5;
}