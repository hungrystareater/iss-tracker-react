This app allows to track International Space Station location on a zoomable map with geographical lables and simultaneously watch the stream from 720p camera installed on the station. It also shows current weather directly in front of the camera.

![preview](https://github.com/hungrystareater/iss-tracker-react/blob/main/preview1.gif)

In order to run this code you need to register and get API keys for these two APIs:
<br />https://weatherapi.com
<br />https://onwater.io
<br />and paste it in the App.js file in {your-api-key}.

APIs used: 
http://api.open-notify.org/iss-now.json - current ISS coordinates
<br />https://weatherapi.com - get current weather by coordinates 
<br />https://onwater.io - determines whether passed coordinates are on water or not

Map:
https://openlayers.org/ + https://www.arcgis.com API for the map data
