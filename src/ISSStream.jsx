import React from "react";
import PropTypes from "prop-types";

const ISSStream = (props) => (
    <div>
        <iframe
            width={props.width}
            height={props.height}
            src="https://ustream.tv/embed/17074538"
            scrolling="no"
            allowFullScreen
            frameBorder="0"
            className="issFrame">
        </iframe>
    </div>
);

export default ISSStream;