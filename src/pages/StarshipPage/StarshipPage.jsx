import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from "react-router-dom"


const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState([])

  useEffect(() => {
    const fetchStarshipPage = async () => {
      const starshipData = await getAllStarships()
      setStarshipPage(starshipData.results)
    }
    fetchStarshipPage()
  }, [])

  return (
    <>
      {starshipPage.length ? 
        <div className="icon container">
          {starshipPage.map(starship => 
            <div key="starship.index">
              <Link to="/starship" state={{starship}}>
                {starship.name}
              </Link><br />
            </div>  
          )}
        </div>
      :
      <>
        <h2>Loading Starships...</h2>
      </>
      }
    </>
  )
}

export default StarshipPage