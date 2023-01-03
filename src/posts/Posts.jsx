import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getAllposts} from "../api/postsApi";


export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsData.posts);
    const isLoading = useSelector(state => state.postsData.isLoading);
    const erorr = useSelector(state => state.postsData.erorr);
    // const [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    //      const getData = async () => {
    //          const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
    //          setPosts(res.data);
    //      }
    //      getData();
    // }, []);

    useEffect(() => {
        dispatch(getAllposts("https://jsonplaceholder.typicode.com/posts"));
    }, [dispatch]);

    return (
       <div>
           {erorr !== null ? <h1>{erorr}</h1> : null}
           {
                isLoading ? <h1>Loading...</h1> : (posts.length >= 1 ? (posts.map(post => <h6>{post.title}</h6>)) : (<h6>no posts</h6>))
           }
       </div>
    );
}