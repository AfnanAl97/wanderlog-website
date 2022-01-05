import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import Swal from 'sweetalert2/src/sweetalert2.js';

function UserProfile() {

    const [data, setData] = useState();

    const {username} = useParams();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios 
        .get(`http://localhost:8080/experience/${username}`)
        .then((res) => {
            setData(res.data);
            console.log(res.data);
            setLoading(true);
        })
        .catch((err) => {
            console.log(err);
        });
    },[])
    console.log(data);

    const handleDelete = (e) => {
      console.log(e);
        axios
         .delete(`http://localhost:8080/experience/${e}`)
         .then((res) => {
           console.log(res.data);
         })
         .catch((err) => {
           console.log(err);
         });
    }

    return (
      <>
      <Header/>
      {loading ?
      <>
          {data.map((e) => {
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
                  onClick={()=>{handleDelete(e.id)}}
              >
                  <i className="fa fa-trash-o"></i>
              </button>
               </div>

              <div className="username-part"><p>{username}</p></div> 
              {console.log(username)}
              <div className="tips"><h3>General tips</h3></div>                
              <div className="desc-part"><p>{e.description}</p></div>

              </>
              )
          })}

      </>
              : <h1>loading</h1>}
            </>
            )

}

export default UserProfile;