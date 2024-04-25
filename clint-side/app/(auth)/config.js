"use client"
import { Lock, Mail, User2Icon, icons } from 'lucide-react';
import { z } from 'zod'

export const signUpSchema = z.object({
    identifier: z.string().email({ message: "please enter valid email" }),
    username: z.string().min(3),
    email: z.string().email({ message: "please enter valid email" }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long'
    })
});
export const signInSchema = z.object({
    identifier: z.string().min(3).refine((value) => {
        if (value.includes("@")) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        } else {
            return true
        }

    }, {
        message: 'Please enter a valid email or username'
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long'
    })
});

export const initialValues = {
    username: "",
    email: "",
    password: "",
}

export const initialValuesLogin = {
    identifier: "",
    password: "",
}

export const singUpData = [
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
        icon: <Lock />
    },
]
export const singInData = [
    {
        name: "identifier",
        placeholder: "Enter your email",
        type: "text",
        icon: <Mail />
    },
    {
        name: "password",
        placeholder: "Enter your password",
        type: "password",
        icon: <Lock />
    },
]