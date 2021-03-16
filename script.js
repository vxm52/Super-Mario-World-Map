var token = config.MY_API_TOKEN;
var my_map_id = config.MY_MAP_ID;

// console.log("My map id: " + my_map_id);

// document.getElementById("maps-script").src= 'https://maps.googleapis.com/maps/api/js?key=' + token + '&map_ids=' + my_map_id + '&callback=initMap';
// console.log(document.getElementById('maps-script').src);

function initMap() {
  // Update MAP_ID with custom map ID
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 40.765091,
      lng: -73.977285,
    },
    zoom: 15,
    mapId: my_map_id,
    // mapTypeId: "satellite",
    fullscreenControl: false,
    streetViewControl: false,
  });



  // Name
  // Latitude, Longitude
  // Image URL
  // scaledSize width, height
  const markers = [
    ["Yoshi's House", 40.765091, -73.977285, "icons/yoshi_house.svg", 38, 31],
    ["You Are Here", 40.761091, -73.979285, "icons/pointer.svg", 30, 47.8],
    ["Ghost House", 40.758991, -73.974285, "icons/ghosthouse.svg", 40, 48],
    ["Castle", 40.773091, -73.968185, "icons/castle.svg", 40, 53],
    ["Warp Pipe", 40.766691, -73.989285, "icons/pipe.svg", 38, 42.5],
    ["Star World", 40.764091, -73.965285, "icons/star.svg", 38, 38],
    ["Donut Plains", 40.768991, -73.977285, "icons/hill_with_eyes.svg", 50, 60.7],
    ["Donut Plains", 40.76841, -73.977985, "icons/hill_with_eyes.svg", 50, 60.7],
    ["Donut Plains", 40.76821, -73.976485, "icons/hill_with_eyes.svg", 50, 60.7],
  ];

  // Create and animate the markers
  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}
