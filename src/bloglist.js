const BlogList = ({blogs}) => {
  return ( 
    <div className="wrapper">
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