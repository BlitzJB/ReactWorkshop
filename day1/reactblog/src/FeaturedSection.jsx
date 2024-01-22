import "./Featured.css"

function FeaturedSection() {

    return <>
        <section className="featured">
            <FeaturedPost header={"Post 1"} content={"This is the content for post 1"} />
            <FeaturedPost header={"Post 2"} content={"This is the content for post 2"} />
            <FeaturedPost header={"Post 3"} content={"This is the content for post 3"} />
        </section>
    </>
} 


function FeaturedPost({ header, content }) {

    return <>
        <div className="post">
            <h1>{header}</h1>
            <p>{content}</p>
        </div>
    </>
}

export default FeaturedSection;