var body = document.querySelector("body")
var display = document.getElementById("display");

var equals = document.getElementById("equals")
var add = document.getElementById("add")
var minus = document.getElementById("minus")
var mult = document.getElementById("mult")
var div = document.getElementById("div")

var sq = document.getElementById("x2");
var cu = document.getElementById("x3");
var sqRt = document.getElementById("sqrt");
var xneg = document.getElementById("xneg");

var err = document.createElement("p");

err.setAttribute("id","error");
display.appendChild(err);


var itemDisplay = [] , 
    joinItems,
    itemClicked