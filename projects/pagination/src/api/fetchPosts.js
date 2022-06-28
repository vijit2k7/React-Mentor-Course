import axios from "axios"

const fetchPosts = async (page, limit) => {
    // optionally write fetching logic here or somewhere else
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    console.log('res is',res);
    return res;
}

export { fetchPosts }