import { useState } from "react"
import BlogList from "./BlogList"
const Home = () => {
   const [blogs, setBlog] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
   ])
   const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog) => blog.id !== id)
      setBlog(newBlogs)
   }

   return (
      <div className="home">
         <BlogList blogs={blogs} handleDelete={handleDelete} title='All Blogs!' />
         <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} handleDelete={handleDelete} title="Mario's Blogs!" />
      </div>
   );
}


export default Home;