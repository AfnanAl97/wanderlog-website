import Header from './Header';
import Comment from './Comment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ExperienceDetails() {

    const navigate = useNavigate();

    const state = useSelector((state) => {
        // console.log(state)
        return {
            user: state.usersReducer.user,
            token: state.usersReducer.token
        }
    })

    // console.log(state.user.userName);

    const [loading, setLoading] = useState(false);

    const {id} = useParams();
    // console.log(id);

    const [data, setData] = useState();

    //   console.log(data);

    useEffect(() => {
        axios 
        .get(`http://localhost:8080/experience/getOne/${id}`)
        .then((res) => {
            setData(res.data);
            console.log(res.data);
            setLoading(true);
        })
        .catch((err) => {
            console.log(err);
        });
    },[])

    return (
        <>
        <Header/>
                {loading ? 
                <>
                 <div className="details2">
                    <img
                      className="img"
                      src={data.image}
                      alt=""
                    />
                    <div className="image-title"><h3>{data.title}</h3></div>
                    <div className="image-country"><h6>{data.country}</h6></div>
                 </div>
                    <p
                      className="username-part"
                      onClick={() => {
                        navigate(`/userprofile/${data.user.username}`);
                      }} 
                    >{data.user.username}
                    </p>
                {/* {console.log(data.user.username)} */}
                <div className="tips"><h3>General tips</h3></div>                
                <div className="desc-part"><p>{data.description}</p></div>

                <br/>
                <br/>
                <br/>
                <br/>
                <Comment/>
                </>
                : <h1>loading</h1>}

                </>
                )
}

export default ExperienceDetails;