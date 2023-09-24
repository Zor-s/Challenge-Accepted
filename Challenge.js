let x = "0";
let operator = "";
let y = "";
let z = "";

function calculate1(value) {
  if (value === "CE") {
    // clears everything
    x = "0";
    document.getElementById("calScreen2").innerText = x;
  } else {
    if (x === "0") {
      // removes the first 0 after typing a number
      x = "";
    }

    if (value === "<--") {
      x = x.slice(0, -1);
      document.getElementById("calScreen2").innerText = x;
      return;
    }

    x += value;
    document.getElementById("calScreen2").innerText = x;
  }
}

if (operator === "") {
  document.getElementById("buttonZero").addEventListener("click", function () {
    if (document.getElementById("calScreen2").innerText !== "0") {
      calculate1(document.getElementById("buttonZero").innerText);
    }
  });

  document.getElementById("buttonOne").addEventListener("click", function () {
    calculate1(document.getElementById("buttonOne").innerText);
  });

  document.getElementById("buttonTwo").addEventListener("click", function () {
    calculate1(document.getElementById("buttonTwo").innerText);
  });

  document.getElementById("buttonThree").addEventListener("click", function () {
    calculate1(document.getElementById("buttonThree").innerText);
  });

  document.getElementById("buttonFour").addEventListener("click", function () {
    calculate1(document.getElementById("buttonFour").innerText);
  });

  document.getElementById("buttonFive").addEventListener("click", function () {
    calculate1(document.getElementById("buttonFive").innerText);
  });

  document.getElementById("buttonSix").addEventListener("click", function () {
    calculate1(document.getElementById("buttonSix").innerText);
  });

  document.getElementById("buttonSeven").addEventListener("click", function () {
    calculate1(document.getElementById("buttonSeven").innerText);
  });

  document.getElementById("buttonEight").addEventListener("click", function () {
    calculate1(document.getElementById("buttonEight").innerText);
  });

  document.getElementById("buttonNine").addEventListener("click", function () {
    calculate1(document.getElementById("buttonNine").innerText);
  });

  document.getElementById("buttonCE").addEventListener("click", function () {
    calculate1(document.getElementById("buttonCE").innerText);
  });

  document
    .getElementById("buttonDecimal")
    .addEventListener("click", function () {
      if (!x.includes(".")) {
        if (x === "0") {
          calculate1("0" + document.getElementById("buttonDecimal").innerText);
        } else {
          calculate1(document.getElementById("buttonDecimal").innerText);
        }
      }
    });

  document.getElementById("buttonBack").addEventListener("click", function () {
    calculate1(document.getElementById("buttonBack").innerText);
  });
}
