
setTimeout(function(){

		for(i= 6;i<20;i++){

    		document.getElementsByTagName("path")[i].setAttribute("id" , `p${i}`);
    	}

		document.getElementById("p6").addEventListener("click", function () {display('box1')});

}, 1000)


window.onclick = function(event) {

 	if (!event.target.matches('path')) {

    	var dropdowns = document.getElementsByClassName("box1");

    	var i;

    	for (i = 0; i < dropdowns.length; i++) {

    		var openDropdown = dropdowns[i];

    		if (openDropdown.classList.contains('show')) {

        		openDropdown.classList.remove('show');

    		}
    	}
	}
}

function display(box){

	document.getElementById(box).classList.toggle("show")
					
}
