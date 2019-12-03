//javascript code
var tekst ="";
for (var i = 0; i <= 50; i += 1) {

    tekst += i + "<br>";

    if(i == 25) {
        parseInt(alert("Het getal 25 is net geen bullseye !"));
    }
    console.log(i);
    

}

document.getElementById("uitkomst").innerHTML = tekst;