let map : any;
let coolLocations : any[] = [];
let mapMarkers : MapMarker[] = [];
// interface
interface LatLng {
    lat : number,
    lng : number
}
class MapMarker {
    Address: string;
    Coordinate: LatLng;
    public constructor(address : string) {
        this.Address = address;
    }
}

// Toronto config
let Toronto: LatLng = {lat: 43, lng: -79.38};
let initMapConfig = { center: Toronto, zoom:8 };

//json object
$.ajax({
    url: './AClocations.json',
    dataType: 'json',
    success: function(data) {

        //data is an array of objects in this context
        //coolLocations = data;
        for (let cl of data) {
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

    for (let cl of coolLocations) {
        let newMapMarker : MapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);
    }
    
    setLatitudeLongitude();




    function setLatitudeLongitude() : void {
        // assign lat and lng for each map makers
        // mapMarkers[markersIndex].Coordinate = getLatLng(mapMarkers[markersIndex].Address);
        // setTimeout( () => {console.log(mapMarkers[markersIndex]);}, 1000 );
        // console.log(mapMarkers[markersIndex])

        for (let i = 0; i <= 10; i++) {
            mapMarkers[i].Coordinate = getLatLng(mapMarkers[i].Address);
            console.log(mapMarkers[i].Coordinate);
            addMarker(mapMarkers[i].Coordinate);
        }

    }

    function addMarker(coord : LatLng) : void {
        // will place map marker based on coordinates
        let newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: `A cool place to be`
        });
    }
    function getLatLng(address: string): LatLng {
        let geocoder : object = new google.maps.Geocoder();
        geocoder.geocode({'address' : address}, function(result, status){
            if (status === 'OK') {
                let lat = result[0].geometry.location.lat();
                let lng = result[0].geometry.location.lng();
                console.log(lat, lng);
                return {lat: lat, lng: lng}
            } else {
                //setInterval(getLatLng(address), 1000);
            }
        });
    }
}
