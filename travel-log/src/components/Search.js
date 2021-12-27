import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Search() {

//   const [searchCountry, setSearchCountry] = useState([]);
//   const [country] = useParams();
//   console.log(country);

//   const handleSearch = () => {
//     axios
//     .get(`http://localhost:8080/experience/country${country}`)
//     .then((res) => {
//       console.log(res.data);
//     //   setCountry(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

  return (
    <div className="search">
    <input
      type="text"
      placeholder="Search for a country"
      // value={experience.country}
    //   onChange={handleSearch}
      id="search-bar"
    />
</div>
  )

}

export default Search;