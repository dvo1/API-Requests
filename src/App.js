import React from 'react'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    //GET request method
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log('Getting from :::::', res.data)
        setData(res.data)
      })

      .catch(err => console.log)
  }, [])

  const postDeleteHandle = (id, e) => {
    e.preventDefault();
    //DELETE request method
    axios.delete(`https://jsonplaceholder.typicode.com/posts ${id}`)
      .then(res => {
        console.log('Data deleted!!!', res)
      }) 
      .catch(err => console.log)
  }

  const postData = (e) => {
    e.preventDefault();
    //POST request method
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: body,
    })
      .then(res => {
        console.log('Data posted', res)
      })
      .catch(err => console.log)
  }

  const titleHandleChange = (e) => {
    setTitle(e.target.value)
  }

  const bodyHandleChange = (e) => {
    setBody(e.target.value)
  }

  const arr = data?.map((item) => {
    return (
      <tr>
        <td style={{ border: '1px solid black' }}>{item.id}</td>
        <td style={{ border: '1px solid black' }}>{item.title}</td>
        <td style={{ border: '1px solid black' }}>{item.body}</td>
        <td style={{ border: '1px solid black' }}><button onClick={(e) =>postDeleteHandle(item.id, e)}>Delete</button></td>
      </tr>
    )
  })


  return (
    <div className='App'>
      <h1>E suppose dey work sha</h1>
      <form action="">
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={titleHandleChange}
        />
        <hr />
        <label htmlFor="">Body</label>
        <input
          type="text"
          value={body}
          onChange={bodyHandleChange}
        />
        <hr />
        <button
          onClick={postData}
        >POST</button>
      </form>
      <table style={{ border: '1px solid black' }}>
        <tr>
          <th style={{ border: '1px solid black' }}>Id</th>
          <th style={{ border: '1px solid black' }}>Title</th>
          <th style={{ border: '1px solid black' }}>Body</th>
        </tr>

        {arr}

        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>

      </table>
    </div>
  )
}

export default App