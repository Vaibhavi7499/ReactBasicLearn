import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const BackToHome=()=>{
        navigate('/');
    }
  return (
    <div>
        <h1>Home</h1>
        <button  onClick={BackToHome}>Click</button>
        </div>
  )
}

export default Home