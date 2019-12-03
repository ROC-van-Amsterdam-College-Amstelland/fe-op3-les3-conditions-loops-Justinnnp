//javascript code
var tekst = "";
for (var i = 1; i <= 100; i += 1) {

    tekst += i + "<br>";

    if (i % 3) {
        tekst += "VET" + "<br>";
    } else if (i % 5) {
        tekst += "COOL"  + "<br>";
    }

}

document.getElementById("uitkomst").innerHTML = tekst;