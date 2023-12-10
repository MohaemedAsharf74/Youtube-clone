import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logo } from './../../utils/constant';
import { getData } from '../../utils/Api';
import { videoContext } from '../../videoContext';


export default function Navbar() {

  let { searchData, setVideo, setActive } = useContext(videoContext)
  let nav = useNavigate()

  let [searchBtn, setsearchBtn] = useState(true)

  let inputSearch = useRef()

  async function getSearch(name) {
    let api = await searchData(name)
    //console.log(api)
    setVideo(api.items)
  }
  async function Data() {
    let response = await getData(`search?part=snippet&q=New`)
    //console.log(response.items)

    setVideo(response.items)
  }


  return <>

    <div className='p-3 position-fixed w-100 end-0 z-3  bg-black bg-danger d-flex  justify-content-between '>

      <div className='col-sm-3'>

        <img className='pointer' onClick={() => {
          Data()
          nav('/')
          setActive('New')
        }} height={45} src={logo} alt="logo" />

      </div>

      <div className='col-sm-9  d-flex searchDiv justify-content-end'>


        {searchBtn ? <div className=' d-flex show search-cont position-relative w-50  mx-auto align-items-center justify-content-center'>
          <input ref={inputSearch} placeholder='Search ...' onChange={(e) => {

          }} type="text" className='form-control  me-3 ' />
          <button onClick={() => {
            nav('/')

            getSearch(inputSearch.current.value)
            ////console.log(inputSearch.current.value)

          }} className='btn btn-danger   search '>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div> : <div className=' d-flex search-cont position-relative   mx-auto align-items-center justify-content-center'>
          <input ref={inputSearch} placeholder='Search ...' onChange={(e) => {

          }} type="text" className='form-control  me-3 ' />
          <button onClick={() => {
            nav('/')

            getSearch(inputSearch.current.value)
            ////console.log(inputSearch.current.value)

          }} className='btn btn-danger   search '>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>}


        {searchBtn ? <button onClick={() => {
          setsearchBtn(false)
        }} className=' btnSearch d-none '>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button> : ''}



      </div>


    </div>
  </>
}
