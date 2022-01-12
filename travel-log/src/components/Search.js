import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from "react-router-dom";

function Search() {

  const navigate = useNavigate();
  const [searchCountry, setSearchCountry] = useState([])

  const {country} = useParams();
  console.log(searchCountry);
  
  useEffect(() => {
    axios
    .get(`http://localhost:8080/experience/country/${country}`)
    .then((res) => {
      console.log(res.data);
      setSearchCountry(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
},[])

  return (
    <>
    <Header/>
    <div className="search-result"><h1>Your Search Results:</h1></div>
    <div className="container3">
        <div className="cards">
           {searchCountry.map((e) =>{
             return (
              <div className="card">
              <img
                className="img"
                src={e.image}
                alt=""
                onClick={() => {
                  navigate(`/experienceDetails/${e.id}`);
                }}
              />
              <h3
                onClick={() => {
                  navigate(`/experienceDetails/${e.id}`);
                }}
              >
              {e.title}
              </h3>
              <p id="countryName">{e.country}</p>
              <p 
                id="name"
                onClick={() => {
                  navigate(`/userprofile/${e.user.username}`)
                }}

              >{e.user.username}</p>
            </div>
             )
    })}
        </div>
    </div>
    </>
  )

}

export default Search;