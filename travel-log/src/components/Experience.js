import Header from './Header';
import Filter from "./Filter";
import { useEffect, useState } from "react";
// import axios from 'axios';
// import { useDispatch } from "react-redux";

function Experience() {

  // const dispatch = useDispatch();

  // const [experience, setExperience] = useState("");

  // const [username, setUsername] = useState("");
  // const [counrtyName, setCounrtyName] = useState("");
  // const [tripExp, setTripExp] = useState("");
  

  // const handleChangeUsername=(e)=>{
  //   setUsername(e.target.value)
  // }

  // const handleChangeCounrtyName=(e)=>{
  //   setCounrtyName(e.target.value)
  // }

  // const handleChangeTripExp=(e)=>{
  //   setTripExp(e.target.value)
  // }

  // useEffect(() => {
  //   axios 
  //      .get("http://localhost:3030/experience/counrty")
  //      .then((response) => {
  //        setExperience(response.data);
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //      });
  // }, []);

  // function add() {

  //   const data={
  //     username,
  //     counrtyName,
  //     tripExp,
  //   }

  //   axios 
  //      .post("http://localhost:8080/experience",data)
  //      .then((response) => {
  //        const action = addExperience(response.data)
  //        dispatch(action)
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //      });
  // };
  
    return (
        <>
        <Header/>
        <Filter/>
        <div className="search">
            <input
              type="text"
              placeholder="Search for a country"
            //   value={serach}
            //   onChange={handleSearch}
              id="search-bar"
            />
        </div>

        {/* {experience.map((result) => {
          return (
            <>
            // <p>{result.}</p>
            </>
          )
        })} */}
        </>
    )
}

export default Experience;