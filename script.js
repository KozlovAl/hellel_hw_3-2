"use strict";

const nameInput = prompt("Enter your name:").trim();

if (nameInput === "") {
    alert("Name cannot be empty.");
} else if (!isNaN(nameInput)) {
    alert("Name cannot be a number.");
} else if (nameInput.length < 2) {
    alert("Name must be at least 2 characters long.");
} else {
    alert("Thank you: " + nameInput);
}

const userAgeInput = prompt("Enter your age:");

if (userAgeInput === null) {
    alert("Okay, bye");
} else if (
    userAgeInput.trim() === "" ||
    isNaN(userAgeInput) ||
    userAgeInput <= 0 ||
    userAgeInput >= 150
) {
    alert("Error: invalid age");
} else {
    const userAge = parseInt(userAgeInput);
    alert(`You are ${userAge} years old`);
}

const userCityInput = prompt("Enter your city:").trim();

if (userCityInput === "") {
    alert("City cannot be empty.");
} else if (!isNaN(userCityInput)) {
    alert("City cannot be a number.");
} else if (userCityInput.length < 2) {
    alert("City name must be at least 2 characters long.");
} else if (userCityInput.length > 50) {
    alert("City name cannot exceed 50 characters.");
} else {
    alert(`Thank you, ${nameInput}. Your city is ${userCityInput} and you are ${userAgeInput} years old.`);
}