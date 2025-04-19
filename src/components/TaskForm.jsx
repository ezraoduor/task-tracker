import React, { useState } from 'react'


const PostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: ""

  })

  let navigate = useNavigate()

  const handleOnchange = (e) =>{
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value

    console.log(`${name} : ${value}`)

    setFormData({...formData, [name]: value})

    
  }

  console.log(formData)

  const handleOnSubmit =(e) =>{
    e.preventDefault()

    fetch("http://localhost:3000/tasks", {
      method : "POST",
      headers :{
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(formData)

    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    setFormData({
      title:"",
      body:""
    })
    
    navigate("/")
  }


  return (
    <>
    <Navbar />
    <div className='post-form'>
        <div className='form'>
        <h2>Add New Post</h2>
        <form onSubmit={handleOnSubmit}>
            <input
             type="text"
             name='title' 
             value={formData.title} 
             placeholder='Enter posts title..'
             onChange={handleOnchange}
              />

            <input
             type="text"
             name='body'
              value={formData.body}
               placeholder='Enter post body'
               onChange={handleOnchange}
               />

            <input type='submit'/>
        </form>
        </div>
        
    </div>
    </>
    
  )
}

export default PostForm