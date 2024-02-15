document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector(".grid-container");
    const newGridButton = document.querySelector(".newGridButton");
    let isDrawing = false;
    let color = 'black';

    createGrid(16);

    function startDrawing(square) {
        isDrawing = true;
        square.style.backgroundColor = color;        
    }

    function Draw(square) {
        if (isDrawing) {
            square.style.backgroundColor = color;  
        }
    }

    function stopDrawing() {
        isDrawing = false;
    }

    function createGrid(size) {
        const squares = gridContainer.querySelectorAll('div');
        squares.forEach((div) => div.remove());
        gridContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.style.backgroundColor = "white";
            gridContainer.insertAdjacentElement("beforeend", square);

            square.addEventListener('mousedown', () => {
                startDrawing(square);
            });

            square.addEventListener('mouseup', () => {
                stopDrawing();
            });

            square.addEventListener('mousemove', () => {
                Draw(square);
            });
        }
    }

    function changeColor(newColor) {
        color = newColor;
    }
    
    const colorButtons = document.querySelectorAll('.colors button');
    colorButtons.forEach((button) => {
        button.addEventListener('click', function() {
            changeColor(this.className); 
        });
    });

    const eraseButton = document.querySelector('.options .eraser');
    eraseButton.addEventListener('click', () => {
        changeColor('white');
    })

    newGridButton.addEventListener('click', () => {
        let userInput = document.querySelector('.grid-size');
        let newSize = parseInt(userInput.value, 10);
        newSize = Math.min(newSize, 100);
        if (isNaN(newSize) || newSize <= 0) {
            alert("Please enter a valid positive number.");
            return;
        }

        createGrid(newSize);
    });
});
