//javascript code
function checken() {
    var saldo = document.getElementById("saldo").value;

    if(saldo == 500) {
        document.getElementById("tekst").innerHTML = "Er is 500 euro op je rekening gestort !";
    } 
    else if(saldo >= 500) {
        document.getElementById("tekst").innerHTML = "Er is 500 euro op je rekening en een bonus !"
    } else {
        document.getElementById("tekst").innerHTML = "Sorry, er is geen geld op je tekening gestort !"
    }
}