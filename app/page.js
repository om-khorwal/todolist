"use client"
import { Cousine } from 'next/font/google'
import React, { useState } from 'react'
import { render } from 'react-dom'


export const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const Submithandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask , {title , desc}]);
    settitle("")
    setdesc("")
    console.log(mainTask)
    }
    let renderTask= <h2 className='text-white font-serif font-bold'>No task available</h2>
    const deletehandler = (i)=>{
      let copytask = [...mainTask]
      copytask.splice(i,1)
      setMainTask(copytask)
    }

    if (mainTask.length>0) {
      renderTask = mainTask.map((t,i) =>{
        return(
          <li key={i} className='flex items-center justify-between '>
            <div className='flex items-center justify-between text-white mb-5 w-1/2'>
              <h4 className='text-2xl font-semibold'>{t.title}</h4>
              <h5 className='text-xl font-medium'>{t.desc}</h5>
            <button onClick={deletehandler} className='p-2 bg-red-500 rounded px-4 py-2 font-bold'>Delete</button>
            </div>
          </li>
        )
      })
    }

  return (
    <>
      <div className='bg-gray-400 font-bold text-black uppercase text-5xl flex justify-center gap-4 hover:bg-black hover:text-white'>thunder Todolist</div>
      <form className='align-bottom' onSubmit={Submithandler}>
      <input
        type="text"
        className='text-black text-4xl mx-4 p-3 border-4 my-16'
        placeholder="whats's today task"
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        ></input>
      <input
        type="text"
        className='text-black text-4xl mx-4 p-3 border-4 my-16'
        placeholder="description"
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}></input>
        <button className='bg-gray-300 p-2'>
          Submit
        </button>
      </form>
      <hr/>
      <div className=' p-8 bg-slate-600'>
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )
}

export default page