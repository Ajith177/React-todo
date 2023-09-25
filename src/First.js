import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './First.css';
import { useNavigate } from 'react-router-dom';


function First({ complete, setComplete, setEditData }) {
  console.log(complete)
  const [basket, setBasket] = useState({
    title: "",
    body: "",
  })

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3030/posts')
      .then(response => {
        setComplete(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  console.log("complete", complete)

  const handleChange = (e) => {
    setBasket({ ...basket, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if (basket.length < 1) {
      alert('The fields should not be empty')
    }

    else {
      const future = {
        title: basket.title,
        body: basket.body,
      };
      axios.post('http://localhost:3030/posts', future)
        .then((response) => {
          axios.get('http://localhost:3030/posts')
            .then(response => {
              setComplete(response.data)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const editing = (item) => {
    setEditData(item)
    navigate(`/Edit`)
  }

  const deleting = (id, e) => {
    axios.delete(`http://localhost:3030/posts/${id}`)
      .then((res) => {
        console.log(res)
        alert(`The data with the ${id} was deleted`)
      })
      .catch((error) => {
        console.log(error)
        alert(`The data ${id} is not deleted`)
      })
  }

  return (
    <div>
      {
        complete.map((items) => {
          return (
            <div className='all' key={items.id}>
              <p><b>id:</b>{items.id}</p>
              <p><b>title:</b>{items.title}</p>
              <p><b>body:</b>{items.body}</p>
              <div className='subclass'>
                <button className='button-1' onClick={e => editing(items)}>EDIT</button>
                <button className='button-1' onClick={e => deleting(items.id, e)}>DELETE</button>
              </div>
            </div>
          )
        })
      }
      <div className='first-1'>
        title:<input type="text" placeholder="title" onChange={handleChange} className='text-box' autoFocus name="title" /><br />
        body:<textarea type="text" placeholder="body" onChange={handleChange} className='text-box' autoFocus name="body" /><br />
        <button className='button-1' onClick={handlesubmit}>SUBMIT</button>
      </div>

    </div>

  )
}

export default First;
