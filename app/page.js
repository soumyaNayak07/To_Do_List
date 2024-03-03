"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desk, setdesk] = useState("")
  const [maintask, setmaintask] = useState([])

  const submitHandler=(e)=>{
      e.preventDefault()
      setmaintask([...maintask,{title , desk}])
      settitle("")
      setdesk("")
      
  }

  const deleateHandeler=(i)=>{
    let copy=[...maintask]
    copy.splice(i,1)
    setmaintask(copy)
  }

  let rendertask=<h2 className='flex justify-center text-xl'>no task avalable</h2>

  if (maintask.length > 0) {
    rendertask=maintask.map((t,i)=>{
      return <div key={i} className='flex pl-5 pr-5 justify-between text-xl'><h5>{t.title}</h5>
                  <h6 className=''>{t.desk}</h6>
                  <button className='flex bg-black text-white pl-5 pr-5 text-sm items-center' onClick={(i)=>{
                    deleateHandeler(i);
                  }}>delete</button>
                  </div>
    })
  
  }
  return (
    <>
    <h1 className='flex justify-center bg-amber-500 h-20 items-center text-3xl text-neutral-950'>Soumya`s Todo List</h1>
    <form onSubmit={submitHandler} className='flex justify-center'>
      <input type="text"  className=' border-2 border-zinc-700 mt-3 ml-2 px-2 py-1' placeholder='Enter title here' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <input type="text"  className=' border-2 border-zinc-700 mt-3 ml-2 px-2 py-1' placeholder='Enter discription' value={desk} onChange={(e)=>{
        setdesk(e.target.value)
      }}/>
      <button className='bg-black text-zinc-200 p-1 ml-2 mt-3 font-bold h-9 rounded'>Add task</button>

    </form>
    <hr className='mt-3'/>
    <div className='p-3 bg-slate-400 h-full'> <ul>{rendertask}</ul></div>
    </>
  )
}

export default page
