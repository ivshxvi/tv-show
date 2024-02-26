import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShowCard } from "../../components"

const ShowPage = () => {
    // Prevents fetching undefined error
    const [show, setShow] = useState({image: {}, rating: {}})
    const {id} = useParams();

    const displayShow = async () =>{
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        setShow(data)
    }

    useEffect(() => {
        displayShow()
    }, []);

  return (
    <ShowCard show={show}/>
  )
}

export default ShowPage