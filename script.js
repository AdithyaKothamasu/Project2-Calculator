const myCalculator = document.querySelector(".myCal");
const myKeys = [['1','2','3','+'],['4','5','6','-'],['7','8','9','*'],['C','0','=','/']];
const operators = ['+','-','*','/']
let output = document.createElement("div");
document.addEventListener("DOMContentLoaded",function(){
  
  output.innerHTML = "0";
  output.classList.add("output");
  myCalculator.appendChild(output);
  for(let i = 0; i < myKeys.length;i++){
    let div = document.createElement("div");
    div.classList.add("row");
    for(let j = 0; j < myKeys[i].length; j++){
      console.log(myKeys[i][j]);
      let btn = document.createElement("div");
      btn.innerText = myKeys[i][j];
      btn.classList.add("btn");
      btn.addEventListener("click",btnHit);
      myCalculator.appendChild(btn);
    }
    console.log(div);
  }

  console.log(output);
  
})

function btnHit(e){
  console.log(this.innerText)
  let myVal = this.innerText;
  let myCal = output.innerText;
  if(myCal == '0'){
    myCal = '';
  }
  
  if(myVal == '='){
    myCal = eval(myCal);
  }
  else{
  let lastChar = myCal.substring(myCal.length-1);
  if(operators.includes(myVal)){
    if(operators.includes(lastChar)){
      myCal = myCal.substring(0,myCal.length-1)
    }
    else{
      myCal = eval(myCal);
    }
  }
  myCal += myVal;
  }
  if(myVal == 'C'){
    myCal = 0;
  }
  output.innerText = myCal;
}