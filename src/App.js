/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import './styles/css/main.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {

  const [posts,setPosts]=useState([]) ;
  const [loading, setloading] = useState(false) ;
const [currentPage, setCurrentPage] = useState(1) 

const postsPerPage =10 ;


   function getPosts() {
    
    setloading(true) ;

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => setPosts(response))
    .catch(err => console.log(err))
    setloading(false);
  }
  function paginate(nbr) {
    
    setCurrentPage(nbr) ;

  }

  useEffect(()=>{
    getPosts() ;

  },[])

  console.log(posts);

  const pagesNbr = Math.ceil( posts.length/postsPerPage) ;

  const lastPostIdx=currentPage*postsPerPage ;
  const firstPostIdx=lastPostIdx-postsPerPage ;
  const currentPosts =posts.slice(firstPostIdx,lastPostIdx)

  return (
    
    <div className='container col-10'>
      <Posts posts={currentPosts} loading={loading}  />
      <Pagination pagesNbr={pagesNbr} paginate={paginate} currentPage={currentPage}/>
    </div>
    
  );
}

export default App;
