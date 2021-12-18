import Header from './Header';

function Post() {

    return (
        <>
        <Header/>
        <div className="post">
            <div className="post-title">
                 <h1>Write a travel guide</h1>
            </div>
            <div className="post-form">
                 <h6>Help fellow travelers by writing up your past itinerary.</h6>
            </div>
        </div>
        </>
    )
}

export default Post;