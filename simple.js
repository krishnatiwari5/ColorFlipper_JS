const colors = ['red', 'yellow', 'green', 'rgb(250, 154, 255)']

const button = document.querySelector('.btn');
const colorValue = document.getElementById('color');

button.addEventListener('click', function() {
 const colorName = document.body.style.backgroundColor = colors[getColorIndex()];
colorValue.textContent = colorName;
})

function getColorIndex() {
    return Math.floor(Math.random() * colors.length);
}