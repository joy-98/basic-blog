import { useState } from "react"
const Home = () => {
   const [name, setName] = useState('Luigi')
   const handleClick = (name, e) => {
      console.log(`hello ${name}`, e.target)
   }
   const handleClick2 = () => {
      setName('Mario')
   }

   return (
      <div className="home">
         <h2>Home Page</h2>
         <p>{name}</p>
         <button onClick={(e) => handleClick('Joy', e)}>Click me!</button>
         <button onClick={handleClick2}>Hook!!</button>
      </div>
   );
}


export default Home;