
const num1 = document.getElementById("bill");
const num2 = document.getElementById("numberPeople");
const output1 = document.getElementById("tipAmount");
const output2 = document.getElementById("total_a");
const sub = document.getElementById("Enter");
const num3 = document.getElementById("custom");
const reset = document.getElementById("reset");
const NumberError = document.getElementById("ErrorNum");




function myFunction(val) {
    document.getElementById('custom').value = val;
    document.getElementById('custom').style.color = "rgba(0, 0, 0, 0.0)";
}

function task(a,b,c){

    var a = num1.value;
    var b = num2.value;
    var c = num3.value / 100;
    var x = a / b * c ;

    if(b === "0"){
        NumberError.innerHTML = "Can 't be zero";
        num2.style.borderColor = "red";
        num2.style.border = "1px solid";
    }else{
        output1.innerText = '$' + x.toFixed(2);
        var y= a / b + x;
        output2.innerText = '$' + y.toFixed(2);
    } 
}

sub.addEventListener('click', task);

function onClick(btn){
    btn.target.style.backgroundColor = 'hsl(172, 67%, 45%';
    btn.target.style.Color = '#000';
  }

function sendform(inputvalue){
    if (document.getElementById("bill").value !== "" && 
     document.getElementById("numberPeople").value !== "" && document.getElementById("custom").value !== "") {
     document.getElementById("Enter").click();
    }
}


