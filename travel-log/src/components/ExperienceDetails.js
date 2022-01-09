import Header from './Header';
import Comment from './Comment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';

function ExperienceDetails() {

    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem('user'));

    let flag = 0;
    const state = useSelector((state) => {
        // console.log(state)
        return {
            user: state.usersReducer.user,
            token: state.usersReducer.token
        }
    })

    // console.log(state.user.userName);

    const [loading, setLoading] = useState(false);

    const { id } = useParams();
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
    }, [])

    const handleDelete = (e) => {
        console.log(e);
          axios
           .delete(`http://localhost:8080/comments/${e}`)
           .then((res) => {
             console.log(res.data);
            
            Swal.fire({
              icon: 'success',
              className: "pop-up",
              title: 'Your post has been deleted',
              showConfirmButton: false,
              timer: 1500
            })
           })
           .catch((err) => {
             console.log(err);
           });
      }

    return (
        <>
            <Header />
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

                    <br />
                    <br />
                    <br />
                    <br />

                    <Comment />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    { (data.comment.length != 0) ?
                        <>
                            {data.comment.map((e) => {
                                return (
                                    <>
                                    {currentUser.userName == e.user.username ? (
                                        <button 
                                           type="submit"
                                           className="delete-btn2"
                                           onClick={()=>{handleDelete(e.id)}}
                                        >
                                              <i className="fa fa-trash-o"></i>
                                        </button>
                                        ) : (
                                            ''
                                    )}
                                        <ul>
                                            <li id="name-comment"><h4>{e.user.username}</h4></li>
                                        </ul>
                                        <br />
                                        <ul> <li id="body-comment">{e.body}</li>
                                            <br />
                                        </ul>

                                        <br/>

                                    </>
                                )
                            })}

                        </>
                        : ""}
                
                
                
                
                

                    </>
                : <h1>loading</h1>}
        </>
    )
}

export default ExperienceDetails;