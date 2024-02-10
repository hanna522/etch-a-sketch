document.addEventListener("DOMContentLoaded", function() {
    const girdContainer = document.getElementById("grid-container");

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div'); // create a new div element
        square.classList.add('square'); // add the 'square' class to the div
        girdContainer.appendChild(square); //append the div to the document body
        
        // Hovering effect
        square.addEventListener('mouseenter', () =>{
            square.style.backgroundColor = 'pink';
        })
        square.addEventListener('mouseleave', () => {
            square.style.backgroundColor = '';
        })
    };

    const btn = document.getElementById('popup-button');

    btn.addEventListener('onclick')

});