import { GalleryVerticalEnd } from "lucide-react"

import { SignupForm } from "../../../components/signup-form"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-2 p-4 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center flex-col font-medium">
          <svg
              className="mb-2 size-20 rounded-2xl"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100%" height="100%" fill="#000000" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="serif"
                fontSize="120"
                // fill="#1f2937"
                fill="#ffffff"
              >
                旅
              </text>
            </svg>
            Ryodou
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/assets/dest-2.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.8]"
        />
      </div>
    </div>
  )
}

