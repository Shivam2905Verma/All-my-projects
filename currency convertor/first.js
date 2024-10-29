const baseURL = "https://open.er-api.com/v6/latest";

const selects = document.querySelectorAll(".selectCountry");
let btn = document.querySelector(".button");
let from = document.querySelector(".from");
let to = document.querySelector(".to");
let currency_value = document.querySelector(".currency_value");

for (let select of selects) {
  for (currcode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;
    if (currcode === "USD" && selects[0] == select) {
      newoption.selected = "true";
    } else if (currcode === "INR" && selects[1] == select) {
      newoption.selected = "true";
    }
    select.append(newoption);
    select.addEventListener("change", (element) => {
      updateflag(element.target);
    });
  }
}

const updateflag = (element) => {
  let currcode = element.value;
  let countrycode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

btn.addEventListener("click", async () => {
  let amt = document.querySelector(".inputvalue input");
  let amtvalue = amt.value;
  let from = selects[0].value;
  let to = selects[1].value;
  let url = `${baseURL}/${from}`;
  let getvalue = await fetch(url);
  let data = await getvalue.json();
  currency_value.innerText = `${amtvalue} ${from} = ${(
    amtvalue * data.rates[to]
  ).toFixed(2)} ${to}`;
  console.log(data);
});
