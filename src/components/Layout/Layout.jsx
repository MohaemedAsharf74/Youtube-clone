import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Box, List, Stack } from '@mui/material'
import { categories } from '../../utils/constant'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import Sidebar from '../Sidebar/Sidebar'

export default function Layout() {


  return <>

  <Navbar/>
  

  <div className='allscreen  '>
    <div className='sidebar '>
    <Sidebar/>
    </div>
    <div className='outlet '>
    <Outlet/>
    </div>
  </div>
  
  
  </>
}
