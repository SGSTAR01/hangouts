

import React from 'react';
import PostCardFeed from '@/components/PostCard-Feed';
import { SidebarTrigger } from "@/components/ui/sidebar";


export default function Rough() {
  return (
    <div className="w-full mx-auto border ">

      {/* Show sidbar btn when screen width is below 770px */}
      <SidebarTrigger className='md:hidden w-14 h-14 text-2xl' />
      <div className='flex'>


        <div className='w-full sm:w-6/10 '>

          {/* Loop to render PostCardFeed 5 times */}
          {Array.from({ length: 5 }).map((_, index) => (
            <PostCardFeed key={index} />
          ))}
        </div>

        <div className="hidden sm:block w-4/10 text-center pt-10">
          The Ad section || anything u want
        </div>
      </div>
    </div>
  );
}
