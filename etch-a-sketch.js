// Created a webpage with a 16x16 grid of square divs.
document.addEventListener("DOMContentLoaded", function() {

const rows = 16; // Creates a variable for number of rows (16)
const columns = 16; // Creates a variable for number of columns (16)

const grid = document.querySelector('.grid'); // Selects the div class "grid" from the HTML 

createGrid = () => {
    for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

    // Changes the cell to a random colour when mouse hovers over
    function randomColor() {
        let color = [];
        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 256));
        }
        return 'rgb(' + color.join(', ') + ')';
        } 
    
    // // Added the mouseenter event listener
    cell.addEventListener("mouseenter", function(event) {
        event.target.style.backgroundColor = randomColor();
    });
    
    // Appends the cell to the grid once
    grid.appendChild(cell);
    }
    }
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

// Code for the slider to change the size of the cell and background colour whem mouse hovers over
const slider = document.querySelector ('.slider'); // Selects the input class "slider" from the HTML

slider.addEventListener('input', function(){
    let val = document.querySelector('.slider').value;
    // screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');

        // Function created so that the random colour of the cell to be selected when cell size changes
        function randomColor() {
            let color = [];
            for (let i = 0; i < 3; i++) {
              color.push(Math.floor(Math.random() * 256));
            }
            return 'rgb(' + color.join(', ') + ')';
          } 

        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randomColor();
        })
        grid.appendChild(div); 
    }
});   

createGrid();

 });

 