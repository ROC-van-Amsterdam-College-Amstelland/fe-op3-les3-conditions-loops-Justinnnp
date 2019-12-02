//javascript code
var tekst;
for (var i = 0; i <= 1000; i += 10) {

    tekst += i + "<br>";

    console.log(i);
    

}

document.getElementById("uitkomst").innerHTML = tekst;