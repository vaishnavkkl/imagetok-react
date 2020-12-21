import React,{useState} from "react";
import "./ImageSideBar.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';



export default function ImageSideBar({likes, message, share}){

const [color, changeColor]  = useState(false);

function handleColor(){
	if(!color){
		changeColor(true);
	}else{
		changeColor(false);
	}
}

	return <div className="image-side-bar">
	<div onClick={handleColor} className="image-side-bar-button">
		<FavoriteIcon style={{"color": color?"red":"white"}} fontSize="large" />
		<p>{color?likes++:likes}</p>
	</div>
	<div className="image-side-bar-button">
		<MessageIcon  fontSize="large"  />
		<p>{message}</p>

	</div>
	<div className="image-side-bar-button">
		<ShareIcon fontSize="large" />
		<p>{share} </p>
	</div>
	</div>
}