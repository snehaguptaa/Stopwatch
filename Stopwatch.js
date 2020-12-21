
var imgcount=4;

var bg1 = "shorturl.at/hpAMP";
var bg2 = "shorturl.at/gosLP";
var bg3 = "shorturl.at/ablFX";
var bg4 = "shorturl.at/hGR02";
var bg5 = " ";
var bg6 = " ";

var images = ['bg1', 'bg2', 'bg3', 'bg4'];
var defaultBg = 'https://cdn.pixabay.com/photo/2016/11/29/06/37/abstract-1867838_960_720.jpg';

button.addEventListener('click', changeBackground);

function changeBackground(){
	var randomCount = (Math.floor(Math.random() * imgCount));
	document.getElementById('theme').setAttribute("style", "background-image: url("images[randomCount]");background-repeat: no-repeat;");
}



var selecte = document.getElementById("theme");

	function changeTheme() {

	  var strUser = selecte.options[selecte.selectedIndex];
	  if (strUser.value == "crystal") {
		document.body.style.backgroundImage = "url('shorturl.at/hpAMP')";
	  }
	  if (strUser.value == "flower") {
		document.body.style.backgroundImage = "url('shorturl.at/gosLP')";
	  }
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    span.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    