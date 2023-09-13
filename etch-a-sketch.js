// Created a webpage with a 16x16 grid of square divs.
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is ready.");

const rows = 16; // Creates a variable for number of rows (16)
const columns = 16; // Creates a variable for number of columns (16)

const grid = document.querySelector('.grid'); // Selects the div class "grid" from the HTML 

createGrid = () => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            
            // Add the mouseenter event listener here
            cell.addEventListener("mouseenter", function(event) {
                event.target.style.backgroundColor = "purple";
            });
            
            // Append the cell to the grid once
            grid.appendChild(cell);
        }
    }
}
    console.log("grid is ready.");

    function removeAllChildNodes(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }

const slider = document.querySelector ('.slider'); // Selects the input class "slider" from the HTML

slider.addEventListener('input', function(){
    let val = document.querySelector('.slider').value;
    // screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
});   

createGrid();

 });