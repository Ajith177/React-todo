import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './First.css';

function First() {
    const[complete,setComplete]=useState([]);
    const [basket,setBasket]=useState ({
      title:"" ,
      body: "",
    })

    const[future,setFuture]=useState([])

    useEffect(()=>{
      axios.get('http://localhost:3000/posts')
      .then(response=>{
        setComplete(response)
      })
      .catch(err=>{
        console.log(err)
      })
    },[])
       
      console.log("complete",complete)

      const handleChange = (e)=>{
        setBasket({...basket,[e.target.name]:e.target.value})
        setFuture(basket)
        
      }

      const handlesubmit =(e)=>{
        e.preventDefault();
        if(future.length<1){
          alert('The fields should not be empty')
        }
        else{
          axios.post('http://localhost:3000/posts',future)
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
        }
      }


      const updating=()=>{

      }

      const deleting=(id,e)=>{
            axios.delete(`http://localhost:3000/posts/${id}`)
            .then((res)=>{
              console.log(res)
              alert(`The data with the ${id} was deleted`)
            })
            .catch((error)=>{
              console.log(error)
              alert(`The data ${id} is not deleted`)
            })
          
      }

  return (
    <div>
      {
        complete.data?.map((items)=>{
          let s=items.id
            return(
                <div className='all'>
                <p><b>id:</b>{items.id}</p>
                <p><b>title:</b>{items.title}</p>
                <p><b>body:</b>{items.body}</p>
                <div className='subclass'>
                  <button  className='button-1' onClick={updating}>UPDATE</button>
                  <button  className='button-1' onClick={e=>deleting(items.id,e)}>DELETE</button>
                </div>
                </div>
            )
        })
      }
      <div className='first-1'>
        title:<input type="text" placeholder="title"  onChange={handleChange} className='text-box' autoFocus name="title"/><br/>
        body:<textarea type="text" placeholder="body" onChange={handleChange} className='text-box'autoFocus name="body"/><br/>
        <button className='button-1' onClick={handlesubmit}>SUBMIT</button>
      </div>
    </div>
  )
}

export default First;
