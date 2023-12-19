// generate random color

const randomColor = function () {
    const hex ="0123456789ABCDEF";
    let color = "#"
    for(let i = 0; i< 6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};


// Define sdf() function before setInterval
const changeColor = function () {
    document.body.style.backgroundColor = randomColor();
};

// Start changing color using setInterval
let intervalId; // Variable to hold the interval ID

const startChangingColor = function () {
    intervalId = setInterval(changeColor, 1000);
};

// Stop changing color
const stopChangingColor = function () {
    clearInterval(intervalId);
};


document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)