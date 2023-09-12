// Created a webpage with a 16x16 grid of square divs.
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is ready.");
const rows = 16; // Creates a variable for number of rows (16)
const columns = 16; // Creates a variable for number of columns (16)

const grid = document.querySelector('.grid'); // Selects the div class "grid" from the HTML 

function createGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) { // Creates rows using the number of rows from variable
        const cell = document.createElement('div'); // Adds div elements
        cell.classList.add('cell');
        grid.appendChild(cell);
        
// Added EventListeners for mouse hover so the background color will change to purple 
        cell.addEventListener("mouseenter", function() {
        cell.style.backgroundColor = "purple";
        });

        cell.addEventListener("mouseleave", function() { // EventListener added so when mouse moves the box goes back to white
        cell.style.backgroundColor = "white";
        });
     }
    }
}
createGrid();