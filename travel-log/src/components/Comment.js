import { useEffect, useState } from 'react';
import axios from 'axios';
import { addComment } from "../reducers/comment/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

function Comment() {

    const dispatch = useDispatch();

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

        const data = {
            body: body,
            user:{
                username: state.user.userName
            },
            experience:{
                id: id
            },
        };

        axios
          .post(`http://localhost:8080/comments`, data)
          .then((res) => {
              console.log(res.data);
              const action = addComment(res.data)
              dispatch(action);
          })
          .catch((err) => {
              console.log(err);
          });
    }

    // useEffect(() => {
    //     axios
    //     .get(`http://localhost:8080/comments`)
    //     .then((res) => {
    //       console.log(res.data);
    //       setComment(res.data)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   },[])

    return (
    <>
        <div className="seperate-page"></div>
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