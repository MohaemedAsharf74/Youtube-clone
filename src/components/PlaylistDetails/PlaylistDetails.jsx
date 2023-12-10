import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { demoChannelUrl } from '../../utils/constant';

export default function PlaylistDetails() {

    let {id} =useParams()
    const options = { 
        params: {
          
          maxResults: '50',
          
        },
        headers: {
          'X-RapidAPI-Key': '92b5603311msh4a7143f635bf4e8p10fcf6jsn9732cce7494f',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      useEffect(()=>{
        getPlay(id)
        fetchrelatedPlay(id)
        
    },[])
let [play,setPlay]=useState(null)
let [relatedplay,setrelatedplay]=useState([])
   

   async function getPlay(id){


    let api = await axios.get(`https://youtube-v31.p.rapidapi.com/playlists?part=snippet&id=${id}` ,options )

    //console.log(api)
    setPlay(api.data.items[0])

    }

    async function fetchrelatedPlay(id){

        let relatedResponse= await axios.get(`https://youtube-v31.p.rapidapi.com/playlistItems?part=snippet&playlistId=${id}`,options)
       //console.log(relatedResponse)
       setrelatedplay(relatedResponse.data.items)
    }



  return <>

<div className='background d-flex justify-content-center align-items-center'>

<div className='chaannelDet'>
  <div className='mastryDet  text-center'>
  <img  className='mastryImg mt-5 ' src={play?.snippet.thumbnails.high.url} alt="" />
  <p className='text-light mt-3 fs-5 fw-medium '>{play?.snippet.title}
  <i className="fa-solid fa-circle-check text-white-50 check ms-2"></i>

  </p>
  {/* <span className='text-light fs-6'>{`${play?.statistics.subscriberCount} subscribers`}</span> */}
  </div>
</div>


</div>


<div className='related m-4'>
    <div className='row justify-content-center g-5'>
       {relatedplay.map((rel,inx)=>{
        return  <div key={inx} className='col-lg-3 col-md-4'>
          <Link className='text-decoration-none' to={`/videoDetails/${rel?.snippet.resourceId.videoId}`}>
        <div className='item h-100 newitem  text-light'>
            <img className='w-100' src={rel?.snippet.thumbnails.high.url} alt="video" />
           <div className='text'>
           <p className='px-3 mt-3'>{rel?.snippet.title.split(' ').slice(0,10).join(' ')}</p>
          <p className='px-3'>{rel?.snippet.channelTitle}
          <i className="fa-solid fa-circle-check text-white-50 ms-2"></i>
          </p>
           </div>

        </div>
        </Link>
        </div> 
       })}
    </div>
  </div>
  
  </>
}
