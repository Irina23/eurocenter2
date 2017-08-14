/*map*/

$(window).on('load', function() {
    // Create a map object and specify the DOM element for display.
    var map1 = new google.maps.Map(document.getElementById('map1'), {
        center: {lat:50.4481346, lng: 30.5223398},
        scrollwheel: false,
        zoom: 15
    });
    //var image = 'img/icons/point_map.png';
    var marker1 = new google.maps.Marker({
        position: {lat: 50.4481346, lng: 30.5223398},
        map: map1
        //icon: image
    });
    google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map1,marker1);
    });

    var infowindow1 = new google.maps.InfoWindow({
        content: 'г. Киев',
        maxWidth: 300
    });


    var map2 = new google.maps.Map(document.getElementById('map2'), {
        center: {lat:49.4500588, lng: 32.0539427},
        scrollwheel: false,
        zoom: 14
    });
    //var image = 'img/icons/point_map.png';
    var marker2 = new google.maps.Marker({
        position: {lat: 49.4500588, lng: 32.0539427},
        map: map2
        //icon: image
    });
    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map2,marker2);
    });

    var infowindow2 = new google.maps.InfoWindow({
        content: 'г. Черкассы',
        maxWidth: 300
    });


    var map3 = new google.maps.Map(document.getElementById('map3'), {
        center: {lat:48.2920787, lng: 25.9358367},
        scrollwheel: false,
        zoom: 15
    });
    //var image = 'img/icons/point_map.png';
    var marker3 = new google.maps.Marker({
        position: {lat: 48.2920787, lng: 25.9358367},
        map: map3
        //icon: image
    });
    google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map3,marker3);
    });

    var infowindow3 = new google.maps.InfoWindow({
        content: 'г. Черновцы',
        maxWidth: 300
    });
});