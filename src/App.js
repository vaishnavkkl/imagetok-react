import React, { useEffect,useState } from "react";
import './App.css';
import Image from "./Image";
import ImageFooter from "./ImageFooter";
import ImageSideBar from "./ImageSideBar";
import axios from "./axios";




function App() {

	const [images, setImages] = useState([]);


    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get("/posts");
            setImages(response.data);

            return response;
        }

        fetchPosts();
    }, []);

    return (
        <div className="app">
        <div className='app-images'>
        {images.map(
        	({url,channel,song,likes,message,share,description}) =>(
        	<Image 
        	url={url}
        	channel={channel}
        	song={song}
        	likes={likes}
        	message={message}
        	share={share}
        	description={description} /> 
        )
        ) }
          
          
         
        </div>
      
    </div>
    );
}

export default App;