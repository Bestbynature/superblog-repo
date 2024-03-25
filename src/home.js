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

  const buttonData = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "x", "-", "+"
  ]

 
  return (
    <>
      {blogs && <BlogList blogs={blogs} title="All The Blogs" />}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.title === "Covid19")} title="Covid19" />}
      {value}
      {buttonData.map(value => <button>{value}</button>)}
      {/* {buttonData.map((value)=>(
        <button key={value}>{value}</button>
        
      ))} */}
      <ul>
        <li>item one</li>
        <li>item two</li>
        <li>item three</li>
        
      </ul>
    </>
  );
};

export default Home;
