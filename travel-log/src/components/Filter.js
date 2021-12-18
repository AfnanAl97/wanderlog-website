

function Filter() {

    return (
        <>
        <div className="filter">
            <div className="form-1">
                <h3 id="bord">Filter</h3>
            </div>
            <div className="form-1">
                <h3 id="bord">Categories</h3>
                <label>
                    <input 
                      type="radio"
                    //   onChange={byCategory}
                      name="Category"
                      value="Countries"
                      />
                      Countries
                </label>
                <label>
                    <input 
                      type="radio"
                    //   onChange={byCategory}
                      name="Category"
                      value="Restaurants"
                      />
                      Restaurants
                </label>
                <label>
                    <input 
                      type="radio"
                    //   onChange={byCategory}
                      name="Category"
                      value="Cafes"
                      />
                      Cafes
                </label>
            </div>

            <div className="form-2">
                <button 
                  id="filtering"
                //   onClick={() => {
                //       filtering();
                //   }}
                >
                    Filtering
                </button>
            </div>
        </div>
        </>
    )
}

export default Filter;