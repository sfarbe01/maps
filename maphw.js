var locations = [
 {
     "name": "Parthenon",
     "lat": 37.9715,
     "lng": 23.72673,
     "zoom": 12
 },
 {
     "name": "Space Needle",
     "lat": 47.6205,
     "lng": -122.3493,
     "zoom": 12
 },
 {
     "name": "Eiffel Tower",
     "lat": 48.8584,
     "lng": 2.2945,
     "zoom": 12
 }];

var map;

function initMap() {
       map = new google.maps.Map($('#map')[0], {
        center: {lat: 19.8968, lng: -155.5828},    
        zoom: 4
        });
        createMarkers();
      }

function createMarkers() {
	$.each(locations, function (index, value) {
		var marker = new google.maps.Marker({
        	position: { lat: value.lat, lng: value.lng }});
		
		marker.setMap(map);

		var infoWindow = new google.maps.InfoWindow({
        	content: value.name });
	
		marker.addListener( 'click', function( ) {
        	infoWindow.open( map, marker );
        });
	});
}

$('#locales').on('change', changeCenter);

function changeCenter() {
	var place = $(this).val();
	var location = $.grep(locations, function (n, i) {
		return n.name == place;
	})[0];

	if(location) {
        map.setCenter({lat: location.lat, lng: location.lng});
		map.setZoom(location.zoom);	
	}
	
}