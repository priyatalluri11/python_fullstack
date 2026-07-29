alert("Welcome to NRIIT Learning Management System");

let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers";
console.log("Heading Element:", heading);

let msg = document.getElementById("message");
msg.innerHTML = "JavaScript is fun";
console.log("Message Element:", msg);

function showmessage() {
    alert("Welcome to NRIIT Learning Management System");
}

function changeHeading() {
    document.getElementById("welcome").innerHTML =
        "Welcome Python FullStack Developers";
}

let heading1 = document.querySelector("#welcome");
console.log("Heading Element:", heading1);

let button = document.getElementById("btnGreeting");

button.addEventListener("click", function () {
    alert("Welcome to JavaScript Event Handling");
});

let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Registration Successful!");
});