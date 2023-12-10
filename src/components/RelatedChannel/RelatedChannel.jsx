import React from 'react'
import { Link } from 'react-router-dom'

export default function RelatedChannel({relatedchannel}) {
    //console.log(relatedchannel)
  return <>
  <div className='related m-4'>
    <div className='row justify-content-center g-5'>
       {relatedchannel.map((rel,inx)=>{
        return  <div key={inx} className='col-lg-3 col-md-4'>
          <Link className='text-decoration-none' to={`/videoDetails/${rel.id.videoId}`}>
        <div className='item h-100 newitem  text-light'>
            <img className='w-100' src={rel?.snippet.thumbnails.high.url} alt="video" />
           <div className='text'>
           <p className='px-3 mt-3'>{rel?.snippet.title.split(' ').slice(0,10).join(' ')}</p>
          {/* <p className='px-3'>{rel?.snippet.channelTitle}
          <i className="fa-solid fa-circle-check text-white-50 ms-2"></i>
          </p> */}
           </div>

        </div>
        </Link>
        </div> 
       })}
    </div>
  </div>
  
  </>
}
