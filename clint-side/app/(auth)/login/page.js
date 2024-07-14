"use client"
import CustomForm from '@/components/custom_components/customForm'
import React from 'react'
import { initialValuesLogin, singInData, signInSchema } from '../config'
import Link from 'next/link'
import { useZodFormValidation } from '@/utils/formSchima'
import { getLogin } from '@/api/authApi'
// import { setLocalStorageItem } from '@/utils/localstorage'
import { useToast } from "@/components/ui/use-toast"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const { onSubmit } = useZodFormValidation();
  const route = useRouter()
  const { toast } = useToast()
  const handleFormSubmit = async (data) => {
    const submittedData = await onSubmit(data);
    try {
      const resp = await getLogin(submittedData)
      if (resp.data?.resp_code !== "200") {
        toast({
          title: resp.data.err
        })
      } else {
        route.push("/dashboard")
        toast({
          title: "your are login successfully"
        })
      }
    } catch (error) {
      toast({
        title: "some thing wrong"
      })
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-card p-4 rounded-sm text-center'>
        <h2 className='text-2xl font-semibold mb-1'>Sign In</h2>
        <p className='text-base font-normal text-gray-400'>Let connect with us and improve your daily habit</p>
        <div className='flex flex-col'>
          <CustomForm btnText="Sing In" schema={signInSchema} handleFormSubmit={handleFormSubmit} initialValues={initialValuesLogin} inputData={singInData} />
        </div>
        <p className='py-2 text-sm'>if you are not member lets connect us{" "}
          <Link href="/signup" className='text-purple-500 animate-pulse font-semibold'>sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn