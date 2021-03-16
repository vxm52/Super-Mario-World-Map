var token = config.MY_API_TOKEN;
var map_id = config.MY_MAP_ID;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        mapId: 'MAP_ID'
      });
}