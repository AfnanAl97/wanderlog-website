import Header from './Header';
import Comment from './Comment';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ExperienceDetails() {

    const [experienceDetails, setExperienceDetails] = useState([{
        image: '',
        title: '',
        country: '',
        user: {
          username: ''
        }
      }])

    useEffect(() => {
        axios 
        .get(`http://localhost:8080/experience`)
        .then((res) => {
            console.log(res.data);
            setExperienceDetails(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    },[])

    // const handleDelete = () => {
    //     axios
    //      .delete(`http://localhost:8080/experience/${experience.id}`)
    //      .then((res) => {

    //      })
    // }

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
                <div className="tips"><h3>General tips</h3></div>                
                <div className="desc-part"><p>{e.description}</p></div>

                <br/>
                <br/>
                <br/>
                <br/>
                <Comment/>

                </>
                )
            })}
        </>
    )
}

export default ExperienceDetails;