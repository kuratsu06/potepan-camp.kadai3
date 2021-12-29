let result = document.getElementById("result");

function calc_btn(calc) {
 let display = result.value.slice(-1);
 let footSlice = result.value.slice(0, -1);
 
 switch (display) {
  case '+':
    result.value = footSlice + calc.value; 
   break;
  
  case '-':
    result.value = footSlice + calc.value; 
   break;
   
  case '*':
    result.value = footSlice + calc.value; 
   break;
   
  case '/':
    result.value = footSlice + calc.value; 
   break;
  
  default:
   result.value += calc.value;
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