var currentTab = 0; // Current tab is set to be the first tab (0)
let j = 0;

showRecentNews ()

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("global-news-box");
  // Exit the function if any field in the current tab is invalid:
  
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function creatediv(datano,i){
    

    let newdiv = document.createElement("div");
    let span = document.createElement("span");
    span.classList.add('step')
    newdiv.classList.add('global-news-box');
    newdiv.classList.add('row');
    newdiv.classList.add('animated');
    newdiv.classList.add('fadeInRight');

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");
    let div7 = document.createElement("div");
    let img = document.createElement("img")
    let link = document.createElement("a");

    div1.classList.add('col-12');
    div1.classList.add('col-lg-6')
    div2.classList.add('global-news-item');
    div3.classList.add('global-img-header');
    div3.classList.add('row');
    div4.classList.add('global-news-img');
    div5.classList.add('global-news-info');
    div6.classList.add('global-news-heading');
    div7.classList.add('global-news-date');


    img.setAttribute('src', datano.imgurl);
    link.setAttribute('href', datano.detailurl)

    div6.innerHTML = datano.heading;
    div7.innerHTML = datano.date.getFullYear() + '.' + (datano.date.getMonth()+1) + '.' + datano.date.getDate();

    link.appendChild(div6);
    div5.appendChild(link);
    div5.appendChild(div7);
    div4.appendChild(img);
    div3.appendChild(div4);
    div3.appendChild(div5);
    div2.appendChild(div3);
    div1.appendChild(div2);

    if(document.getElementsByClassName("global-news-box")[j] === undefined){
      document.getElementById('main').appendChild(newdiv);
    }

    if(document.getElementsByClassName("global-news-box")[j].getElementsByClassName('global-news-item').length >= 10){
      document.getElementById('main').appendChild(newdiv);
      return j++;
    }
    document.getElementsByClassName("global-news-box")[j].appendChild(div1);
    
    
}



function newsdisplay(reg){



  removelements();

   changeHeader(simplemaps_worldmap_mapdata.regions[reg].name)

    for (var i = 0; i < newsdata.length; i++) {
        if (newsdata[i].region === simplemaps_worldmap_mapdata.regions[reg].name){
            let x = newsdata[i];
            creatediv(x);

        }
    }
  currentTab = 0
  showTab(currentTab);
  j = 0;

  window.scrollBy(0,500); // horizontal and vertical scroll increments
  scrolldelay = setTimeout('pageScroll()',1000); // scrolls every 100 milliseconds
}


function removelements(){

    let x = document.getElementsByClassName("global-news-box");
    let y = document.getElementsByClassName("step");
    
    while (x.length >0){
        x[0].remove()
    }
     while (y.length >1){
        y[0].remove()
    }

}


showRecentNews ()

simplemaps_worldmap.hooks.zoomable_click_region =function(id){ newsdisplay(id)}


setTimeout(function(){
    document.getElementsByTagName("path")[5].setAttribute("id" , `p5`);
    document.getElementById("p5").addEventListener("click", function () {showRecentNews ()});
}, 1000)


function showRecentNews () {
    removelements()

    changeHeader('global')

    const regions = ["North America","South America","Europe","Africa","Asia","Australia"]
    
    for (var i = 0; i < newsdata.length; i++) {
        for (let k = 0; k < regions.length; k++){
          let y = regions[k];
          if (newsdata[i].region === regions[k]){
            let x = newsdata[i];
            creatediv(x);

          }
      }
    }
    currentTab = 0
    showTab(currentTab);
    j = 0;
}


function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("global-news-box");
  x[n].style.display = "flex";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "inline";
  }
  // ... and run a function that displays the correct step indicator:
}

function changeHeader(h){
  document.getElementById('newsHeader').innerHTML = `${h} News` ;
}