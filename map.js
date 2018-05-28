var map;
var coolLocations = [];
var mapMarkers = [];
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    return MapMarker;
}());
// Toronto config
var Toronto = { lat: 43, lng: -79.38 };
var initMapConfig = { center: Toronto, zoom: 8 };
//json object
$.ajax({
    url: './AClocations.json',
    dataType: 'json',
    success: function (data) {
        //data is an array of objects in this context
        //coolLocations = data;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cl = data_1[_i];
            coolLocations.push(cl); //duplicate the array
        }
    }
});
function initMap() {
    // center Toronto location
    map = new google.maps.Map(document.getElementById('map'), initMapConfig);
    // let example = getLatLng("1 Yonge Street, Toronto, ON, Canada");
    // console.log(example)
    // addMarker(Toronto);
    for (var _i = 0, coolLocations_1 = coolLocations; _i < coolLocations_1.length; _i++) {
        var cl = coolLocations_1[_i];
        var newMapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);
    }
    setLatitudeLongitude();
    function setLatitudeLongitude() {
        // assign lat and lng for each map makers
        // mapMarkers[markersIndex].Coordinate = getLatLng(mapMarkers[markersIndex].Address);
        // setTimeout( () => {console.log(mapMarkers[markersIndex]);}, 1000 );
        // console.log(mapMarkers[markersIndex])
        for (var i = 0; i <= 10; i++) {
            mapMarkers[i].Coordinate = getLatLng(mapMarkers[i].Address);
            console.log(mapMarkers[i].Coordinate);
            addMarker(mapMarkers[i].Coordinate);
        }
    }
    function addMarker(coord) {
        // will place map marker based on coordinates
        var newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: "A cool place to be"
        });
    }
    function getLatLng(address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (result, status) {
            if (status === 'OK') {
                var lat = result[0].geometry.location.lat();
                var lng = result[0].geometry.location.lng();
                console.log(lat, lng);
                return { lat: lat, lng: lng };
            }
            else {
                //setInterval(getLatLng(address), 1000);
            }
        });
    }
}
