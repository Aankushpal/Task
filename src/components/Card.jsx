import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { useState } from 'react';


function Card() {

    const {posts, setPosts} = useContext(DataContext)
    const [currentPage, setCurrentPage] = useState(1); 

    const deleteHandler = (idx) => {
        const newPosts = posts.filter((post, index) => index !== idx)  
        setPosts(newPosts)
    }

    const postsPerPage = 6; 
  
  
    const indexOfLastPost = currentPage * postsPerPage; 
    const indexOfFirstPost = indexOfLastPost - postsPerPage; 
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); 
  
    
    const totalPages = Math.ceil(posts.length / postsPerPage);
  

    const goToNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const goToPrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const goToPage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
    <>
       <div className='pt-10 pb-28 w-full h-screen relative overflow-hidden px-[15vw] grid grid-cols-3  '>
       {posts.length === 0 && 
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl ml-[45vw] font-bold">Loading...</h1>
        </div>
}
       {currentPosts.map((post, idx) => (
            <div key={idx} className='w-[15vw] h-[40vh] overflow-hidden relative rounded-lg flex mt-1 bg-gray-500 text-white my-4 ml-[4vw]'>
                <div className=' p-4    '>
                    <div>
                        <h2 className='font-bold text-black'>{post.title}</h2>
                        <p className='text-ellipsis'>{post.body}</p>
                    </div>
                </div>
                <div className='absolute right-3 top-3'>
                    <button className='cursor-pointer' onClick={() => {
                        deleteHandler(idx)
                    }}>Delete </button>
                </div>
            </div>
      ))}
       </div>

      <div className="mt-4 flex justify-center items-center space-x-2 absolute bottom-5 left-[20vw]">
        <button
          className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

    
        <button
          className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          onClick={goToNextPage}
          disabled={currentPage === totalPages} 
        >
          Next
        </button>
      </div>
    </>
  )
}


export default Card