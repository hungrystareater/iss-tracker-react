import { React } from 'react';

const Controls = () => {
    return (
        <div className="controls">
            <br />
            <input type='checkbox'
                onChange={(e) => {
                    window.synced = !window.synced;
                    if (!window.synced) {
                        while (window.timers.length) {
                            clearTimeout(window.timers.pop());
                        }
                    }
                }
                }></input>
            <p>Synchronize GPS, weather and video (it will take about 30 seconds - that's stream's delay).</p>
            <br />
            {/* <a href='https://eol.jsc.nasa.gov/ESRS/HDEV/' target='_blank'>NASA</a>   
            <a href='https://www.nasa.gov/multimedia/nasatv/iss_ustream.html' target='_blank'>NASA 2</a> */}
        </div>
    );
}

export default Controls;