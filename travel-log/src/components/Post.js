import Header from './Header';
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../reducers/Post/action";

function Post() {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleOption = (e) => {
        setCountry(e.target.value);
    };

    const handlePost = (e) => {
        e.preventDefault();

        const data = {
            title: title,
            description: description,
            country: country,
            user:{
                id:4
            }
        };

        axios
          .post(`http://localhost:8080/experience`, data)
          .then((res) => {
              console.log(res.data);
              const action = addPost(res.data)
              dispatch(action);
          })
          .catch((err) => {
              console.log(err);
          });
    }

    return (
        <>
        <Header/>
        <div className="post">
                 <h1 id="post-title">Write a travel guide</h1>
                 <h6 id="post-form">Help fellow travelers by writing up your past itinerary.</h6>
        
            <form className="guide">
                <input 
                   className="input1"
                   type="text"
                   placeholder="Title"
                   name="title"
                //    value={title}
                   onChange={handleTitle}
                />
                {/* <input 
                   className="input2"
                   type="text"
                   placeholder="Title"
                   name="title"
                //    value={title}
                   onChange={handleTitle}
                /> */}

                <select id="counrty" className="input2" onChange={handleOption}>
                    <option value="hide"> Country </option>
                    <option value="riyadh">Riyadh</option>
                    <option value="london">London</option>
                    <option value="spain">Spain</option>
                    <option value="korea">Korea</option>
                </select>

                <input 
                   className="input3"
                   type="text"
                   placeholder="Tell us your experience..."
                   name="description"
                //    value={description}
                   onChange={handleDescription}
                />

                <button 
                   className="publish"
                   onClick={handlePost}
                >
                    Publish
                </button>
            </form>
        </div>
        </>
    )
}

export default Post;