let cookieTotal = 0;
const img = document.querySelector("img");
const cookieCounter = document.getElementById("cookieCounter");
const button = document.querySelector("button");
const shopItem = document.querySelectorAll("shop-item");
let increament = 1;
// localStorage.clear();

function cookieCount() {
cookieTotal++;
cookieCounter.textContent = " You have " + cookieTotal + " cookies!"
localStorage.setItem("cookieTotal", cookieTotal);
};

function grandma() {

}

cookie.addEventListener("click", cookieCount);

function getLocalStorage() {
  const localCounter = localStorage.getItem("cookieTotal");

  if(localCounter) {
    cookieTotal = Number(localCounter);
  }
  else {
    cookieTotal = 0;
  }

  cookieCounter.textContent = " You have " + cookieTotal + " cookies!";
}

getLocalStorage();

function startCount() {

setInterval(function () {
  cookieTotal = cookieTotal + increament;

  cookieCounter.textContent = " You have " + cookieTotal + " cookies!"
  localStorage.setItem("cookieTotal", cookieTotal);
}, 1000
);
};

button.addEventListener("click", startCount);




