
document.getElementById("btnChangeColor").addEventListener("click", changeColor);

var jumbotronColor = document.getElementById("jumbotronColor")
function changeColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    
    jumbotronColor.style.backgroundColor=`rgb(${r},${g},${b})`;

}