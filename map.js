var map;
function initMap() {
    var Toronto = { lat: 43, lng: -79.38 };
    var initMapConfig = { center: Toronto, zoom: 8 };
    map = new google.maps.Map(document.getElementById('map'), initMapConfig);
    var marker = new google.maps.Marker({
        position: Toronto,
        map: map
    });
}
