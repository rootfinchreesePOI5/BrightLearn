import React, { useContext, useState } from 'react'
import { cloud, google } from '../assets/images'
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp, logOut, signInWithGoogle } from '../auth';
import {toast} from 'sonner'


function Login() {
  const [state, setstate] = useState('Login');
  const { token, setToken } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');
  const [confirm , setConfirm] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await signIn(email, password);
    if (user) {
      toast.success("Welcome Back! 🥳", user);
      setToken(user.accessToken); // Store token if using context
      navigate("/"); // Redirect after login
    } else {
      toast.error("Invalid email or password!");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(confirm !== password){
      setError("Password doesn't match! Try again.");
    }else{
      const user = await signUp(email, password);
    }
    if (user) {
      toast.success("User signed up:", user);
      setToken(user.accessToken); // Store token if using context
      navigate("/setup-account"); // Redirect after signup
    } else {
      toast.error("Sign-up failed! Try again.");
    }
  };
  

  return (
    <div className='h-[100vh] md:h-[90vh] flex items-center justify-center'>
      {/* form div */}
      <div className='md:w-[30%] w-full bg-white h-fit !p-5 rounded-xl flex flex-col items-center gap-6'>
        <div className='flex flex-col items-center gap-2  '>
          <p className='flex items-center gap-2 md:text-xl font-light'>{state === 'Login' ? 'Sign in' : "Create account"} to  <span className='flex items-center gap-1'>
            <img className='w-6' src={cloud} alt="" />
            BrightLearn</span></p>
          {
            state === 'Login' ?
              <p className='font-medium text-gray-600 text-xs'>Welcome back! please sign in to continue</p> :
              <p className='font-medium text-gray-600 text-xs'>Welcome! please create an account to continue</p>
          }
        </div>
        <button
          onClick={async () => {
            const user = await signInWithGoogle();
            if (user) {
              console.log("User signed in:", user);
              setToken(user.accessToken); // Store token if using context
              navigate("/"); // Redirect after login
            }
          }}
          className="flex items-center justify-center gap-3 active:scale-95 duration-700 transition-all cursor-pointer hover:bg-neutral-200 bg-gray-100 w-full md:w-[80%] !p-[0.5rem] rounded-sm"
        >
          <img className="w-4" src={google} alt="" />
          <p className="text-sm text-zinc-700">Sign in with Google</p>
        </button>

        <div className="flex items-center gap-3 w-[80%]    ">
          <hr className="h-[1px] border-0 bg-gray-200 flex-grow" />
          <p>or</p>
          <hr className="h-[1px] border-0 bg-gray-200 flex-grow" />
        </div>
        <form className='w-full md:w-[80%] flex flex-col gap-3' onSubmit={state === 'Login' ? handleLogin : handleSignUp}>
          <input onChange={(e) => setEmail(e.target.value)} autoComplete='email' className='text-sm h-[4.75vh] !px-2 bg-gray-100 rounded-sm outline-gray-500 border-[1px] border-gray-300' type="text" placeholder='Email Address' required />
          <input onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' style={state === 'Login' ? { display: 'flex' } : { display: 'none' }} className='text-sm h-[4.75vh] !px-2 bg-gray-100 rounded-sm outline-gray-500 border-[1px] border-gray-300' type="password" placeholder='Enter password' required />
          {
            state !== 'Login' && (
              <>
                <input id='pass1' onChange={(e) =>setPassword(e.target.value)} autoComplete='new-password' style={state === 'Login' ? { display: 'none' } : { display: 'flex' }} className='text-sm h-[4.75vh] !px-2 bg-gray-100 rounded-sm outline-gray-500 border-[1px] border-gray-300' type="password" name='make-password' placeholder='Enter password' required />
                <input id='pass2' onChange={(e) =>setConfirm(e.target.value)} autoComplete='confirm-password' style={state === 'Login' ? { display: 'none' } : { display: 'flex' }} className='text-sm h-[4.75vh] !px-2 bg-gray-100 rounded-sm outline-gray-500 border-[1px] border-gray-300' type="password" name='confirm-pass' placeholder='Confirm password' required />
                <p className='text-xs text-red-500'>{error}</p>
              </>
            )
          }
          <button className='flex items-center justify-center gap-3 active:scale-95 duration-700 transition-all cursor-pointer hover:bg-neutral-800 bg-gray-700 text-white w-[100%] h-[4.75vh] rounded-sm ' type='submit'>continue</button>
        </form>
        <div>
          {
            state === 'Login' ?
              <p className='text-sm text-gray-500'>Don't have an account ? <span onClick={() => setstate('Register')} className='text-gray-900 font-medium underline cursor-pointer'>Sign Up.</span></p>
              : <p className='text-sm text-gray-500'>Already have an account? <span onClick={() => setstate('Login')} className='text-gray-900 font-medium underline cursor-pointer'>Sign in.</span></p>
          }

        </div>
      </div>
    </div>
  )
}

export default Login
