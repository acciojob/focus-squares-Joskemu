//your JS code here. If required.
// Function to change the color of the squares
function changeColorOnHover(event) {
    const allSquares = document.querySelectorAll('.focus-sq');
    
    allSquares.forEach(square => {
        // Change color of squares to Coffee when one square is hovered
        if (square !== event.target) {
            square.style.backgroundColor = '#6F4E37';  // Coffee color
        }
    });
}

// Function to reset the color of all squares when hover ends
function resetColor() {
    const allSquares = document.querySelectorAll('.focus-sq');
    
    allSquares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA';  // Lavender color
    });
}

// Add event listeners to the squares
const squares = document.querySelectorAll('.focus-sq');

squares.forEach(square => {
    // On mouse over, change colors
    square.addEventListener('mouseover', changeColorOnHover);

    // On mouse out, reset colors
    square.addEventListener('mouseout', resetColor);
});
