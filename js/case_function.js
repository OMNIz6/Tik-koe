noHover();
simplemaps_countrymap.hooks.over_state = function(id){ showCases(id)}
simplemaps_countrymap.hooks.out_state = function(){noHover()}


function showCases(state){

	y = state;
	x = simplemaps_countrymap_mapdata.state_specific[y].name;

	document.getElementById('total').innerHTML = casedata.Myanmar[x].total;
	document.getElementById('active').innerHTML = casedata.Myanmar[x].active;
	document.getElementById('death').innerHTML = casedata.Myanmar[x].death;
	document.getElementById('recover').innerHTML = casedata.Myanmar[x].recover;
}

function noHover(){

	document.getElementById('total').innerHTML = casedata.Myanmar['Total'].total;
	document.getElementById('active').innerHTML = casedata.Myanmar['Total'].active;
	document.getElementById('death').innerHTML = casedata.Myanmar['Total'].death;
	document.getElementById('recover').innerHTML = casedata.Myanmar['Total'].recover;

}