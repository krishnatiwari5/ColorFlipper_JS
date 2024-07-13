
let hex = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];


const button = document.querySelector('.btn');
const colorValue = document.getElementById('color');

button.addEventListener('click', function() {
    let hexName = '#';
    for(let i=0; i<6; i++){
        hexName += hex[getColorIndex()];
    }
 colorValue.textContent = hexName;
 document.body.style.backgroundColor = hexName;
//     document.body.style.backgroundColor = colors[getColorIndex()];
// colorValue.textContent = colors[getColorIndex()]  
})

function getColorIndex() {
    return Math.floor(Math.random() * hex.length);
} 