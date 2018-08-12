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

var engine =  {
    numInput: () => {
        var itemClicked = this.textContent
    
        if (itemDisplay.length < 17) {
            if(typeof itemDisplay[0] !== "number")
            itemDisplay.push(itemClicked)
        }

        if (itemDisplay.length >= 14)
        $('#currentValue').css({"font-size":"36px","position":"absolute","top":"13px"})

        if(itemDisplay.length == 17) {
        err.textContent = "Maximum value of 16";
        throw new Error("Maximum value of 16");
        }
        
        $('#currentValue').html(itemDisplay)
    },
    operate: () => {
        
    }
}