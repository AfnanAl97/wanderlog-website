import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

    return (
        <>
        <div className="header">
            <div className="site-name">
               <h2>
                 <Link id="site-name" to="/experience">
                   wanderlog
                 </Link>
                 </h2> 
            </div>

            <ul className="naveg" dir="rtl"> 
            <>
              <li>
                 <Link id="logout" to="/">
                   <h5>Logout</h5>
                 </Link>
              </li>
            </>
              <li>
                 <Link 
                    id="post"
                    to="/post"
                    onClick={()=>{
                    navigate(`/post`)
                   }}
                 >
                   <h5>Post</h5>
                 </Link>
               </li>
            </ul>
        </div>
      </>
    )
}

export default Header;