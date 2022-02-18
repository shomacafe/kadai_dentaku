let result = document.getElementById("result");
let operator = ["+","-","*","/"];//変数の宣言

function edit(elem){
 //一番右の文字列が四則演算子かつ入力された文字列が四則演算子のとき
  if(operator.includes(result.value.slice(-1)) == true && operator.includes(elem.value) == true){
  console.log("四則演算子が置き換わりました。")
  let f = result.value.slice(0,-1);
  result.value = f + elem.value;
}else{
  
  if(result.value == 0){
    result.value = elem.value;
  }else{
    result.value += elem.value;
  }
}
}

function calc() {
      result.value = new Function("return " + result.value)();
    }
function clearScreen(){
  result.value = "";
}