var locations = [
 {
     "name": "Greece",
     "lat": 48.1293954,
     "lng": 11.556663,
     "zoom": 12
 },
 {
     "name": "Space Needle",
     "lat": 40.7033127,
     "lng": -73.979681,
     "zoom": 12
 },
 {
     "name": "Eiffel Tower",
     "lat": 55.749792,
     "lng": 37.632495,
     "zoom": 12
 }];

var map;

function initMap() {
       map = new google.maps.Map($('#map')[0], {
        center: {lat: -25.363, lng: 131.044},    
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