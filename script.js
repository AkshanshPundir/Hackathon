function submitRequest(){

let text =
document.getElementById("request").value.toLowerCase();

if(
text.includes("towel") ||
text.includes("housekeeping")
){
let li=document.createElement("li");
li.innerText=text;
document
.getElementById("housekeeping")
.appendChild(li);
}

if(
text.includes("pizza") ||
text.includes("food")
){
let li=document.createElement("li");
li.innerText=text;
document
.getElementById("kitchen")
.appendChild(li);
}

alert("Request Processed");
}
