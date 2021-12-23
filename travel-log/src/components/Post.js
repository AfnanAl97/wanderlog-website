import Header from './Header';
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../reducers/Post/action";
import { storage } from './firebase';

function Post() {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");


    const [image, setImage] = useState(null);
    const [url, setUrl] = useState();
    const [progress, setProgress] = useState(0);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleOption = (e) => {
        setCountry(e.target.value);
    };

    const handlePublish = (e) => {
        e.preventDefault();

        const data = {
            title: title,
            description: description,
            country: country,
            image: url,
            user:{
                id:1
            },

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
    };

        const handleChange = e => {
            if(e.target.files[0]){
                setImage(e.target.files[0]);
            }
        };

        const handleUpload = (e) => {
            e.preventDefault()
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                       .ref("images")
                       .child(image.name)
                       .getDownloadURL()
                       .then(url => {
                           console.log(url);
                           setUrl(url);
                       });
                }
                );
        };

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
                   onClick={handlePublish}
                >
                    Publish
                </button>

                <progress value={progress} max="100" />

                <input type="file" onChange={handleChange} />
                <button 
                   className="upload"
                   onClick={handleUpload}
                >
                    Add Image
                </button>
                <br />
                <img src={url} />
            </form>
        </div>
        {/* || "http://via.placeholder.com/300x400" */}
        {/* alt="firebase-image" */}
        </>
    )
}

export default Post;

