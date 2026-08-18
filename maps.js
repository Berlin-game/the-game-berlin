// Google Maps Fallback (ohne API Key - einfache Karte)
const mapContainer = document.getElementById('map');

// Fallback mit OpenStreetMap/Leaflet
const mapHTML = `
<iframe 
    width="100%" 
    height="400" 
    style="border:0; border-radius: 8px;" 
    loading="lazy" 
    allowfullscreen="" 
    src="https://www.openstreetmap.org/export/embed.html?bbox=13.41,52.47,13.43,52.48&layer=mapnik&marker=52.475,13.42">
</iframe>
`;

mapContainer.innerHTML = mapHTML;

// Koordinaten der Malteserstraße 148
const COORDINATES = {
    lat: 52.4759,
    lng: 13.4193,
    address: "Malteserstraße 148, 12277 Berlin"
};

// Info anzeigen
console.log("Standort: " + COORDINATES.address);
console.log("Koordinaten: " + COORDINATES.lat + ", " + COORDINATES.lng);

// Optional: Google Maps mit API Key (wenn später verfügbar)
function loadGoogleMaps(apiKey) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = function() {
        const map = new google.maps.Map(mapContainer, {
            zoom: 15,
            center: { lat: COORDINATES.lat, lng: COORDINATES.lng },
            mapTypeId: 'roadmap'
        });
        
        const marker = new google.maps.Marker({
            position: { lat: COORDINATES.lat, lng: COORDINATES.lng },
            map: map,
            title: COORDINATES.address
        });
    };
    
    document.head.appendChild(script);
}

// Falls du später einen API Key hast, rufe auf:
// loadGoogleMaps("YOUR_API_KEY_HERE");
