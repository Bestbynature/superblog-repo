import { useEffect, useState } from "react";
import BlogList from "./bloglist";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [value, setValue] = useState(23)

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
      {value}
    </>
  );
};

export default Home;
