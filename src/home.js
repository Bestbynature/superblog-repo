import { useEffect, useState } from "react";
import BlogList from "./bloglist";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(()=>{
    setTimeout(()=>{
    fetch("http://localhost:8000/blogs")
    .then((res)=>{
      if(!res.ok){
        throw Error("Could not fetch the given API")
      }
      return res.json()
    })
    .then((data)=>{
      setBlogs(data)
      setIsLoading(false)
      setError("")
    })
    .catch((err)=>{
      setError(err.message)
      setIsLoading(false)
    })
    }, 1000)
  }, [])

 
  return (
    <>
    {error && <p>{error}</p>}
    {isLoading && <div>Loading your blogs ....</div>}
      {blogs && <BlogList blogs={blogs} title="All The Blogs" />}
      
    </>
  );
};

export default Home;
