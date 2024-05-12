function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    var upRhombus = generateRhombus(pHeight, pColorEven, pColorOdd, pSymbol);
    var downRhombus = generateRhombus(pHeight, pColorEven, pColorOdd, pSymbol, true); 

    document.getElementById("upRight").innerHTML = upRhombus;
    document.getElementById("downRight").innerHTML = downRhombus;
}

function generateRhombus(pHeight, pColorEven, pColorOdd, pSymbol, reverse = false) {
    var rhombus = "";

    for (var i = 1; i <= pHeight; i++) {
        var spaces = pHeight - i;
        var symbols = i * 2 - 1;

        rhombus += "<p style='text-align: center;'>";

        // Add leading spaces
        for (var j = 0; j < spaces; j++) {
            rhombus += "&nbsp;&nbsp;";
        }

        // Add symbols
        for (var k = 0; k < symbols; k++) {
            rhombus += "<span style='color:" + ((k % 2 === 0) ? pColorEven : pColorOdd) + ";'>" + pSymbol + "</span>";
        }

        rhombus += "</p>";
    }

    if (reverse) {
        // Reverse the order of lines for bottom half
        rhombus = rhombus.split("</p>").reverse().join("</p>");
    }

    return rhombus;
}

