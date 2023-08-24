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
        center: position,
    })

    console.log(map)

    const blackMarker = './assets/icons/black-marker.svg'

    //map marker
    const marker = new google.maps.Marker({
        position,
        icon : blackMarker,
        map,
        title: 'Posicion Inicial'
    })

}
