import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { videoContext } from '../../videoContext'
import { demoThumbnailUrl } from '../../utils/constant'

export default function Videos() {
  let{setVideo , video , active , setActive}=useContext(videoContext)  
  return <>

<div className='row g-4'>
    {video.map((vid,inx)=>{
      return <div key={inx} className='col-md-3'>
        <div className='item text-white '>
          <img className='w-100 rounded-5' src={vid?.snippet.thumbnails.high.url} alt="" />
          <p>{vid?.snippet.title.split(' ').slice(0,10).join(' ')}</p>
          <p className=''>{vid?.snippet.channelTitle ? vid?.snippet.channelTitle : 'hello mastry'}
          <i className="fa-solid fa-circle-check text-white-50 ms-2"></i>
          </p>
          </div>
        </div>
    })}
   </div>
 
  </>
}
