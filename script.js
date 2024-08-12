let buttons = document.querySelectorAll("button");
let input = document.getElementById("inputBox");
let str = "";

buttons.forEach((key) =>
  key.addEventListener("click", function () {
    let value = key.innerHTML;
    if (value == "=") {
      str = String(eval(str));
    } else if (value == "AC") {
      str = "";
    } else if (value == "DEL") {
      str = str.slice(0, -1);
    } else {
      str += String(key.innerHTML);
    }
    input.value = str;
  })
);
