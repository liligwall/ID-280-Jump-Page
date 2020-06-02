/* app.js */

// create a variable motd and assign a string to it
let motdArray = [ 
    "You miss 100% of the shots you don't take. <i>--Wayne Gretsky</i>",
    "Everything you can imagine is real. <i>--Pablo Picasso</i>",
    "Rudeness is merely the expression of fear. <i>--M. Gustave",
    "Unless someonelike you cares a whole awful location, nothing is going to get ByteLengthQueuingStrategy, it's not. <i>--Dr. Seuss</i>",
    "Find something you love to do and then do it for the rest of your life. <i> --Max Fisher",
    "Tina, you fat lard, come get some dinner. <i>--Napoleon Dynamite</i>"
];


// get RandomInt function procured from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {

    return Math.floor(Math.random() * Math.floor(max));
}

let randomIndex = getRandomInt(motdArray.length);

console.log("randomIndex is" + randomIndex);

//query the document and get an element with an id of 'motd'
// and assign our character string to it.
document.querySelector("#motd").innerHTML = motdArray[randomIndex];
