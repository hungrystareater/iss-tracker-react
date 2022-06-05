import { useState, useEffect } from 'react';

import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import LayerVector from "ol/layer/Vector";
import SourceVector from "ol/source/Vector";
import { Point } from "ol/geom";
import Feature from "ol/Feature";
import { fromLonLat } from 'ol/proj';
import { Circle as CircleStyle, Fill, Style } from 'ol/style';
import XYZ from 'ol/source/XYZ';

function OLMap() {
    let [data, setData] = useState({ center: [0, 0], zoom: 1 });
    let point = useState()[0];

    useEffect(() => {
        if (window.olMap !== null) {
            window.olMap.dispose();
        }  
        window.olMap = new OlMap({
            target: null,
            layers: [
                new OlLayerTile({
                    source: new XYZ({
                        attributions:
                            'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
                            'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
                        url:
                            'https://server.arcgisonline.com/ArcGIS/rest/services/' +
                            'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
                    })
                })
            ],
            view: new OlView({
                center: data.center,
                zoom: data.zoom
            }),
            controls: []
        });
        window.olMap.setTarget("map");  
        // Listen to map changes
        window.olMap.on("moveend", () => {
            let center = window.olMap.getView().getCenter();
            let zoom = window.olMap.getView().getZoom();
            setData({ center, zoom });
        });

        window.olMap.addLayer(new LayerVector({
            source: new SourceVector({
                features: [
                    new Feature({
                        geometry: point = new Point([0, 0])
                    })
                ]
            }),
            style: new Style({
                image: new CircleStyle({
                    radius: 3,
                    fill: new Fill({
                        color: '#0000ff',
                    }),
                }),
            }),
        }));

        setInterval(updateLocation, 500);
    }, []);


    async function updateLocation() {
        const ISS_API_URL = 'http://api.open-notify.org/iss-now.json';
        let response, issCoords;

        response = await fetch(ISS_API_URL);
        issCoords = await response.json();

        if (window.synced) {
            window.timers.push(setTimeout(() => {
                if (window.synced) {
                    window.olMap.getView().setCenter(fromLonLat([issCoords.iss_position.longitude, issCoords.iss_position.latitude]));
                    point.setCoordinates(fromLonLat([issCoords.iss_position.longitude, issCoords.iss_position.latitude]));
                }
            }, 34000));
        }
        else {
            window.olMap.getView().setCenter(fromLonLat([issCoords.iss_position.longitude, issCoords.iss_position.latitude]));
            point.setCoordinates(fromLonLat([issCoords.iss_position.longitude, issCoords.iss_position.latitude]));
        }
    }

    return (
        <div id="map" style={{ width: window.innerWidth / 2 - 30, height: (window.innerWidth - 10) / 2 * 0.562 }}></div>
    );
}

export default OLMap;