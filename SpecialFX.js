// Function to generate a random color :)
function getRandomColor() {

    const randomColor = `rgb(
        
                            ${Math.floor(Math.random() *256)},

                            ${Math.floor(Math.random() * 256)},

                            ${Math.floor(Math.random() * 256)})`;

    return randomColor; 
}

// Do this to Select the link ya silly goose
const link = document.querySelector('.linkedin-link');

// this will add the hover event thingy to change the color thingy link thing

link.addEventListener('mouseenter', () => {

    link.style.color = getRandomColor();

});