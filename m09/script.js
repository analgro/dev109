document.addEventListener("DOMContentLoaded", function() {
    var clearButton = document.getElementById("clear");

    clearButton.addEventListener("click", function(event) {
        var dots = document.querySelectorAll(".dot");
        dots.forEach(function(dot) {
            dot.remove();
        });
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        var color = document.getElementById("color").value;
        var size = document.getElementById("size").value;
        
        var dot = document.createElement("div");
        dot.className = "dot";
        dot.style.width = size + "px";
        dot.style.height = size + "px";
        dot.style.backgroundColor = color;
        dot.style.left = (event.pageX - size / 2) + "px";
        dot.style.top = (event.pageY - size / 2) + "px";
        
        document.body.appendChild(dot);
    });
});

