'use client'
// Note: add google and fb sign in/up


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signInSchema } from "@/schemas/signInSchema"
import Navbar from "@/components/Navbar"


export default function Signin() {

  //zod implimentation
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: '',   // look out- its email
      password: '',
    }
  })

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
      // Do something with the form values.
      try {
        // shadcn toast depriciated
        // toast({
        //     title: 'Success',
        //     description: "You are being logged in."
        // })
        
        console.log(data)
        form.reset(); // clear the form and route to other page
    } catch (error) {
        console.error("-- err in signup of user @signin page, err:", error)
    }
  }


  return (
    <>
     <Navbar/>
      <div className="py-30 flex justify-center items-center min-h-screen text-gray-100 bg-gray-900 ">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-md m-4">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-blue-400 tracking-tight lg:text-5xl mb-6">
              {/* Join Hangout */}Hangout now.!
            </h1>
            <p className="mb-4 text-sm">Sign in to Hangout. </p>
          </div>

          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">

              <FormField
                name="identifier"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email / Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email or username"
                        {...field}

                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
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
              <Button type="submit" className="bg-blue-500">
                Signin
              </Button>
            </form>
          </Form>

          <div className="text-center text-gray-500 mt-4">
            <p>
              Register here!{' '}
              <Link href="/sign-up" className="text-blue-600 text-sm hover:text-blue-800">
                Sign Up
              </Link>
            </p>

          </div>
        </div>
      </div>
    </>

  )
}

