import React, { useEffect, useState } from 'react'
import { getData } from '../../utils/Api'
import { useParams } from 'react-router-dom'
import RelatedChannel from '../RelatedChannel/RelatedChannel'
import { demoChannelUrl } from '../../utils/constant'

export default function ChannelDetails() {
    let {id}=useParams()

    useEffect(()=>{
        fetchData(id)
        fetchrelatedData(id)
       
    },[id])

    const [channel,setChannel]=useState(null)
    const [relatedchannel,setrelatedchannel]=useState([])
    
    async function fetchData(id){
      
        let response= await getData(`channels?part="snippets&id=${id}`)
        //console.log(response.items[0])
        setChannel(response.items[0])
    }
    async function fetchrelatedData(id){

        let relatedResponse= await getData(`search?channelId=${id}&part=snippet&order=date`)
       //console.log(relatedResponse)
       setrelatedchannel(relatedResponse.items)
    }
   //console.log(channel)
   //console.log(relatedchannel)

  return <>

  <div className='background  d-flex justify-content-center align-items-center'>

    <div className='chaannelDet  '>
      <div className='  text-center'>
      <img  className='mastryImg   ' src={channel?.snippet.thumbnails.high.url ? channel?.snippet.thumbnails.high.url : demoChannelUrl} alt="" />
      <p className='text-light mt-3 fs-5 fw-medium '>{channel?.snippet.title}
      <i className="fa-solid fa-circle-check text-white-50 check ms-2"></i>

      </p>
      <span className='text-light fs-6'>{`${channel?.statistics.subscriberCount} subscribers`}</span>
      </div>
    </div>


  </div>

  <RelatedChannel relatedchannel={relatedchannel}/>
  
  
  </>
}
