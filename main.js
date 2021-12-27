let result = document.getElementById("result");

function num_btn(num) {
  
 if (result.value == "0") {
   result.value = num.value;
  } else {
   result.value += num.value;
  }
}

function calc_btn(calc) {
  
  if (result.value.slice(-1) == "+" || "-" || "*" || "/") {
    const f = result.value.slice(0, -1);
    result.value = f + calc.value;
  } else {
    result.value += calc.value;
  }
}

function clear_btn() {
  result.value = "0";
}

function equal_btn() {
  result.value = eval(result.value);
}