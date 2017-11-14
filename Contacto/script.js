function initMap() {
    var adaits = {lat: 37.409124, lng: -5.928022};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: adaits
    });
    var marker = new google.maps.Marker({
        position: adaits,
        map: map
    });
}