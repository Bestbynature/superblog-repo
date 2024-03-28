import BlogList from "./bloglist";
import useFetch from "./use-fetch";

const Home = () => {

const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs")

 
  return (
    <>
    {error && <p>{error}</p>}
    {isLoading && <div>Loading your blogs ....</div>}
      {blogs && <BlogList blogs={blogs} title="All The Blogs" />}
      
    </>
  );
};

export default Home;
