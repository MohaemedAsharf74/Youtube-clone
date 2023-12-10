import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { videoContext } from '../../videoContext'
import {Link} from 'react-router-dom'
import Videos from '../Videos/Videos';

import { demoChannelUrl, demoThumbnailUrl, demoVideoUrl } from '../../utils/constant';
import { getData } from '../../utils/Api';
export default function Feed() {

 
    let{setVideo , video , active , setActive, search}=useContext(videoContext)  
    let [searchList,setSearch]=useState([])


   
    
  return <>

  
    
      <div className='col-md-4 text-center activeVid w-100'>
      <p className='fs-1 fw-bold text-light' >
      {active} <span className='text-danger'>Video</span>
    </p>
      </div>



     { <div className='row g-4 w-100 px-3'>
    {video.map((vid , inx)=>{
      
      return <div key={inx} className='col-md-4 col-lg-3'>
          {vid.id.videoId? <>
        <div className='item newitem text-white h-100 rounded-3 d-flex flex-column justify-content-between '>
          <Link className='text-decoration-none text-light ' to={`videoDetails/${vid.id.videoId}`} >
           <div className='hover position-relative'>
          <img className='w-100 ' src={vid?.snippet.thumbnails.high.url } alt="" />
          <div className='layer position-absolute w-100  h-100 start-0 top-0 '>
           <i className="fa-brands text-danger fa-youtube fs-1 position-absolute top-50 start-50 translate-middle"></i>
          </div>
           </div>
          
          <p className='px-3 mt-3'>{vid?.snippet.title.split(' ').slice(0,10).join(' ')}</p>
          
         
          </Link>
          <Link className='text-decoration-none text-white-50' to={`/channelDetails/${vid?.snippet.channelId}`}>
          <p className='px-3'>{vid?.snippet.channelTitle}
          <i className="fa-solid fa-circle-check text-white-50 ms-2"></i>
          </p>
          </Link>
          </div>
          </> :''}
          {vid.id.channelId ? <>
          <Link  className='text-decoration-none chan ' to={`channelDetails/${vid.id.channelId}`}>
            <div className='item text-white  '>
            <img className=' rounded-circle channelImg border mt-2 border-light border-4  w-75 d-block mx-auto  ' src={vid?.snippet.thumbnails.high.url ?vid?.snippet.thumbnails.high.url : demoThumbnailUrl  } alt="" />
        
          <p className='text-center mt-3'>{vid?.snippet.channelTitle}
          <i className="fa-solid fa-circle-check text-white-50 ms-2"></i>
          </p>
          </div>
          </Link>
          </> :''}
          {vid.id.playlistId? <>
            <div className='item text-white newitem h-100 d-flex flex-column justify-content-between'>
          <Link  className='text-decoration-none text-light chan' to={`playlistDetails/${vid.id.playlistId}`}>
          <div className='hover position-relative'>
          <img className=' w-100 d-block mx-auto bg-transparent ' src={vid?.snippet.thumbnails.high.url ?vid?.snippet.thumbnails.high.url : demoThumbnailUrl  } alt="" />
          <div className='layer position-absolute w-100  h-100 start-0 top-0 '>
          <p className='position-absolute top-50 start-50 translate-middle'>
            <span>Play All </span>
            <i className="fa-solid fa-play"></i>
          </p>
          </div>
           </div>
           
          <p className='px-3 mt-3'>{vid?.snippet.title.split(' ').slice(0,10).join(' ')}</p>
          
          </Link>
          <Link className='text-decoration-none text-white-50' to={`channelDetails/${vid.snippet.channelId}`}>
          <p className='px-3'>{vid?.snippet.channelTitle}
          <i className="fa-solid fa-circle-check text-white-50 ms-2"></i>
          </p>
          </Link>
          </div>
          </> :''}

         
          
        </div>
    })}
   </div>}
   

  
  
    
  
  
  
  </>
}
