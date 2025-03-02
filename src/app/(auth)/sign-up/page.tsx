"use client"
// Note: add google and fb sign in/up


import { signUpSchema } from "@/schemas/signUpSchema"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { useToast } from "@/hooks/use-toast" // shadcn toast depriciated
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"




export default function Signup() {
    const [username, setUsername] = useState('')

    //zod implimentation
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: '',
            fullname: '',
            email: '',
            password: '',
        }
    })


    //submit handler.
    async function onSubmit(values: z.infer<typeof signUpSchema>) {
        // Do something with the form values.
        try {
            // shadcn toast depriciated
            // toast({
            //     title: 'Success',
            //     description: "Your account is being created..!"
            // })
            
            console.log(values)
        } catch (error) {
            console.error("-- err in signup of user @signin page, err:", error)
        }
    }



    return (
        <>
            <Navbar />
            <div className="py-30 flex items-center justify-center min-h-screen bg-gray-900 text-gray-200 px-4">
                <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">

                    <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
                        Create Your Account
                    </h2>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="droy54@xyz.com" type="email" {...field} />
                                        </FormControl>

                                        <FormMessage />

                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Dhanush Roy" {...field} />
                                        </FormControl>
                                        
                                        <FormMessage />


                                    </FormItem>

                                )}
                            />

                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="dhanus54" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Username should be uniqe.
                                        </FormDescription>
                                        <FormMessage />


                                    </FormItem>

                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="******"
                                                {...field}

                                            />
                                        </FormControl>



                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="bg-blue-500">Submit</Button>
                        </form>
                    </Form>

                    {/* Footer */}
                    <p className="text-center text-gray-500 mt-6">
                        Already have an account?{' '}
                        <Link href="/sign-in" className="text-blue-400 hover:underline" >
                            Sign in
                        </Link>
                    </p>


                </div>
            </div>
        </>
    )
}
