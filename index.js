function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_tgv17da";
    const templateID = "template_g2p7xu7";

    emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);

            alert("Your message sent successfully!!")

        })
        .catch(err=>console.log(err));

}



var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: new google.maps.LatLng(38.769671, -9.097975),
        mapTypeId: 'roadmap',
        styles :
            [
                {
                    "featureType": "all",
                    "stylers": [
                        {
                            "saturation": 0
                        },
                        {
                            "hue": "#e7ecf0"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "stylers": [
                        {
                            "saturation": -70
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "saturation": -60
                        }
                    ]
                }
            ]

    });


    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
        info: {
            icon: 'https://novo2.rhp.pt/map.png'
        }
    };

    var features = [
        {
            position: new google.maps.LatLng(38.769671, -9.097975),
            type: 'info'
        }
    ];

    // Create markers.
    features.forEach(function(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map,
            content:'<div>Test</div>'

        });
    });
}

