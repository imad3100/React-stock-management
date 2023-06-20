import React, { useEffect, useRef } from 'react'

function Pagination({pagesNbr,paginate,currentPage}) {
     const previous = useRef() ;
     const next =useRef() ;

     useEffect(()=>{
     previous.current.classList.toggle('disabled', currentPage <= 1);
     next.current.classList.toggle('disabled', currentPage === pagesNbr);
     },[currentPage])

    var pages=[] ; 
    
    for (let i = 1; i <= pagesNbr; i++) 
         pages[i]=i;
        
   function handleClick(nbr,e) {  
  
 //e.target.classList.toggle("active")

          paginate(nbr) ;

         }  
         

         function handleNext() {
          if (currentPage<pagesNbr) 
            paginate(currentPage+1)

         }


         function handlePrevious() {
          if (currentPage > 1) 
            paginate(currentPage - 1);
          
         }
         
    
  return (

    <div>
<nav aria-label="...">

  <ul class="pagination mt-2 flex-wrap">
  <li class="page-item  " ref={previous} onClick={handlePrevious}><a class="page-link" href="#">Previous</a></li>
{
   pages.map((nbr)=>{
    return <li className={`page-item  ${nbr==currentPage ? 'active' : '' } `} onClick={(e)=>handleClick(nbr,e) }><a class="page-link" href="#">{nbr}</a></li>
 
   })
}   
<li class="page-item " ref={next} onClick={handleNext}><a class="page-link" href="#">Next</a></li>

   
  </ul> 
</nav>
    </div>
  )
}

export default Pagination