import React,{useState,useEffect} from 'react'
import { fetchPosts } from '../api/fetchPosts'
import {Post} from './Post';
import { PaginationButtonsList } from './PaginationButtonsList';

const PostList = () => {
    const [page,setPage]=useState(1);
    const [posts,setPosts]=useState([]);
    const [isLoading,setIsLoading] =useState(true);
    const limit = 5;
    useEffect(()=>{
        setIsLoading(true);
        fetchPosts(page,limit).then((res)=>{
            console.log('res in useEffect',res);
            setIsLoading(false);
            setPosts([...res.data]); 
        });
    },[page]);

    function handleChange(e)
    {
        console.log('event triggered form pagination',e.target);
        setPage(e.target.value);
    }

    console.log('posts is',posts);
    return (
        <>
        {isLoading &&<h1>Loading .........</h1>}
        {!isLoading && posts.map((item,i)=>{
            return <Post title={item.title} body={item.body} id={i}></Post>
        })}
        <PaginationButtonsList handleChange={handleChange}></PaginationButtonsList>
        </>
    )
}

export { PostList }