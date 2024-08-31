function getTotal() {

    function validateInput(val) {
        if (val < 0) {
            return 0;
        } else {
            return val;
        }
    }

    var totalsSection = document.getElementById("totalsSection");
    totalsSection.style.display = "block";

    let name = document.getElementById("name").value;
    // DRINKS
    let coke = validateInput(parseInt(document.getElementById("coke").value));
    let dietcoke = validateInput(parseInt(document.getElementById("dietcoke").value));
    let dp = validateInput(parseInt(document.getElementById("dp").value));
    let mountdew = validateInput(parseInt(document.getElementById("mountdew").value));
    let fanta = validateInput(parseInt(document.getElementById("fanta").value));

    let drinkTotal = parseFloat(((2.59)*coke + (2.59)*dietcoke + (2.59)*dp + (2.59)*mountdew + (2.59)*fanta).toFixed(2));
    let amountDrinks = coke + dietcoke + dp + mountdew + fanta;
    document.getElementById("drinkEstimate").innerHTML = (name + ", your drink total is " + drinkTotal + " with a total amount of " + amountDrinks + " drinks.");



    // SANDWICHES
    let chicksand = validateInput(parseInt(document.getElementById("chicksand").value));
    let cheesechicksand = validateInput(parseInt(document.getElementById("cheesechicksand").value));
    let bacon = validateInput(parseInt(document.getElementById("bacon").value));
    let grilledchicken = validateInput(parseInt(document.getElementById("grilledchicken").value));
    let cheeseburger = validateInput(parseInt(document.getElementById("cheeseburger").value));

    let wichTotal = parseFloat(((6.29)*chicksand + (7.29)*cheesechicksand + (10.89)*bacon + (9.29)*grilledchicken + (6.59)*cheeseburger).toFixed(2));
    let wichAmount = chicksand + cheesechicksand + bacon + grilledchicken + cheeseburger;
    document.getElementById("wichEstimate").innerHTML = name + ", your sandwich total is " + wichTotal + " with a total amount of " + wichAmount + " sandwiches.";

    // DESERTS and SIDES
    let fries = validateInput(parseInt(document.getElementById("fries").value));
    let fruit = validateInput(parseInt(document.getElementById("fruit").value));
    let cookie = validateInput(parseInt(document.getElementById("cookie").value));
    let brownie = validateInput(parseInt(document.getElementById("brownie").value));
    let cookietote = validateInput(parseInt(document.getElementById("cookietote").value));

    let desertsidesTotal = parseFloat(((2.50)*fries + (3.00)*fruit + (1.29)*cookie + (2.19)*brownie + (5.39)*cookietote).toFixed(2));
    let desertsidesAmount = fries + fruit + cookie + brownie + cookietote;
    document.getElementById("desertsidesEstimate").innerHTML = name + ", your deserts and sides total is " + desertsidesTotal
                            + " with a total amount of " + desertsidesAmount + " deserts and sides.";

    let total = parseFloat((drinkTotal + wichTotal + desertsidesTotal).toFixed(2));
    let amount = amountDrinks + wichAmount + desertsidesAmount;
    document.getElementById("total").innerHTML = name + ", your total is " + total + " with " + amount + " items."
}