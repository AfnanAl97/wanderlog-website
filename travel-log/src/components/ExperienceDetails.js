import Header from './Header';
import Comment from './Comment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { BiDotsVertical } from "react-icons/bi";

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

    const [body, setBody] = useState("");

    const handleBody = (e) => {
        setBody(e.target.value);
    };

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
              title: 'Your comment has been deleted',
              showConfirmButton: false,
              timer: 1500
            })
           })
           .catch((err) => {
             console.log(err);
           });
      }

    const handleUpdate = (e) => {
        console.log(e);
        axios
         .put(`http://localhost:8080/comments/${e}`)
         .then((res) => {
           console.log(res.data);
          
          Swal.fire({
            icon: 'success',
            className: "pop-up",
            title: 'Your comment has been updated',
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
                                          <div className="dropdown2">
                                              <button className="menu-btn2"><BiDotsVertical/></button>
                                                  <div className="dropdown-content2">
                                                        <ul>
                                                            <li 
                                                               type="submit"
                                                               className="delete-btn22"
                                                               onClick={()=>{handleDelete(e.id)}}
                                                            >
                    
                                                               <i className="fa fa-trash-o">Delete </i>
              
                                                            </li>
                  
                                                             <li 
                                                               type="submit"
                                                               className="edit-btn2"
                                                               onClick={() => {
                                                            //     <input 
                                                            //     className="edit-title-input" 
                                                            //     type="text" 
                                                            //     name="body" 
                                                            //     onChange={handleBody}
                                                            //   />
                                                                   handleUpdate(e.id)
                                                                }}
                                                             >

                                                                <i class="fa fa-pencil-square-o" aria-hidden="true">Update</i>
              
                                                            </li>
                                                        </ul>
                                                    </div>
                                            </div>
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