import Header from './Header';
import { useEffect, useState } from 'react';
import Filter from "./Filter";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Experience() {

  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const [experience, setExperience] = useState([{
    image: '',
    title: '',
    country: '',
    user: {
      username: ''
    }
  }])
  // const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
    .get(`http://localhost:8080/experience`)
    .then((res) => {
      console.log(res.data);
      setExperience(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
  },[])
  
    return (
        <>
        <Header/>
        {/* <Filter/> */}
    <div className="search">
        <input
          type="text"
          placeholder="Search for a country"
          // value={experience.country}
          onChange={(e) => {
            setSearch(e.target.value.trim())}
          }
          id="search-bar"
        />
        <button 
          type="submit" 
          className="search-btn" 
          onClick={() => {navigate(`/search/${search}`)}}
          >
            <i class="fa fa-search"></i>
        </button>
    </div>
      <div className="container2">
        <div className="cards">
          {experience.map((e) => {
            return (
              <div className="card">
                <img
                  className="img"
                  src={e.image}
                  alt=""
                  onClick={() => {
                    navigate('/experienceDetails');
                  }}
                />
                <h3
                  onClick={() => {
                    navigate('/experienceDetails');
                  }}
                >
                {e.title}
                </h3>
                <p id="countryName">{e.country}</p>
                <p id="name">{e.user.username}</p>
              </div>
             )
           })}
        </div>
      </div>
        </>
    )
}

export default Experience;