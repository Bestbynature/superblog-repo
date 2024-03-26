import { useEffect, useState } from "react";
import BlogList from "./bloglist";

const Home = () => {

  const [blogs, setBlogs] = useState(null);

  useEffect(()=>{
    console.log("use Effect is running now")
    fetch("http://localhost:8000/blogs")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setBlogs(data)
    })
  }, []) 

 
  return (
    <>
      {blogs && <BlogList blogs={blogs} title="All The Blogs" />}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.title === "Covid19")} title="Covid19" />}
      <ul>
        <li>item one</li>
        <li>item two</li>
        <li>item three</li>
        
      </ul>
    </>
  );
};

export default Home;
