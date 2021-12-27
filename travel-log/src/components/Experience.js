import Header from './Header';
import { useEffect, useState } from 'react';
import Filter from "./Filter";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Search from './Search';

function Experience() {

  const navigate = useNavigate();
  const [experience, setExperience] = useState([{
    image: '',
    title: '',
    country: '',
    user: {
      name: ''
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
        <Search/>
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
                <p id="name">{e.user.name}</p>
              </div>
             )
           })}
        </div>
      </div>
        </>
    )
}

export default Experience;