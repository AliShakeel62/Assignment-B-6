import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  const apiget = ()=>{
  axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
    console.log(response)
  })
  .catch((error)=>{
    console.log(error)
  })}
  const apiput =()=>{
    axios.put('https://jsonplaceholder.typicode.com/users/1',{
      name:"ali",
      email:"oerpdj@gmail.com"
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const apipost =()=>{
    axios.post('https://jsonplaceholder.typicode.com/users',{
name : "Sahin",
username: "iftikar",
email:"imrankhan804@gmail.com"
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const apidel =()=>{
    axios.delete('https://jsonplaceholder.typicode.com/users/1').then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="App">
     <h1 className='text-center mt-5 flex-wrap text-primary'>API Handeling</h1>
     <button className='btn btn-primary rounded-4 m-2 flex-wrap' onClick={apiget}>Get Api</button><br />
     <button className='btn btn-primary rounded-4 m-2 flex-wrap' onClick={apiput}>Put Api</button><br />
     <button className='btn btn-primary rounded-4 m-2 flex-wrap' onClick={apipost}>Post Api</button><br />
     <button className='btn btn-primary rounded-4 m-2 flex-wrap'onClick={apidel}>Delete Api</button><br />
    </div>
  );
}

export default App;
