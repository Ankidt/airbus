import React,{useState} from 'react' ;
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login=()=>{ 
	const [signupUser, setSignupUser] = useState(false);
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
  
	const navigate = useNavigate();
	if(username){
	localStorage.setItem("email", email);
	localStorage.setItem("password", password);
	localStorage.setItem("username", username);}
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  if (!email || !password) {
		alert("Please enter email and password");
	  } else if (
		email === localStorage.getItem("email") &&
		password === localStorage.getItem("password")
	  ) {
		navigate("/Flight");
	  } else {
		alert("Incorrect email or password. Please try again.");
	  }
	};
  
	return (
	  <div className='card'>
		<form className='form'>
		  <h2 className='title'>Log in</h2>
		  <p className='subtitle'>
			{signupUser ? 'If you have an account' : "Don't have an account?"} 
			<a href='#' onClick={() => setSignupUser(!signupUser)}>{signupUser ? 'Log In' : 'sign Up'}</a>
		  </p>
  
		 
  
		  <p className='or'>
			<span>or</span>
		  </p>
  
		  <div className='email-login'>
			{signupUser && (
			  <>
			  <label htmlFor='username'>
			  <b>Username</b>
			</label>
			<input
			  type='text'
			  placeholder='Enter UserName'
			  name='username'
			  required
			  className='input[type=text]'
			  value={username}
			  onChange={(e) => setUsername(e.target.value)}
			/>
			</>
			)}
			<label htmlFor='email'>
			  <b>Email</b>
			</label>
			<input
			  type='text'
			  placeholder='Enter Email'
			  name='uname'
			  required
			  className='input[type=text1]'
			  value={email}
			  onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor='psw'>
			  <b>Password</b>
			</label>
			<input
			  type='password'
			  placeholder='Enter Password'
			  name='psw'
			  required
			  className='input[type=text2]'
			  value={password}
			  onChange={(e) => setPassword(e.target.value)}
			/>
		  </div>
		  <button className='cta-btn' onClick={handleSubmit}>
			{signupUser ? 'Register' : 'Log In'}
		  </button>
		  {
			!signupUser &&
		  <a className='forget-pass' href='#'>
			Forgot password?
		  </a>
		  }
		  {error && <p className='error'>{error}</p>}
		</form>
	  </div>
      )
      }
      export default Login;