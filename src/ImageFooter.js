import React from "react";
import "./ImageFooter.css";
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import Ticker from "react-ticker";

export default function ImageFooter({channel, description,song}){
	return <div className="image-footer">
	<div className="image-footer-text">
	<h4>@ {channel}</h4>
	<p>{description}</p>
	<div className="image-footer-ticker">
	<WallpaperIcon fontSize="large"/>
	<Ticker mode="smooth">
        {({ index }) => (
            <>
                <h3>{song}</h3>
                
            </>
        )}
    </Ticker>
	</div>
	</div>

	</div>
}