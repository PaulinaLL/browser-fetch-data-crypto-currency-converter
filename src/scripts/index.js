import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "regenerator-runtime/runtime";

const form = document.querySelector("form");
const baseURL = "https://api.cryptonator.com/api/ticker";
const crypto = document.getElementById("crypto");
const currency = document.getElementById("normalCur");
const amount = document.getElementById("userInput");
const result = document.getElementById("result");

document.addEventListener("DOMContentLoaded", () => {
  console.log(" dom fully loaded");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const wholeURL = `${baseURL}/${crypto.value}-${currency.value}`;
    convertCurrency(wholeURL);
  });
});

function convertCurrency(wholeURL) {
  fetch(wholeURL)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      } else {
        return response.json();
      }
    })
    .then(data => {
      const calculation = data.ticker.price * userInput.value;
      result.value = calculation;
    })
    .catch(() => {});
}
