import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getData } from '../../utils/Api'
import ReactPlayer from 'react-player'


export default function VideoDetails() {

  const [videoDetails, setvideoDetails] = useState(null)
  const [relatedvideoDetails, setrelatedvideoDetails] = useState([])

  const [comment, setcomment] = useState(null)

  let { id } = useParams()
  useEffect(() => {
    videoDet(id)
    relatedvideoDet(id)
    commentVideo(id)
  }, [id])

  async function videoDet(id) {
    let response = await getData(`videos?part=snippet,statistics&id=${id}`)

    setvideoDetails(response.items[0])
  }
  async function relatedvideoDet(id) {
    let repo = await getData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    //console.log(repo)
    setrelatedvideoDetails(repo.items)
    // setvideoDetails(response.items[0])
  }
  //console.log(videoDetails)



  async function commentVideo(id) {
    let commentList = await getData(`commentThreads?part=snippet&videoId=${id}&maxResults=20`)
    //console.log(commentList)

    setcomment(commentList.items)
  }






  return <>

    <div className='d-flex content g-5 my-3'>
      <div className='col-lg-9 video-content text-light '>
        <ReactPlayer width="100%" controls className='react-player' url={`https://www.youtube.com/watch?v=${id}`} />
        <p className='fs-5 px-3 mt-3'>{videoDetails?.snippet.title}</p>
        <div className='d-flex px-3 justify-content-between'>
          <Link className='text-decoration-none' to={`/channelDetails/${videoDetails?.snippet.channelId}`}>
            <div className=''>
              <h6 className='fs-6 text-white-50'>{videoDetails?.snippet.channelTitle}
                <i className="fa-solid fa-circle-check text-white-50 check ms-2"></i>
              </h6>
            </div>
          </Link>
          <div className=''>
            <p className='text-center'>{`${videoDetails?.statistics.viewCount} Views`}</p>
          </div>
        </div>

        <div className='comments px-3'>

          <h2 className='my-4 '>Comments</h2>
          {comment ? comment?.slice(0, 20).map((ele, index) => {
            return <div key={index} className='d-flex px-3   gap-2 my-5'>
              <img className='rounded-circle commentImg' src={ele.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />

              <div className='text '>
                <span className='me-3 fs-6'>{ele?.snippet.topLevelComment.snippet.authorDisplayName}</span>
                <span className='text-white-50 '>{ele?.snippet.topLevelComment.snippet.publishedAt}</span>
                <h6 className='fw-light mt-2'>{ele?.snippet.topLevelComment.snippet.textDisplay

                }</h6>
              </div>

            </div>
          }) : <h4 className='mt-5 px-3'> The Comments Is Disabled From Owner</h4>}
        </div>


      </div>


      <div className='col-lg-3 related-content '>
        <div className='myrow d-flex px-3  flex-column mt-5'>
          {relatedvideoDetails.map((rel, inx) => {
            return <div className='myitem '>
              <Link className='text-decoration-none item' to={`/videoDetails/${rel.id.videoId}`}>
                <div key={inx} className='  pointer'>
                  <img className='w-100 rounded-3' src={rel?.snippet?.thumbnails?.high?.url} alt="" />
                  <p className='text-light '>{`${rel?.snippet.title.split(' ').slice(0, 10).join(' ')} `}</p>

                </div>
              </Link>

              <Link className='text-decoration-none  ' to={`/channelDetails/${rel?.snippet.channelId}`}>
                <div className='d-flex'>
                  <h6 className='fs-6 text-white-50 te'>{rel?.snippet.channelTitle}
                    <i className="fa-solid fa-circle-check text-white-50 check ms-2"></i>
                  </h6>
                </div>
              </Link>


            </div>
          })}
        </div>
      </div>
    </div>









  </>
}
