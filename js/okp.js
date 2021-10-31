function drop() {
	document.getElementById("d1").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dbtn')) {
    var dropdowns = document.getElementsByClassName("d1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}