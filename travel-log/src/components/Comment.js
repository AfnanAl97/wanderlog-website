import { useEffect, useState } from 'react';
import axios from 'axios';
import { addComment } from "../reducers/comment/action";
import { useDispatch } from "react-redux";

function Comment() {

    const dispatch = useDispatch();

    const [body, setBody] = useState("");
    const [comment, setComment] = useState([]);

    const handleComment = (e) => {
        setBody(e.target.value);
    }

    const postComment = (e) => {
        e.preventDefault();

        const data = {
            body: body,
            user:{
                id:3
            },
            experience:{
                id:1
            }
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

    useEffect(() => {
        axios
        .get(`http://localhost:8080/comments`)
        .then((res) => {
          console.log(res.data);
          setComment(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
      },[])

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

        <div className="display-comment">
           {comment.map((e) => {
               return (
                <>
                <br/>
                <br/>
                <br/>
                <br/>
                 <ul>
                       <li id="name-comment"><h4>{e.user.name}</h4></li>
                       <br/>
                       <li id="body-comment">{e.body}</li>
                       <br/>
                 </ul>
                </>
               )
           })}
        </div>
    </>
    )
}

export default Comment;

// id="name-comment"
// id="body-comment"