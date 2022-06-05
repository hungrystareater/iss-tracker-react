This app allows to track International Space Station location on a zoomable map with geographical lables and simultaneously watch the stream from 720p camera installed on the station. It also shows current weather directly in front of the camera.



In order to use this code for your own purposes you need to register and get API keys for these two APIs:
https://weatherapi.com
https://onwater.io
and paste it in the App.js file in {your-api-key}.

APIs used: 
http://api.open-notify.org/iss-now.json - current ISS coordinates
https://weatherapi.com - get current weather by coordinates
https://onwater.io - determines whether passed coordinates are on water or not

Map:
https://openlayers.org/ + https://www.arcgis.com API for the map data