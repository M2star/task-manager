import CustomForm from '@/components/custom_components/customForm'
import React from 'react'
import { initialValues, inputData, signUpSchema } from './config'

const SignIn = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-card p-4 rounded-sm text-center'>
        <h2 className='text-2xl font-semibold mb-1'>SignIn</h2>
        <p className='text-base font-normal text-gray-400'>Let connect with us and improve your daily habit</p>
        <div className='flex flex-col'>
          <CustomForm btnText="Sing In" schema={signUpSchema} initialValues={initialValues} inputData={inputData} />
        </div>
      </div>
    </div>
  )
}

export default SignIn