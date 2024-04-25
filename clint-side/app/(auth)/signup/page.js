"use client"
import CustomForm from '@/components/custom_components/customForm'
import React from 'react'
import { initialValues, singUpData, signUpSchema } from '../config'
import Link from 'next/link'
import { useZodFormValidation } from '@/utils/formSchima'
import { getSignIn } from '@/api/authApi'

const SignUp = () => {
  const { onSubmit } = useZodFormValidation();
  const handleFormSubmit = async (data) => {
    const submittedData = await onSubmit(data);
    getSignIn(submittedData)
  };
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-card p-4 rounded-sm text-center'>
        <h2 className='text-2xl font-semibold mb-1'>Sign Up</h2>
        <p className='text-base font-normal text-gray-400'>Let connect with us and improve your daily habit</p>
        <div className='flex flex-col'>
          <CustomForm btnText="Sing In" schema={signUpSchema} handleFormSubmit={handleFormSubmit} initialValues={initialValues} inputData={singUpData} />
        </div>
        <p className='py-2 text-sm'>if you are already member lets start work with{" "} 
          <Link href="/login" className='text-purple-500 animate-pulse font-semibold'>sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp