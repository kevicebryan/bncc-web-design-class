"use strict";

const showUserInput = function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.querySelector("#email").value;
  const message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please make sure all inputs are filled!");

    if (name.trim() === "") {
      document.getElementById("name").classList.add("error");
    } else {
      document.getElementById("name").classList.add("correct");
      document.getElementById("name").classList.remove("error");
    }

    if (email.trim() === "") {
      document.getElementById("email").classList.add("error");
    }

    if (message.trim() === "") {
      document.getElementById("message").classList.add("error");
    } else {
      document.getElementById("message").classList.add("correct");
      document.getElementById("message").classList.remove("error");
    }

    return;
  }

  if (!email.includes("@")) {
    alert("Please make sure email is valid");
    document.getElementById("email").classList.add("error");
    return;
  }

  document.getElementById("email").classList.add("correct");
  document.getElementById("email").classList.remove("error");
  document.getElementById("message").classList.add("correct");
  document.getElementById("name").classList.add("correct");

  alert(
    `Name: ${name} 
Email: ${email} 
Message: ${message}`
  );

  console.log(name, email, message);
};

// Carousel
let activeIdx = 0;

const carouselHandler = function (prev = true) {
  const slides = document.querySelectorAll(".slide");
  // remove current idx slide to active
  slides[activeIdx].classList.add("move");

  setTimeout(() => {
    slides[activeIdx].classList.remove("show");
    slides[activeIdx].classList.remove("move");

    if (prev) {
      activeIdx = --activeIdx % slides.length;
      if (activeIdx < 0) {
        activeIdx = slides.length - 1;
      }
    } else {
      activeIdx = ++activeIdx % slides.length;
    }
    slides[activeIdx].classList.add("show");
  }, 500);

  // update new idx slide to active
};
