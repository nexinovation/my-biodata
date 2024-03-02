document.getElementById("changeColorBtn").addEventListener('click', function() {
    var header = document.querySelector("header");
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    header.style.backgroundColor = randomColor;
});