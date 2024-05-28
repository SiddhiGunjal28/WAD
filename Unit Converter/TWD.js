function kiloweightConvert(value) {
  document.getElementById("Pounds").innerHTML =
    value * 2.2046;
  document.getElementById("Ounces").innerHTML =
    value * 35.274;
  document.getElementById("Grams").innerHTML =
    value * 1000;
  document.getElementById("Stones").innerHTML =
    value * 0.1574;
}
function kilodistanceConvert(value) {
  document.getElementById("Miles").innerHTML =
    value * 1.609;
}
function temperatureConvert(value) {
  document.getElementById("fahrenheit").innerHTML =
    (value * 9/5) + 32;
}
