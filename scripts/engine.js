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
        
    },
    addition: () => {
        joinItems= itemDisplay.join("")
        while(itemDisplay.length > 0) {
            itemDisplay.pop()
            $('#currentValue').html(itemDisplay)
        }
        $('#calc').html(`${joinItems} +`)
    },
    division: () => {
        joinItems= itemDisplay.join("")
        while(itemDisplay.length > 0) {
            itemDisplay.pop()
            $('#currentValue').html(itemDisplay)
        }
        $('#calc').html(`${joinItems} /`)
    },
    multiply: () => {
        joinItems= itemDisplay.join("")
        while(itemDisplay.length > 0) {
            itemDisplay.pop()
            $('#currentValue').html(itemDisplay)
        }
        $('#calc').html(`${joinItems} *`)
    },
    subtract: () => {
        joinItems= itemDisplay.join("")
        while(itemDisplay.length > 0) {
            itemDisplay.pop()
            $('#currentValue').html(itemDisplay)
        }
        $('#calc').html(`${joinItems} -`)
    },
    cube: () => {
        joinItems = itemDisplay.join("")
        let cube = Math.pow(joinItems, 3)

        while(itemDisplay.length > 0) {
            itemDisplay.pop()
            $('#currentValue').html(itemDisplay)
        }

        itemDisplay.push(cube)
        err.textContent = ""
        
        if (cube.toString().length >= 14)
        $('#currentValue').css({"font-size":"36px","position":"absolute","top":"13px"})

        if (cube.toString().length > 16)
        $('#currentValue').css({"font-size":"34px","position":"absolute","top":"18px"})

        if (cube.toString().length >= 18)
        $('#currentValue').css({"font-size":"28px","position":"absolute","top":"18px"})

        if (cube.toString().length >= 21)
        $('#currentValue').css({"font-size":"26px","position":"absolute","top":"18px"})

        console.log(cube.toString().length)

        $('#calc').html(`Cube(${joinItems})`)
        $('#currentValue').html(itemDisplay)
    },
    negative: () => {
        joinItems = itemDisplay.join("")
        let neg = 1 / joinItems

        while(itemDisplay.length > 0) {
            itemDisplay.pop()
            $('#currentValue').html(itemDisplay)
        }

        itemDisplay.push(neg)
        err.textContent = ""

        if (neg.toString().length >= 14)
        $('#currentValue').css({"font-size":"36px","position":"absolute","top":"13px"})

        if (neg.toString().length > 16)
        $('#currentValue').css({"font-size":"34px","position":"absolute","top":"18px"})

        if (neg.toString().length > 18)
        $('#currentValue').css({"font-size":"28px","position":"absolute","top":"18px"})

        if (neg.toString().length >= 21)
        $('#currentValue').css({"font-size":"26px","position":"absolute","top":"18px"})

        $('#calc').html(`1/(${joinItems})`)
        $('#currentValue').html(itemDisplay)
    },
    square: () => {
        joinItems = itemDisplay.join("")
        var square = Math.pow(joinItems, 2)

        while(itemDisplay.length > 0) {
            itemDisplay.pop()
            $('#currentValue').html(itemDisplay)
        }

        itemDisplay.push(square)
        err.textContent = ""

        if (square.toString().length >= 14)
        $('#currentValue').css({"font-size":"36px","position":"absolute","top":"13px"})

        if (square.toString().length > 16)
        $('#currentValue').css({"font-size":"34px","position":"absolute","top":"18px"})

        if (square.toString().length > 18)
        $('#currentValue').css({"font-size":"28px","position":"absolute","top":"18px"})

        if (square.toString().length >= 21)
        $('#currentValue').css({"font-size":"26px","position":"absolute","top":"18px"})

        $('#calc').html(`Square(${joinItems})`)
        $('#currentValue').html(itemDisplay)
    },
    squareRoot: () => {
        joinItems = itemDisplay.join("")
        var squareRt = Math.sqrt(joinItems)

        while(itemDisplay.length > 0) {
            itemDisplay.pop()
            $('#currentValue').html(itemDisplay)
        }

        itemDisplay.push(squareRt)
        err.textContent = ""

        if (squareRt.toString().length > 14)
        $('#currentValue').css({"font-size":"36px","position":"absolute","top":"13px"})

        if (squareRt.toString().length > 16)
        $('#currentValue').css({"font-size":"34px","position":"absolute","top":"18px"})

        if (squareRt.toString().length > 18)
        $('#currentValue').css({"font-size":"28px","position":"absolute","top":"18px"})

        if (squareRt.toString().length >= 21)
        $('#currentValue').css({"font-size":"26px","position":"absolute","top":"18px"})

        $('#calc').html(`SquareRt(${joinItems})`)

        $('#currentValue').html(itemDisplay)
    },
    
}