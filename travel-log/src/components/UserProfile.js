import Header from './Header';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';

function UserProfile() {

    const state = useSelector((state) => {
        console.log(state)
        return {
            user: state.usersReducer.user,
            token: state.usersReducer.token
        }
    })

    const [experienceDetails, setExperienceDetails] = useState([{
        image: '',
        title: '',
        country: '',
        user: {
          username: ''
        }
      }])

      console.log(state.token);
      console.log(state.user.userName);

    useEffect(() => {
        axios 
        .get(`http://localhost:8080/experience/${state.user.userName}`)
        .then((res) => {
            console.log(res.data);
            setExperienceDetails(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    },[])

    return (
        <>
        <Header/>
        {experienceDetails.map((e) => {
                return (
                <>
                 <div className="details2">
                    <img
                      className="img"
                      src={e.image}
                      alt=""
                    />
                    <div className="image-title"><h3>{e.title}</h3></div>
                    <div className="image-country"><h6>{e.country}</h6></div>
                    <button 
                    type="submit"
                    className="delete-btn"
                    // onClick={handleDelete}
                >
                    <i className="fa fa-trash-o"></i>
                </button>
                 </div>

                <div className="username-part"><p>{e.user.username}</p></div> 
                {console.log(e.user.username)}
                <div className="tips"><h3>General tips</h3></div>                
                <div className="desc-part"><p>{e.description}</p></div>
                </>
        
            )
        })}
       </>
    )
}

export default UserProfile;