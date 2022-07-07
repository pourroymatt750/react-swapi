import { useState, useEffect } from "react"
import { getDetails } from "../../services/sw-api"
import { Link, useLocation } from "react-router-dom"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      {starshipDetails.length ?
      <>
        <h3>Starship Details</h3>
        <h3>Name: {starshipDetails.name}</h3>
        <h3>Model: {starshipDetails.model}</h3>
        <Link to="/" state={{ }}>
          RETURN
        </Link><br />
      </>
      
      :
      <>
        <h2>Loading Starship Details</h2>
      </>
    }
    </>
  )
}

export default StarshipDetails