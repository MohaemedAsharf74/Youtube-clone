import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Videos from './components/Videos/Videos';
import Feed from './components/Feed/Feed';
import { VideoContextProvider } from './videoContext';
import VideoDetails from './components/VideoDetails/VideoDetails';
import ChannelDetails from './components/ChannelDetails/ChannelDetails';
import { getData } from './utils/Api';
import PlaylistDetails from './components/PlaylistDetails/PlaylistDetails';

function App() {


  const routes =createHashRouter([
    {path:'/', element: <Layout/> , children:[
      {index:true,element: <Feed/>},
      {path:'/videoDetails/:id',element: <VideoDetails/>},
      {path:'/channelDetails/:id',element: <ChannelDetails/>},
      {path:'/playlistDetails/:id',element: <PlaylistDetails/>},
    ]}
  ])
 return <>
<VideoContextProvider>

 <RouterProvider router={routes}/>
 
 </VideoContextProvider>
 </>
}

export default App;
