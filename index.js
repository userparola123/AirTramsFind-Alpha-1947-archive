function startMenuNotFocus(){
  var startMenu = document.getElementById("startMenu");
  startMenu.style.display = "none";
  startMenu.style.opacity = "0";
  startMenu.style.pointerEvents = "none";
}




function search() {

// summary results

var searchSummary = document.getElementById("searchSummary");

var brunoSearchResult = document.getElementById("brunoSearchResult");
var brunoMessage = document.getElementById("brunoMessage");

searchSummary.style.display = "block";

brunoSearchResult.style.display = "block";

brunoMessage.style.display = "block";

  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}







        //Make the DIV element draggagle:
        dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv1"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}






var closeIcon = document.getElementById("closeIcon");

var mazeApp = document.getElementById("mazeApp");

var mazeGame = document.getElementById("mazeGame");

var snakeGame = document.getElementById("snakeGame");

var fullWindowIcon = document.getElementById("fullWindowButton");


var smallWindowIcon = document.getElementById("smallWindowButton");

var movingContainer = document.getElementById("wrapperMovingContainer");

function openWindowMazeGame(){
  mazeGame.style.display = "block";
  mazeGame.style.transition = "1s";
  mazeApp.style.display = "block";
}

function closeWindowMazeGame(){
  mazeGame.style.display = "none";
  mazeGame.style.transition = "1s";
  mazeApp.style.display = "none";
}


function openWindowSnakeGame(){
  snakeGame.style.display = "block";
  snakeGame.style.transition = "1s";
  mazeApp.style.display = "block";
}

function closeWindowSnakeGame(){
  snakeGame.style.display = "none";
  snakeGame.style.transition = "1s";
  mazeApp.style.display = "none";
}

// START MENU EFFECTS - jQuery

$(document).ready(function(){
  $(".startMenuButton").click(function(){
    $(".startMenu").show();
  });
});



$(document).ready(function(){
  $(".closeButton").click(function(){
    $(".startMenu").hide();
  });
});

// HOVER OVER CONTENT START MENU - jQuery

$(document).ready(function(){
  $(".computer").hover(function(){
    $(".imageHoverIcons").css("background", "url(computer-icon.png)");
    }, function(){
    $(".imageHoverIcons").css("background", "url(controlPanel-icon.png)");
  });
});

$(document).ready(function(){
  $(".mazeGame").hover(function(){
    $(".imageHoverIcons").css("background", "url(games-icon.png)");
    }, function(){
    $(".imageHoverIcons").css("background", "url(controlPanel-icon.png)");
  });
});



// modals JavaScript


function initializeModal(modalID, buttonID) {
  // Get the modal element
  var modal = document.getElementById(modalID);

  // Get the button that opens the modal
  var btn = document.getElementById(buttonID);

  // Get the <span> element that closes the modal
  var span = modal.querySelector('.close');

  // When the user clicks on the button, open the modal
  btn.addEventListener('click', function() {
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', function() {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

window.addEventListener('load', function() {
  initializeModal('myModal', 'myBtn');
 
});