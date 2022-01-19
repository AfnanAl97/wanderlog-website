import { useEffect, useState } from 'react';
import axios from 'axios';
import { addComment } from "../reducers/comment/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Comment({setData, data}) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [body, setBody] = useState("");
    const [comment, setComment] = useState([]);
    const {id} = useParams();
    const state = useSelector((state) => {
      console.log(state);
      return {
        user: state.usersReducer.user,
        token: state.usersReducer.token
      }
    })

    console.log(state.user);

    const handleComment = (e) => {
        setBody(e.target.value);
    }

    const postComment = (e) => {
        e.preventDefault();

        const commentData = {
            body: body,
            user:{
                username: state.user.userName
            },
            experience:{
                id: id
            },
        };

        axios
          .post(`http://localhost:8080/comments`, commentData)
          .then((res) => {

            data.comment =  [...data.comment, res.data]
            setData(data)
       

              Swal.fire({
                icon: 'success',
                className: "pop-up",
                title: 'Your comment has been added',
                showConfirmButton: false,
                timer: 1500
              })

              window.location.reload(false);

            //   navigate(`/experienceDetails/${data.experience.id}`)
          })
          .catch((err) => {
              console.log(err);
          });
    }

    return (
    <>
        <div className="seperate-page">
          <input 
            className="comment-box"
            type="text"
            placeholder="Share your thoughts!"
            name="body"
            onChange={handleComment}
          />

          <button 
            className="post-comment"
            onClick={postComment}
          >
             Post
          </button>
        </div>
{/* 
        <div className="display-comment">
           {comment.map((e) => {
               return (
                <>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    <ul>
                       <li id="name-comment"><h4>{e.user.username}</h4></li>
                    </ul>
                       <br/>
                    <ul> <li id="body-comment">{e.body}</li>
                       <br/>
                    </ul>
                </>
               )
           })}
        </div> */}
    </>
    )
}

export default Comment;

// id="name-comment"
// id="body-comment"