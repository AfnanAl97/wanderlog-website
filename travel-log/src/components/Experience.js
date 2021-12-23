import Header from './Header';
import Filter from "./Filter";

function Experience() {
  
    return (
        <>
        <Header/>
        {/* <Filter/> */}
        <div className="search">
            <input
              type="text"
              placeholder="Search for a country"
            //   value={serach}
            //   onChange={handleSearch}
              id="search-bar"
            />
        </div>
        </>
    )
}

export default Experience;