
const num1 = document.getElementById("bill");
const num2 = document.getElementById("numberPeople");
const output1 = document.getElementById("tipAmount");
const output2 = document.getElementById("total_a");
const sub = document.getElementById("Enter");
const num3 = document.getElementById("custom");
const reset = document.getElementById("reset")



function myFunction(val) {
    document.getElementById('custom').value = val;
}

function task(a,b,c){
    

    var a = num1.value;
    var b = num2.value;
    var c = num3.value / 100;
    var x = a / b * c ;
    output1.innerText = '$' + x.toFixed(2);

    var y= a / b + x;
    output2.innerText = '$' + y.toFixed(2);
}

sub.addEventListener('click', task);

function onClick(event){
    event.target.style.backgroundColor = 'hsl(172, 67%, 45%';
    event.target.style.Color = '#000';
  }