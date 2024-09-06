
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
    image: "images/cookie.jpg",
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
    let html = `<h2>${dog1.name}<h2>` + `<h3>${dog1.breed}<h3>` + `<h3>${dog1.size}<h3>` + `<h3>${dog1.image}<h3>` +
    `<h3>${dog1.intelligence}<h3>` + `<h3>${dog1.aggresiveness}<h3>`;

    document.getElementById("dog1").innerHTML = html;
}