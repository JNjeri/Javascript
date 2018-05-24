console.log("app is running")

let lights = document.querySelectorAll(".circle")

function switchOff(light) {
	light.classList.add("off")

}

function switchOnn(light){
	light.classList.remove("off")

}

lights.forEach(function(light) {
	switchOff(light);
})

switchOnn(lights[0]);

let current = 0;
setInterval(function(){
	switchOff(lights[current]);

	current++;

	if (current>=lights.length) {
		current = 0
	}

	switchOnn(lights[current]);
},2000)
