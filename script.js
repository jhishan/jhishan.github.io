// Helper functions

// knuth shuffle http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 13)];
    }
    return color;
}


// Start box animation
var bigBox = document.getElementById('bigBox');

/*
   Append all fo the boxes onto the page
   Set up links for the three tabs
*/
var numberOfSquares = 45;
for (var t = 0; t < numberOfSquares; t++) {
    var box = document.createElement('div');
    box.className = 'square';
    if (t == 30) {
        var newBox = document.createElement('a');
        newBox.appendChild(box);
        box.setAttribute('data-name', 'about')
        newBox.classList.add('button');
        bigBox.appendChild(newBox);
    } else if (t == 31) {
        var newBox = document.createElement('a');
        newBox.appendChild(box)
        box.setAttribute('data-name', 'work')
        newBox.classList.add('button');
        bigBox.appendChild(newBox);
    } else if (t == 32) {
        var newBox = document.createElement('a');
        newBox.appendChild(box)
        box.setAttribute('data-name', 'photos')
        newBox.classList.add('button');
        bigBox.appendChild(newBox);
    } else {
        bigBox.appendChild(box);
    }
}

var buttons = document.getElementsByClassName("button")
var mainContentBoxes = document.getElementsByClassName("mainContentBoxes");
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(this.firstChild.getAttribute('data-name'));

        // remove highlight from selected item, add it to newly selected item
        if (!this.firstChild.classList.contains("selectedButton")) {
            for (var t = 0; t < buttons.length; t++) {
                buttons[t].firstChild.classList.remove("selectedButton");
                mainContentBoxes[t].classList.add("displayNone");
            }
            this.firstChild.classList.add("selectedButton");

            // get new tab to display it
            var name = this.firstChild.getAttribute('data-name');
            var newTab = document.getElementById(name);
            newTab.classList.remove("displayNone");
        }

    });
}

// all of the sqaures on the screen, this is available now that we have appended all of them to the page
var squares = document.getElementsByClassName("square");

/*
    Touch up function no longer needs to be run on interval
    Make it a simple for loop
*/
var touchUp = function() {
    var arrayIndexes = [];
    for (var i = 0; i < numberOfSquares; i++) {
        arrayIndexes.push(i);
    }
    var currentBox;
    var start = 0
    var arrayIndexes = shuffle(arrayIndexes);
    var easeOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 17, 26, 35, 44, 43, 42, 41, 40, 39, 38, 37, 36, 27, 18, 9, 10, 11, 12, 13, 14, 15, 16, 25, 34, 33, 32, 31, 30, 29, 28, 19, 20, 21, 22, 23, 24];
    easeOrder = shuffle(easeOrder);
    rID3 = setInterval(function() {
        currentBox = squares[easeOrder[start]];
        currentBox.style.transitionDuration = ".2s";
        start += 1;
        if (start == numberOfSquares) {
            for (var i = 0; i < squares.length; i++) {
                squares[i].style.transitionDuration = ".3s";
            }
            // add hover property after animations are over
            var css = '.square:hover{ margin: 14px; }';
            style = document.createElement('style');
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            clearInterval(rID3);
        }

    }, 2);
}

/*
    Animation beings below
*/

var loopsElapsed = 0;
var addInterval = 25;
var stepValue = 7;
var letterIndex = 0;
var startBoxIndex = 19;
var nameLetters = ['J', 'H', 'I', 'S', 'H', 'A', 'N'];
var boxChangeSpeed = 35;
var randomOpacity;


var wrapUp = function() {
    var arrayIndexes = [];
    for (var i = 0; i < numberOfSquares; i++) {
        arrayIndexes.push(i);
    }

    var currentBox;
    var start = 0
    var arrayIndexes = shuffle(arrayIndexes);
    var loopsElapsed = 0;
    var letterIndex = 0;
    var startBoxIndex = 19;

    rID2 = setInterval(function() {
        if (startBoxIndex < 33) {
            if (startBoxIndex < 26) {
                var l = document.createElement('p');
                l.className = "letter";
                l.textContent = nameLetters[letterIndex];
                var parentBox = squares[startBoxIndex];
                parentBox.style.opacity = .7;
                parentBox.classList.add('letterSquare');
                parentBox.appendChild(l);
                parentBox.style.backgroundColor = "white";
                letterIndex += 1;
            } else {
                if (startBoxIndex == 30) {
                    squares[startBoxIndex].style.backgroundImage = "url('img/person.svg')";
                    squares[startBoxIndex].style.backgroundRepeat = "no-repeat";
                    squares[startBoxIndex].style.backgroundSize = '70px';
                    squares[startBoxIndex].style.backgroundPosition = "center";
                    squares[startBoxIndex].style.backgroundColor = "#F01930";
                    squares[startBoxIndex].style.opacity = .6;
                    squares[startBoxIndex].classList.add("buttonSquare");
                    squares[startBoxIndex].classList.add("selectedButton");
                } else if (startBoxIndex == 31) {
                    squares[startBoxIndex].style.backgroundImage = "url('img/experience.svg')";
                    squares[startBoxIndex].style.backgroundRepeat = "no-repeat";
                    squares[startBoxIndex].style.backgroundSize = '70px';
                    squares[startBoxIndex].style.backgroundPosition = "center";
                    squares[startBoxIndex].style.backgroundColor = "#F01930";
                    squares[startBoxIndex].style.opacity = .6;
                    squares[startBoxIndex].classList.add("buttonSquare");

                } else if (startBoxIndex == 32) {
                    squares[startBoxIndex].style.backgroundImage = "url('img/photo.svg')";
                    squares[startBoxIndex].style.backgroundRepeat = "no-repeat";
                    squares[startBoxIndex].style.backgroundSize = '70px';
                    squares[startBoxIndex].style.backgroundPosition = "center";
                    squares[startBoxIndex].style.backgroundColor = "#F01930";
                    squares[startBoxIndex].style.opacity = .6;
                    squares[startBoxIndex].classList.add("buttonSquare");
                }
            }
            startBoxIndex += 1;
        }

        var randomNum = Math.floor(Math.random() * 10) + 1
        if (randomNum <= 3) {
            randomOpacity = .5
        } else if (randomNum <= 6) {
            randomOpacity = .4
        } else {
            randomOpacity = .3
        }
        currentBox = squares[arrayIndexes[start]];
        var currentBoxIndex = arrayIndexes[start];
        if (currentBox.classList.contains('letterSquare') == false && (arrayIndexes[start] < 19 || arrayIndexes[start] > 25)) {
            if (currentBoxIndex == 30 || currentBoxIndex == 31 || currentBoxIndex == 32) {
                currentBox.style.opacity = .6;

            } else {
                currentBox.style.backgroundColor = getRandomColor();
                currentBox.style.opacity = randomOpacity;
            }
        }

        start += 1;
        loopsElapsed += 1;
        if (start >= squares.length) {
            touchUp();
            clearInterval(rID2);
        }

    }, 30);
};
wrapUp();