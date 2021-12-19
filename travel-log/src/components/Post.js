import Header from './Header';

function Post() {

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
                //    value={text}
                //    onChange={handleForm1}
                />
                <button 
                   className="publish"
                // onClick={handlePublish}
                >
                    Publish
                </button>
                <input 
                   className="input2"
                   type="text"
                   placeholder="Tell us your experience..."
                   name="title"
                //    value={text}
                //    onChange={handleForm2}
                />
            </form>
        </div>
        </>
    )
}

export default Post;