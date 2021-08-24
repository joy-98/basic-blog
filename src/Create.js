import { useState } from "react";
const Create = () => {
    // alternative way to make useState
    const [state, setState] = useState({
        title: '',
        body: '',
        author: 'mario'
    })

    const handleChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div className="create">
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    name='title'
                    required
                    value={state.title}
                    onChange={handleChange}
                />
                <label>Blog body:</label>
                <textarea
                    name='body'
                    required
                    value={state.body}
                    onChange={handleChange}
                />
                <label>Blog author:</label>
                <select
                    name='author'
                    onChange={handleChange}
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