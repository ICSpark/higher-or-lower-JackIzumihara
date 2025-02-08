// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 100;
var nextRandom = Math.floor(Math.random() * range + 1);
var score = 0;



// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button
function higher() {
    if (random > nextRandom) {
        window.alert("Wrong, It isn't bigger!");
        window.alert(nextRandom);
      }
      else if (random < nextRandom) {
        window.alert("Correct, It is bigger!");
        window.alert(nextRandom);
        score = score + 1;
        window.alert("score is now:");
        window.alert(score);
      }
      else {
        window.alert("They are the same!");
      }
      generateRandom()
}

// Function for the lower button
function lower() {
    if (random < nextRandom) {
        window.alert("Wrong, It isn't smaller!");
        window.alert(nextRandom);
      }
      else if (random > nextRandom) {
        window.alert("Correct, It is smaller!");
        window.alert(nextRandom);
        score = score + 1;
        window.alert("score is now:");
        window.alert(score);
      }
      else {
        window.alert("They are the same!");
      }
      generateRandom()
}

//Generate a number to start the game!
generateRandom();