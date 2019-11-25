//javascript code
function checken() {
    var saldo = document.getElementById("saldo").value;

    if(saldo<25) {
        document.getElementById("tekst").innerHTML = "Sorry, u hebt te weinig saldo !";
    } else {
        document.getElementById("tekst").innerHTML = "uw saldo is prima !"
    }
}