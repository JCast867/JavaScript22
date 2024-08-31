function getTotal() {

    var totalsSection = document.getElementById("totalsSection");
    totalsSection.style.display = "block";

    let name = document.getElementById("name").value;
    // DRINKS
    let coke = parseInt(document.getElementById("coke").value);
    let dietcoke = parseInt(document.getElementById("dietcoke").value);
    let dp = parseInt(document.getElementById("dp").value);
    let mountdew = parseInt(document.getElementById("mountdew").value);
    let fanta = parseInt(document.getElementById("fanta").value);

    let drinkTotal = parseFloat(((2.59)*coke + (2.59)*dietcoke + (2.59)*dp + (2.59)*mountdew + (2.59)*fanta).toFixed(2));
    let amountDrinks = coke + dietcoke + dp + mountdew + fanta;
    document.getElementById("drinkEstimate").innerHTML = (name + ", your drink total is " + drinkTotal + " with a total amount of " + amountDrinks + " drinks.");



    // SANDWICHES
    let chicksand = parseInt(document.getElementById("chicksand").value);
    let cheesechicksand = parseInt(document.getElementById("cheesechicksand").value);
    let bacon = parseInt(document.getElementById("bacon").value);
    let grilledchicken = parseInt(document.getElementById("grilledchicken").value);
    let cheeseburger = parseInt(document.getElementById("cheeseburger").value);

    let wichTotal = parseFloat(((6.29)*chicksand + (7.29)*cheesechicksand + (10.89)*bacon + (9.29)*grilledchicken + (6.59)*cheeseburger).toFixed(2));
    let wichAmount = chicksand + cheesechicksand + bacon + grilledchicken + cheeseburger;
    document.getElementById("wichEstimate").innerHTML = name + ", your sandwich total is " + wichTotal + " with a total amount of " + wichAmount + " sandwiches.";

    // DESERTS and SIDES
    let fries = parseInt(document.getElementById("fries").value);
    let fruit = parseInt(document.getElementById("fruit").value);
    let cookie = parseInt(document.getElementById("cookie").value);
    let brownie = parseInt(document.getElementById("brownie").value);
    let cookietote = parseInt(document.getElementById("cookietote").value);

    let desertsidesTotal = parseFloat(((2.50)*fries + (3.00)*fruit + (1.29)*cookie + (2.19)*brownie + (5.39)*cookietote).toFixed(2));
    let desertsidesAmount = fries + fruit + cookie + brownie + cookietote;
    document.getElementById("desertsidesEstimate").innerHTML = name + ", your deserts and sides total is " + desertsidesTotal
                            + " with a total amount of " + desertsidesAmount + " deserts and sides.";

    let total = parseFloat((drinkTotal + wichTotal + desertsidesTotal).toFixed(2));
    let amount = amountDrinks + wichAmount + desertsidesAmount;
    document.getElementById("total").innerHTML = name + ", your total is " + total + " with " + amount + " items."
}