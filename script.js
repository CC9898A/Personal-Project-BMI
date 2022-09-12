
function calculate() {
var height = document.getElementById("height").value
var wheight = document.getElementById("wheight").value

var a = height*height;
var b = wheight/a
var stamp = document.createElement("p")
stamp.innerText = b;
document.body.appendChild(stamp)

if (b>25) {
var element =   document.createElement("p")
element.innerText = "Sei in sovrappeso";
document.body.appendChild(element);
}
if (b<25) {
    var element =   document.createElement("p")
element.innerText = "Sei Sottopeso";
document.body.appendChild(element);

}

}
