# 🎮 The Game Berlin

Eine interaktive Website mit einem 3D Kubus und Google Maps für die Malteserstraße 148 in Berlin.

## Features

✅ **3D Kubus** - Animierter 3D Würfel mit Three.js  
✅ **Karte** - OpenStreetMap Integration (kostenlos, kein API Key nötig)  
✅ **Responsive Design** - Funktioniert auf Desktop und Mobile  
✅ **Modern UI** - Schönes Gradient-Design mit Purple & Blue  

## Dateien

- `index.html` - Hauptseite
- `style.css` - Styling & Layout
- `three-cube.js` - 3D Kubus Animation
- `maps.js` - Karten Integration

## Standort

📍 **Malteserstraße 148**  
📮 **12277 Berlin**  
🌍 **Koordinaten:** 52.4759, 13.4193

## Verwendete Technologien

- **Three.js** - 3D Graphics
- **OpenStreetMap** - Kostenlose Kartendaten
- **HTML5 & CSS3** - Frontend
- **Vanilla JavaScript** - Keine Dependencies nötig

## Verwendung

Öffne einfach `index.html` in deinem Browser!

```bash
# Mit Live Server
python -m http.server 8000
# Dann öffne: http://localhost:8000
```

## Google Maps API Key hinzufügen (Optional)

Falls du später Google Maps statt OpenStreetMap verwenden möchtest:

1. Hole einen API Key von https://console.cloud.google.com/
2. Öffne `maps.js`
3. Ersetze am Ende:
   ```javascript
   loadGoogleMaps("DEIN_API_KEY_HIER");
   ```

## License

MIT - Frei verwendbar

---

**Erstellt mit ❤️ für The Game Berlin**
