import React from 'react'

function Posts({posts,loading}) {

    if(loading)
    return <h3>loading......</h3>
  return (
    <div >
        <h2 className='text-primary text-center m-5'>React Pagination</h2>
        <ul class="list-group ">
{
posts.map((post)=>{

return(<li class="list-group-item ">{post.title}</li>)

})
}

</ul>

    </div>
  )
}

export default Posts