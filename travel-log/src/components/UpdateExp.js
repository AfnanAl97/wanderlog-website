import Header from './Header';
import { storage } from './firebase';
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function UpdateExperience() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState();
    const [progress, setProgress] = useState(0);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
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

    const handleChange = e => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };

    const { id } = useParams();
    console.log(id);

    const handleSave = (e) => {
        console.log(e);
        e.preventDefault();

        const data = {
            title: title,
            description: description,
            image: url
        };

          axios
           .put(`http://localhost:8080/experience/${id}`, data)
           .then((res) => {
             console.log(res.data);
            
            Swal.fire({
              icon: 'success',
              className: "pop-up",
              title: 'Your post has been update',
              showConfirmButton: false,
              timer: 1500
            })
  
            navigate("/experience")
           })
           .catch((err) => {
             console.log(err);
           });
      }

    return (
        <>
          <Header/>
           <div className="form-container">
               <div className="container-box">
                   <form className="form-box">
                       <div className="edit-title">
                          {/* <label className="label">Title</label> */}
                           <input 
                             className="edit-title-input" 
                             type="text" 
                             placeholder="Title"
                             name="title" 
                            //  value={title}
                             onChange={handleTitle}
                           />
                            <textarea 
                             className="edit-description-input" 
                             type="text" 
                             placeholder="Description"
                             name="description" 
                            //  value={description}
                             onChange={handleDescription}
                           />
                    <div className="edit-fileUpload" >
                          <label htmlFor="up0" className="hovertext" data-hover="Click here to choose an image"><i class="fa fa-plus" aria-hidden="true" ></i> </label>
                              {/* <i class="fa fa-plus" aria-hidden="true" ></i> */}
                            <input 
                              type="file" 
                              id="up0" 
                              onChange={handleChange}
                            />
                    </div>
                    <div className="edit-icon-style">
                         <button 
                           className="hovertext"
                           data-hover="Click here to download the image"
                           onClick={handleUpload}
                         >
                          <i class="fa fa-picture-o" aria-hidden="true"></i>
                        </button>
                     </div>
                       <br />
                          <img src={url} className="edit-post-img"/>

                        <button className="submit-edit" onClick={handleSave}>
                            Save
                        </button>
                       </div>
                   </form>
               </div>
           </div>
        </>
    )
}

export default UpdateExperience;