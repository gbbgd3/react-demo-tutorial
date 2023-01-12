import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const[name, setName] = useState('mario');
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
       setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok)
                    {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(error => {
                    console.log(error.message);
                    setIsPending(false);
                    setError(error.message);
                })  
            }, 1000);
    }, []);

    return ( 
        <div className="home">
            {error && <div>Could not fetch</div>}
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;