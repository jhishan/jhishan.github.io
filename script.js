
// knuth shuffle http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
}
var bigBox = document.getElementById('bigBox');

var numberOfSquares = 45;
for(var t = 0; t < numberOfSquares; t++){
    var box = document.createElement('div');
    box.className = 'square';
    if(t==30){
        var newBox = document.createElement('a');
        newBox.setAttribute("href", "./about.html");
        newBox.appendChild(box)
        //box.classList.add('borderHover');
        bigBox.appendChild(newBox);
    }else if(t==31){
        var newBox = document.createElement('a');
        newBox.setAttribute("href", "http://yahoo.com");
        newBox.appendChild(box)
        //box.classList.add('borderHover');
        bigBox.appendChild(newBox);
    }else if(t==32){
        var newBox = document.createElement('a');
        newBox.setAttribute("href", "http://bing.com");
        newBox.appendChild(box)
        //box.classList.add('borderHover');
        bigBox.appendChild(newBox);
    }else{
        bigBox.appendChild(box);
    }
}
var squares = document.getElementsByClassName("square");

var addIcons = function(){
    squares[30].id = "aboutLink";
    squares[30].style.backgroundImage = "url('img/person.svg')";
    squares[30].style.backgroundRepeat = "no-repeat";
    squares[30].style.backgroundSize = '70px';
    squares[30].style.backgroundPosition = "center";
    squares[30].style.backgroundColor = "#F01930";
    squares[31].style.backgroundImage = "url('img/experience.svg')";
    squares[31].style.backgroundRepeat = "no-repeat";
    squares[31].style.backgroundSize = '70px';
    squares[31].style.backgroundPosition = "center";
    squares[31].style.backgroundColor = "#F01930";
    squares[32].style.backgroundImage = "url('img/photo.svg')";
    squares[32].style.backgroundRepeat = "no-repeat";
    squares[32].style.backgroundSize = '70px';
    squares[32].style.backgroundPosition = "center";
    squares[32].style.backgroundColor = "#F01930";
}

var touchUp = function(){
    var arrayIndexes = [];
    for(var i = 0; i < numberOfSquares; i++){
        arrayIndexes.push(i);
    }
    var currentBox;
    var start = 0
    var arrayIndexes = shuffle(arrayIndexes);
    var easeOrder = [0,1,2,3,4,5,6,7,8,17,26, 35,44,43,42,41,40,39,38,37,36,27,18,9,10,11,12,13,14,15,16,25,34,33,32,31,30,29,28,19,20,21,22,23,24];
    easeOrder = shuffle(easeOrder);
    rID3 = setInterval(function(){

        currentBox = squares[easeOrder[start]];
        currentBox.style.borderWidth = 0;
        if(currentBox.classList.contains('letterSquare') == false){
            currentBox.style.opacity = .6;
        }
        currentBox.style.transitionDuration = ".2s";
        start += 1;
        if(start == numberOfSquares){
            for(var i = 0; i < squares.length; i++){
                squares[i].style.transitionDuration = ".3s";
            }
            // add hover property after animations are over
            var css = '.square:hover{ margin: 14px; }';
            style = document.createElement('style');
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);

            addIcons();

            clearInterval(rID3);
        }

    },40);
}

var loopsElapsed = 0;
var addInterval = 25;
var stepValue = 7;
var letterIndex = 0;
var startBoxIndex = 19;
var nameLetters = ['J','H','I','S','H','A','N'];
var boxChangeSpeed = 35;
var randomOpacity;


var wrapUp = function(){
    var arrayIndexes = [];
    for(var i = 0; i < numberOfSquares; i++){
        arrayIndexes.push(i);
    }

    var currentBox;
    var start = 0
    var arrayIndexes = shuffle(arrayIndexes);
    var loopsElapsed = 0;
    var letterIndex = 0;
    var startBoxIndex= 19;

    rID2 = setInterval(function(){

        if(startBoxIndex < 26){
            var l = document.createElement('p');
            l.className = "letter";
            l.textContent = nameLetters[letterIndex];
            var parentBox = squares[startBoxIndex];
            parentBox.style.opacity = .7;
            parentBox.classList.add('letterSquare');
            parentBox.appendChild(l);
            parentBox.style.backgroundColor = "white";
            startBoxIndex += 1;
            letterIndex+=1;
        }

        var randomOpacity = (Math.random() * (0.7 - 0.3)).toFixed(1);
        currentBox = squares[arrayIndexes[start]];
        var currentBoxIndex = arrayIndexes[start];
        if(randomOpacity != 0){
            if(currentBox.classList.contains('letterSquare') == false && (arrayIndexes[start] < 19 || arrayIndexes[start] > 25)){
                currentBox.style.opacity = randomOpacity;
                if(currentBoxIndex == 30 || currentBoxIndex == 31 || currentBoxIndex == 32){
                  if(currentBoxIndex == 30){
                    //currentBox.style.backgroundImage = "url('img/person.svg')";
                    currentBox.style.backgroundRepeat = "no-repeat";
                    currentBox.style.backgroundSize = '70px';
                    currentBox.style.backgroundPosition = "center";
                    currentBox.style.backgroundColor = "#F01930";
                  }
                  if(currentBoxIndex == 31){
                    //currentBox.style.backgroundImage = "url('img/experience.svg')";
                    currentBox.style.backgroundRepeat = "no-repeat";
                    currentBox.style.backgroundSize = '70px';
                    currentBox.style.backgroundPosition = "center";
                    currentBox.style.backgroundColor = "#F01930";
                  }
                  if(currentBoxIndex == 32){
                    //currentBox.style.backgroundImage = "url('img/photo.svg')";
                    currentBox.style.backgroundRepeat = "no-repeat";
                    currentBox.style.backgroundSize = '70px';
                    currentBox.style.backgroundPosition = "center";
                    currentBox.style.backgroundColor = "#F01930";
                  }
                }else{
                  currentBox.style.backgroundColor = getRandomColor();
                }
            }
        }else{
            if(currentBox.classList.contains('letterSquare') == false && (arrayIndexes[start] < 19 || arrayIndexes[start] > 25)){
              if(currentBoxIndex == 30 || currentBoxIndex == 31 || currentBoxIndex == 32){
                if(currentBoxIndex == 30){
                  //currentBox.style.backgroundImage = "url('img/person.svg')";
                  currentBox.style.backgroundRepeat = "no-repeat";
                  currentBox.style.backgroundSize = '70px';
                  currentBox.style.backgroundPosition = "center";
                  currentBox.style.backgroundColor = "#F01930";
                }
                if(currentBoxIndex == 31){
                  //currentBox.style.backgroundImage = "url('img/experience.svg')";
                  currentBox.style.backgroundRepeat = "no-repeat";
                  currentBox.style.backgroundSize = '70px';
                  currentBox.style.backgroundPosition = "center";
                  currentBox.style.backgroundColor = "#F01930";
                }
                if(currentBoxIndex == 32){
                  //currentBox.style.backgroundImage = "url('img/photo.svg')";
                  currentBox.style.backgroundRepeat = "no-repeat";
                  currentBox.style.backgroundSize = '70px';
                  currentBox.style.backgroundPosition = "center";
                  currentBox.style.backgroundColor = "#F01930";
                }
              }else{
                currentBox.style.backgroundColor = getRandomColor();
              }
            }
        }

        start += 1;
        loopsElapsed += 1;
        if(start >= squares.length){
            touchUp();
            clearInterval(rID2);
        }

    }, 40);
};
wrapUp();
