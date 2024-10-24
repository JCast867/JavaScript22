function addme() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const obj = {"First Name": fname, "Last Name": lname, "Email": email, "Phone Number": phone};
    const json = JSON.stringify(obj);

    document.getElementById("json-value").innerHTML = json;
}