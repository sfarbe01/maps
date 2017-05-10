function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map($('#map')[0], {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

$(".places").click(function travelWorld(event){
        var spaceneedle = {lat: 47.6205, lng: -122.3493 };
        var map = new google.maps.Map($('#map')[0], {
          zoom: 4,
          center: spaceneedle
        });
        var marker = new google.maps.Marker({
          position: spaceneedle,
          map: map
        });
event.preventDefault();
})


/*
	$("#greece").on('click', function ()
    {
	  newLocation(39.0742,21.8243 );
	});
  
    $("#eiffel").on('click', function ()
    {
	  newLocation(48.8584,2.2945);
	});
});
                
     /*                     
//Setting Location with jQuery
$(document).ready(function travelWorld()
{
    $("#spaceneedle").click(function(event){
        var center = new google.maps.LatLng(10.23,123.45);
        map.panTo(center);
	});

	$("#greece").on('click', function ()
    {
	  newLocation(39.0742,21.8243 );
	});
  
    $("#eiffel").on('click', function ()
    {
	  newLocation(48.8584,2.2945);
	});
});

function (travelWorld) {
   $("#spaceneedle").on('click', function ()
    {  
}                        
                        */