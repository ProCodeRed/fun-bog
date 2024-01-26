import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignInPage = () => {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }

  const signUpSubmitHandler = async (e) => {
    e.preventDefault();

    if(!formData.email || !formData.password){
      return setErrorMessage('Please fill all the fields given.')
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if(data.success === false){
        return setErrorMessage(data.message = "This user already exits. Please Sign in.")
      }
      setLoading(false)

      // if signed up successfully navigate to sign in page
      if(res.ok){
        navigate('/')
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <span className='text-xl sm:text-4xl text-semibold'>Welcome To</span>
        <Link to={"/"} className='text-xl sm:text-4xl font-bold dark:text-white px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Fun Blog</Link>
        <p className='text-sm mt-5'>This is Fun Blog web app. You can signup with your email and password or with Google</p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={signUpSubmitHandler}>
            <div>
              <Label value='Your Email' />
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange} />
            </div>
            <div>
              <Label value='Your Password' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange} />
            </div>
            <Button gradientDuoTone="purpleToBlue" type='submit' disabled={loading}>
              {loading ? <><Spinner size={"sm"} /><span className='pl-3'>Loading...</span></> : "Sign In"}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an Account ?</span>
            <Link to={'/sign-up'} className='text-blue-600 font-semibold'>Sign Up</Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color={'failure'}>{errorMessage}</Alert>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignInPage