import React,{ useState} from "react";
import "./Image.css";
import ImageFooter from "./ImageFooter";
import ImageSideBar from "./ImageSideBar";




export default function Image({url, channel,description,song, likes,message,share}) {

const [isblur, setBlur] = useState(false);

 function handleClick(){
	if(isblur){
		setBlur(!isblur)
	}else{
		setBlur(true)
	}
}

    return <div style={{filter:isblur? 'blur(8px)':'blur(0)'}} className  ="images" onDoubleClick={handleClick}>
	     <div className="image"><img src={url} alt="" /></div>
	     <ImageFooter channel={channel}  description={description} song={song} />
	      <ImageSideBar likes={likes} share={share}  message={message}/>
     
		
	</div>
}