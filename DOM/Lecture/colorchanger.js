var button = document.querySelector("button");
// var isPurple = false;

// function colorToggle(){
// 	if(isPurple){
// 		document.body.style.background = "white";
// 	}
// 	else{
// 		document.body.style.background = "purple";
// 	}
// }
function colorToggle(){
	document.body.classList.toggle("purple");
}

button.addEventListener("click", colorToggle);