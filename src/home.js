import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => {
  // how to reuse components
  // how to delete from an array

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Covid19",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt quia ipsum quidem blanditiis, voluptas explicabo fuga excepturi similique quam commodi, obcaecati omnis. Impedit ratione consequatur sapiente! Voluptates, aperiam illo!",
      author: "Godfrey",
    },
    {
      id: 2,
      title: "Food Security",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit voluptate praesentium ad excepturi placeat similique aspernatur libero est officia repellat quaerat quidem nulla enim sit quae, ipsum minima sed?",
      author: "Oladimeji",
    },
    {
      id: 3,
      title: "Hygiene",
      body: "This is the way I brus my teeth everyday",
      author: "John",
    },
  ]);

  const handleDelete = (id) => {
   const filteredBlogs = blogs.filter((blog)=> blog.id !== id) // true
   setBlogs(filteredBlogs)
  }

  return (
    <>
      <BlogList blogs={blogs} title="All The Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.title === "Covid19")} title="Covid19" />
    </>
  );
};

export default Home;
