import React, { useContext, useEffect, useRef, useState } from 'react'
import { Box, List, Stack } from '@mui/material'
import { categories } from '../../utils/constant'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import { getData } from '../../utils/Api';
import { videoContext } from '../../videoContext';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {

    let ref=useRef()

   let{setVideo , video , setActive , active , searchData}=useContext(videoContext)
   
    
    useEffect(()=>{
      //console.log(active)
      
      Data ()
     
      //console.log(ref.current)
      
    },[active])

    

   async function Data (){
    let response = await getData(`search?part=snippet&q=${active}`)
    //console.log(response.items)
  
    setVideo(response.items)
    }
    let nav=useNavigate()



    // async function getSearch(name){
    //   let api=await searchData(name)
    //   //console.log(api)
    //    setVideo(api.items)
    // }
   
  return <>
  
  
      

        <div className='side list-unstyled py-2 text-center '>
          
        {categories.map((cat , inx)=>{
          
            return <button key={inx}
            onClick={()=>{
              setActive(cat.name)
              nav('/')

          }}
             className='w-100  my-2 text-center btn d-flex px-3 '
             style={{backgroundColor : cat.name==active ? 'red' : ''}}>
            
          
            <p  style={{ color: cat.name === active ? "white" : "red", marginRight: "15px" }}>
              {cat.icon}
            </p>
            <p className='text-light' style={{ opacity: cat.name === active ? "1" : "0.8" }}>
              {cat.name}
            </p>
         
          </button>
        })}
        
       </div>
        


       
  </>
}
