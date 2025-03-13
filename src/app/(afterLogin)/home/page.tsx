

import React from 'react';
import PostCardFeed from '@/components/PostCard-Feed';
import { SidebarTrigger } from "@/components/ui/sidebar";


export default function Home() {
  return (
    <div className="w-full max-w-2xl mx-auto ">

      {/* Show sidbar btn when screen width is below 770px */}
      <SidebarTrigger className='md:hidden w-14 h-14 text-2xl' />




      {/* Loop to render PostCardFeed 5 times */}
      {Array.from({ length: 5 }).map((_, index) => (
        <PostCardFeed key={index} />
      ))}
    </div>
  );
}
