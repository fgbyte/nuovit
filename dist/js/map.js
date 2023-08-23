let marker, map;

function initMap() {

    //define position (Madrid Spain)
    const position = {
        lat: 40.4893538,
        lng: -3.6827461,
    }

    //map printed on the page
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: position
    })

    //map marker
    const marker = new google.maps.Marker({
        position,
        map,
        title: 'Posicion Inicial'
    })


}