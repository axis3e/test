//Primer prueba

const paragraph = document.getElementById("paragraph");
const button = document.getElementById("colorChangeButton");

const colors = () =>{
    let newColor = "";
 
    while (newColor.length != 6) {
        newColor += Math.floor(Math.random()*16).toString(16)
    }
    return "#" + newColor
};

/*
Tambien puede resolverse de la siguiente manera
    const colors = () =>{
        let newColor = "#";
        for (let i = 0; i < 6; i++) {
        newColor += Math.floor(Math.random()*16).toString(16)
        }
        return newColor;
    }
*/

button.addEventListener("click", function(){
paragraph.style.backgroundColor = colors();})