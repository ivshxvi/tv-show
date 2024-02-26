import React, {useEffect, useState} from 'react'
import GalleryImage from '../GalleryImage'
import { Link } from 'react-router-dom';

const ShowGallery = () => {
    const [shows, setShows] = useState([])


    const displayShows = async () =>{
        const response = await fetch("https://api.tvmaze.com/shows")
        const data = await response.json()
        setShows(data)
    }

    useEffect(() => {
        displayShows()
    }, []);
  
    return (
    <div className='shows'>
        {shows.map(show => 
        <Link to = {`/shows/${show.id}`}>
        <GalleryImage show = {show} key={show.id}/>
        </Link>
        )}
        </div>
  )
}

export default ShowGallery