"use client"
import { Lock, Mail, User2Icon, icons } from 'lucide-react';
import { z } from 'zod'

export const signUpSchema = z.object({
    username: z.string().min(3),
    email: z.string().email({message:"please enter valid email"}),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long'
    })
});

export const initialValues = {
    username: "",
    email: "",
    password: ""
}

export const inputData = [
    {
        name: "username",
        placeholder: "Enter your username",
        type: "text",
        icon: <User2Icon />
    },
    {
        name: "email",
        placeholder: "Enter your email",
        type: "email",
        icon: <Mail />
    },
    {
        name: "password",
        placeholder: "Enter your password",
        type: "password",
        icon:<Lock />
    },
]