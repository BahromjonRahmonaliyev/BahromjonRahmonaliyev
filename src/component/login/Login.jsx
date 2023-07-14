
import { useState } from 'react'
import './login.scss'
import { Link, Navigate } from 'react-router-dom'

const Login = () => {
    const [name , setName] = useState('')
    const [password , setPassword] = useState('')
   
   return (
    <div className='form'>
        <form  >
            <input type="text " onChange={(e) => setName(e.target.value)} /><br />
            <input type="password" onChange={(e) => setPassword(e.currentTarget.value)} /><br />
            <div className="btn-box text-center w-100">
            <button type='submit' className='btn btn-outline-success'><Link to='/home'>Login</Link></button>
            </div>
        </form>
    </div>
  )
}

export default Login