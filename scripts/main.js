function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ostrich.png") {
    myImage.setAttribute("src", "images/ostrich2.png");
  } else {
    myImage.setAttribute("src", "images/ostrich.png");
  }
});

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Ostrich is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
