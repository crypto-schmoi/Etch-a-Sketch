// Create a webpage with a 16x16 grid of square divs.

// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
const rows = 16; // Creates a variable for number of rows (16)
const columns = 16; // Creates a variable for number of columns (16)

const grid = document.querySelector('.grid'); // Selects the div class from the HTML 

function createRows() {
    for (let i = 0; i < 'rows'; i++) { // Creates rows using the number of rows from variable
        const cell = document.createElement('div'); // Adds div elements
        grid.appendChild(cell);
    }
}

function createColumns() {
    for (let j = 0; j < 'columns'; j++) { // Creates columns using the number of rows from variable
        const cell = document.createElement('div'); // Adds div elements 
        grid.appendChild(cell);
    }
}

// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

// You need to make the divs appear as a grid (versus just one on each line). This is a perfect opportunity to apply what you have learned about flexbox.
// Be careful with borders and margins, as they can adjust the size of the squares!