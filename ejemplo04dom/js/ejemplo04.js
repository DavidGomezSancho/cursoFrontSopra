var elementH1 = document.createElement("h1");
var textH1 = document.createTextNode("Un título");
elementH1.appendChild(textH1);
var body = document.body;
body.appendChild(elementH1);

//.getElementsByClassName("titulo");
//.getElementsByTagName("li");
//document.getElementsByName("input");
var parrafos = document.querySelectorAll("body p");

console.log("Primero: "+parrafos.item(0));
console.log("Primero: "+parrafos[1]);