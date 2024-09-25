import React, { useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [list, setList] = useState([])
  const [timer, setTimer] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {

    const fetchdata = async () => {
      try {
        const response = await axios.get('http://localhost:5000/',
          { headers: { authorization: localStorage.getItem("token") } }
        );
        console.log(response.data);
        setList(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        navigate('/signin')
        alert("session expired")
      }
    };
    
    fetchdata();

    const interval = setInterval(() => {
      setTimer(c => c + 1);
    }, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval);

  }, []);


const handleClick = () => {
    localStorage.setItem("token", "")
    navigate("/")
    setTimer(0)
  }



  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-6">
  <button 
    onClick={handleClick}
    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
    Logout
  </button>

  {list.map((e, i) => {
    return (
      <div 
        key={i} 
        className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2">
        <div className="text-gray-700 font-semibold">Email: {e.email}</div>
        <div className="text-gray-500">Password: {e.password}</div>
      </div>
    );
  })}

  <div className="text-lg font-bold text-gray-800">
    {timer}
  </div>
</div>

  )
}

export default Main
