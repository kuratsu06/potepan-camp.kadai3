function clickbutton(target) {
  let result = document.getElementById("result");
  let target_value = target.innerHTML;
  
  if (target_value == "AC") {
    result.innerHTML = "0"
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML)
  } else {
    if (result.innerHTML == "0") {
      result.innerHTML = target_value
    } else {
      result.innerHTML += target_value
    }
  }
}

function cal() {
  let result_value = document.getElementById("result");
  let cal_btn = document.getElementById("calculation");
  
  if (result_value.textContent.slice(-1) == "+") {
    const f = result_value.textContent.slice(0, -1)
    result_value.textContent = f + cal_btn
  } else {
    result_value.textContent += cal_btn
  }
}