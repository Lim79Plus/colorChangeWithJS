
document.getElementById("btnChangeColor").addEventListener("click", changeColor);

var jumbotronColor = document.getElementById("jumbotronColor")
function changeColor() {
    
    //// expected output: a number between 0 and 255
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    // the syntactic sugar ${expression}
    jumbotronColor.style.backgroundColor = `rgb(${r},${g},${b})`;

}