import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState('mario')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const blog = {title, body, author}
        console.log(blog)
    }

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={event => setBody(event.target.value)}
                />
                <label>Blog author:</label>
                <select
                    onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;