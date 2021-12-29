let result = document.getElementById("result");

function calc_btn(calc) {

 if (result.value.slice(-1) == "+" || "-" || "*" || "/") {
  const answer = result.value + calc.value;
  const footSlice = answer.slice(0, -1);
  const display = footSlice + calc.value;
  console.log(display);
  }
}

function num_btn(num) {
 if (result.value == "0") {
   result.value = num.value;
  } else {
   result.value += num.value;
  }
}

function clear_btn() {
  result.value = "0";
}

function equal_btn() {
  result.value = eval(result.value);
}