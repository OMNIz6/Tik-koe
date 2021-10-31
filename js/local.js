load();

function load(){

        

        

		for(i= 0;i<document.getElementsByTagName("path").length;i++){

    		document.getElementsByTagName("path")[i].setAttribute("id" , `p${i}`);
    	}

        modelbox()
        showRecentNews ()

        document.getElementById("p1").addEventListener("click", function () {showRecentNews ()});
		document.getElementById("p2").addEventListener("click", function () {newsdisplay('Mon')});
        document.getElementById("p3").addEventListener("click", function () {newsdisplay('Rakhine')});
        document.getElementById("p4").addEventListener("click", function () {newsdisplay('Sagaing')});
        document.getElementById("p5").addEventListener("click", function () {newsdisplay('Ayeyarwady')});
        document.getElementById("p6").addEventListener("click", function () {newsdisplay('Chin')});
        document.getElementById("p7").addEventListener("click", function () {newsdisplay('Bago')});
        document.getElementById("p8").addEventListener("click", function () {newsdisplay('Yangon')});
        document.getElementById("p9").addEventListener("click", function () {newsdisplay('Kayin')});
        document.getElementById("p10").addEventListener("click", function () {newsdisplay('Mandalay')});
        document.getElementById("p11").addEventListener("click", function () {newsdisplay('Kayar')});
        document.getElementById("p12").addEventListener("click", function () {newsdisplay('Tanintharyi')});
        document.getElementById("p13").addEventListener("click", function () {newsdisplay('Magway')});
        document.getElementById("p14").addEventListener("click", function () {newsdisplay('Shan')});
        document.getElementById("p15").addEventListener("click", function () {newsdisplay('Kachin')});


}

function creatediv(datano){


    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");
    let img = document.createElement("img")
    let link = document.createElement("a");

    div1.classList.add('news-item');
    div1.classList.add('animated');
    div1.classList.add('fadeInUp');
    div2.classList.add('img-header');
    div2.classList.add('row');
    div3.classList.add('news-img');
    div4.classList.add('news-info');
    div5.classList.add('news-heading');
    div6.classList.add('news-date');

    img.setAttribute('src', datano.imgurl);
    link.setAttribute('href', datano.detailurl)

    div5.innerHTML = datano.heading;
    div6.innerHTML = datano.date.getFullYear() + '.' + (datano.date.getMonth()+1)+ '.' + datano.date.getDate();

    link.appendChild(div5);
    div4.appendChild(link);
    div4.appendChild(div6);
    div3.appendChild(img);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div1.appendChild(div2);

    if (document.getElementsByTagName('body')[0].offsetWidth < 992) {
        
            document.getElementsByClassName("news-box")[1].appendChild(div1);

        }else{
            document.getElementsByClassName("news-box")[0].appendChild(div1);
        }
    
    responsive_newbox()
}



function newsdisplay(reg){

    removelements();

    changeHeader(reg);

    if (reg === 'Kayar' || reg === 'Magway' || reg === 'Tanintharyi'){

        let errordiv = document.createElement("div");
        let errordiv1 = document.createElement("div");
        errordiv.classList.add('news-item');
        errordiv1.classList.add('text-center');
        errordiv1.classList.add('error');
    
        errordiv1.innerHTML = "Sorry, we cannot find any COVID-19 news in this region.";

        errordiv.appendChild(errordiv1)

        if (document.getElementsByTagName('body')[0].offsetWidth < 992) {
        
            document.getElementsByClassName("news-box")[1].appendChild(errordiv);

        }else{
            document.getElementsByClassName("news-box")[0].appendChild(errordiv);
        }
    
        responsive_newbox()
    }

    for (var i = 0; i < newsdata.length; i++) {
        if (newsdata[i].region === reg){
            let x = newsdata[i];
            creatediv(x);
        }
    }
}


function removelements(){

    let x = document.getElementsByClassName("news-item")
    
    while (x.length >0){
         x[0].remove()
    }

}


function responsive_newbox(){

    modelbox()

    let x;

    setTimeout(function(){

        x =  document.getElementById("myanmar_holder").offsetHeight + document.getElementsByClassName('map-note')[0].offsetHeight - 5   

    document.getElementById("main").style.height = x+ "px";

}, 310)
    
}

function modelbox(){

    for (var i = 2; i < 15; i++) {
        if (document.getElementsByTagName('body')[0].offsetWidth < 992) {
        
            document.getElementById(`p${i}`).setAttribute('data-toggle','modal')
            document.getElementById(`p${i}`).setAttribute('data-target','#modalbox')
        
        }else{

            document.getElementById(`p${i}`).removeAttribute('data-toggle');

        }
    }
}

function showRecentNews () {
    removelements()
    changeHeader("Local");
    const regions = ['Kachin','Shan','Magway','Tanintharyi','Kayar','Mandalay','Kayin','Yangon','Bago','Chin','Ayeyarwady','Sagaing','Rakhine','Mon']
    for (var i = 0; i < newsdata.length; i++) {
        for (let j = 0; j < regions.length; j ++){
            let y = regions[j];
            if (newsdata[i].region === y){
                let x = newsdata[i];
                creatediv(x);
            }
        }
    }
}

function changeHeader(h){
	document.getElementById('newsHeader').innerHTML = `${h} News` ;
}