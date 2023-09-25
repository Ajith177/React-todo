import React,{useEffect, useState} from 'react';
import './First.css';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

function Edit() {
    const dating=useLocation
    const getting_data=dating.state
    const [data,setData]=useState({
        title:'',
        body:''
    })
    

    const handleInput =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
  return (
    <div className='window-box'>
        TITLE:<input type="text" placeholder="TITLE" className='text-field' name="title" onChange={handleInput} />
        BODY:<input type="text" placeholder="BODY" className='text-field' name="body" onChange={handleInput} />
      
    </div>
  )
}

export default Edit
