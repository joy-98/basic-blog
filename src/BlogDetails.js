import { useParams } from "react-router";
const BlogDetails = () => {
    // to get id from the parameter of url
    const { id } = useParams()
    return (
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
        </div>
    );
}

export default BlogDetails;