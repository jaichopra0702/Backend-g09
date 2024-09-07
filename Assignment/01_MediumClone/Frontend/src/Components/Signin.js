import React,{useState} from 'react'
import '../Components/Signin.css'

const Signin = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!username||!email||!password){
            setError('Please fill in all fields.');
        }
        else{
            setError('');
            alert('This is a static page.No actual login occurs.')
        }
    }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
            <label>Username</label>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
            />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type='submit'>Sign in</button>
      </form>
    </div>
  )
}

export default Signin
