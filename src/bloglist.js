const Bloglist = ({ blog,author,FunctionDelete }) => {
    // console.log(blog)
   
    return (
        <div>
            <h1>{author}</h1>
            {blog.map((item) => (
                <div key={item.id} className="blogdiv">
                    <h3>{item.title}</h3>
                    <i>Author is : {item.author}</i>
                    <p>{item.desc}</p>
                    <button onClick={()=>FunctionDelete(item.id)}>Delete</button>
                </div>
            ))}

        </div>
    );
}

export default Bloglist;