

const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water.",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Cute Puppy",
    image: "images/gold-dog.jpg",
    caption: "Cute goldie enjoying the outdoors.",
    altTag: "Golden Retriever puppy outside."
};

const dog3 = {
    heading: "Puppy Christmas",
    image: "images/snow-dog.jpg",
    caption: "Puppy takes snowman's arms off.",
    altTag: "Puppy out in the snow."
};

const dog4 = {
    heading: "Dog Friends",
    image: "images/white-dogs.jpg",
    caption: "Two friends catching up.",
    altTag: "Two dogs outside."
};

function chooseDog(dog) {
    if (dog == 1) {
        loadMe(dog1, 1);
    } else if (dog == 2) {
        loadMe(dog2, 2);
    } else if (dog == 3) {
        loadMe(dog3, 3);
    } else if (dog4, 4) {
        loadMe(dog4, 4);
    }
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}