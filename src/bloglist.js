const BlogList = ({blogs, title }) => {

  

  return ( 
    <div className="wrapper">
      <h1>{title}</h1> <hr />
      {blogs.map((blog) => (
      <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p className="body">{blog.body}</p>
        <p>Written by: {blog.author}</p>
      </div>
    ))}
    </div>
   );
}
 
export default BlogList;