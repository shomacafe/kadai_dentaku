let result = document.getElementById("result");

function edit(elem){
  if(result.value == 0){
    result.value = elem.value;
  }else{
    result.value += elem.value;
  }
}

let operator = document.getElementsByClassName("operator");

function ope(operator){
  if(result.value.slice(-1) === operator.value ){
    const f = result.value.slice(0,-1)
    result.value = f + operator.value;
  }else{
    result.value += operator.value;
  }
}

function calc() {
      result.value = new Function("return " + result.value)();
    }
function clearScreen(){
  result.value = "";
}