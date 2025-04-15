import React, { useState, useEffect } from 'react'
import { cloud } from '../assets/images.js'
import { TextField } from '@mui/material'

const Survey = () => {
  const [steps, setSteps] = useState(0);
  const [textValue, setValue] = useState({
    header: "Create BrightLearn Account",
    text: 'Enter Your Name:'
  });

  // Update form content when step changes
  useEffect(() => {
    changepage();
  }, [steps]);

  const changepage = () => {
    if (steps === 0) {
      setValue({
        header: "Create BrightLearn Account",
        text: 'Enter Your Name:'
      });
    } else if (steps === 1) {
      setValue({
        header: "Basic Information",
        text: 'Enter your birthday and gender'
      });
    } else if (steps === 2) {
      setValue({
        header: "How you’ll sign in",
        text: 'Create an Email address for signing in to your Google Account'
      });
    }
  };

  const handleNext = () => {
    if (steps < 2) {
      setSteps(prev => prev + 1);
    }
    // You can add final submit logic or navigation here if needed
  };

  return (
    <div className='h-fit flex flex-col gap-[3.5rem] !px-[5rem]'>
      <div className='flex flex-col items-center gap-2'>
        <p className='flex items-center gap-2 md:text-xl font-light'>
          Create your 
          <span className='flex items-center gap-1'>
            <img className='w-6' src={cloud} alt="" />
            BrightLearn Account
          </span>
        </p>
        <p className='font-medium text-gray-600 text-xs'>
          Welcome! Please fill out the form to create your account.
        </p>
      </div>

      {/* form content */}
      <div className='bg-gray-100 rounded-2xl border border-gray-300 min-h-[65vh] flex flex-col gap-[3rem] justify-center !py-[5rem] !px-[2.5rem]'>
        <img className='w-12' src={cloud} alt="" />
        <div className='grid grid-cols-2 gap-6 w-full items-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-medium text-zinc-800'>{textValue.header}</h1>
            <p className='font-light'>{textValue.text}</p>
          </div>
          <div className='flex flex-col gap-6'>
            {steps === 0 && (
              <>
                <TextField className='w-full' label="First name" variant="outlined" />
                <TextField className='w-full' label="Surname (optional)" variant="outlined" />
              </>
            )}
            {steps === 1 && (
              <>
                <TextField className='w-full' label="Birthday" variant="outlined" />
                <TextField className='w-full' label="Gender" variant="outlined" />
              </>
            )}
            {steps === 2 && (
              <>
                <TextField className='w-full' label="Email address" variant="outlined" />
                <TextField className='w-full' label="Confirm email" variant="outlined" />
              </>
            )}
          </div>
        </div>
        <div className='flex items-end justify-end w-full'>
          <button
            onClick={handleNext}
            className='bg-pink-600 text-white h-[6vh] cursor-pointer rounded-3xl w-[80px]'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
