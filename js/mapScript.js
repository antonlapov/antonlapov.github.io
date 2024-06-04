var map;
var marker1, marker2;
const popUp1 = L.popup();

const xhr = new XMLHttpRequest();
xhr.open("GET", "texts/johnObject.txt", true);

// If specified, responseType must be empty string or "text"
xhr.responseType = "text";

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {

    let xstr = xhr.responseText;  //var for storing text with all raw markup content for putting into popups as a string
    const popupContent = xstr.split(';');
    popUp1.setContent(popupContent[0]);
    }
  }
};

xhr.send(null);


    map = L.map('map').setView([49.83287458719944, 24.04], 13.25);
    let mLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    marker1 = L.marker([49.83287458719944, 24.038038380287162]).addTo(map);
    marker1.bindPopup(popUp1);

    //marker2 = L.marker([49.83787458719944, 24.037038380287162]).addTo(map);


