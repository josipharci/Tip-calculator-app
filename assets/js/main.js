
const num1 = document.getElementById("bill");
const num2 = document.getElementById("numberPeople");
const num3 = document.getElementById("tips");
const output1 = document.getElementById("tipAmount");
const output2 = document.getElementById("total");
const sub = document.getElementById("Enter");


function addTip() {
    let tip = document.getElementById("tips");
  
    tip.forEach((item) => {
      item.addEventListener("click", (event) => {
        console.log(item.value);
      });
    });
}

function task1(a,b,c){
    var a = num1.value;
    var b = num2.value;
    var c = num3.value / 100;
    var x = a / b * c ;
    output1.innerText = '$' + x;
}

sub.addEventListener('click',task1);

