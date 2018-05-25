let map : any;
function initMap() {

    // interface
    interface LatLng {
        lat : number,
        lng : number
    }

    let Toronto: LatLng = {lat: 43, lng: -79.38};
    let initMapConfig = { center: Toronto, zoom:8 };

    map = new google.maps.Map(document.getElementById('map'), initMapConfig);
    var marker = new google.maps.Marker({
        position: Toronto,
        map: map
    });
}
