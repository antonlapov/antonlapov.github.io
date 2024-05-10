let data1;
let data11;

function preload(){

}

function setup(){
    data1 = loadStrings('texts/johnObject.txt');
    data11 = data1[1];
    print(data11);
}


var map = L.map('map').setView([49.83287458719944, 24.038038380287162], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var div1 = document.createElement("div");
div1.style.width = '350px';
//div1.innerHTML += '<b>John Object (Тімур Джафаров)</b1><p></p><iframe width="85%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FFuturePerfect%2Fjohn-object-program-1%2F" frameborder="0" ></iframe>';
div1.innerHTML += data1[0];
  
var marker1 = L.marker([49.83287458719944, 24.038038380287162]).addTo(map);
marker1.bindPopup(div1);




