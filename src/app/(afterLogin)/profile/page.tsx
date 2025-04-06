"use client";

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostCardFeed from '@/components/PostCard-Feed';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import Image from 'next/image';

export default function ProfilePage() {
  const { data: session } = authClient.useSession();

  return (
    <div className="w-full mx-auto  ">

      {/* Show sidbar btn when screen width is below 770px */}
      <SidebarTrigger className='md:hidden w-14 h-14 text-2xl' />
      <div className='flex'>

        {/* MAIN profile block */}
        <div className='w-full sm:w-6/10 '>

          <div className="overflow-hidden border ">
            {/* Cover Image */}
            <div className="relative h-48 sm:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/dest-3.jpg')" }}>
              {/* Profile Image */}
              <div className="absolute -bottom-12 left-4 border-4 border-black rounded-full overflow-hidden w-24 h-24">
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session?.user?.username ?? "User"}
                    placeholder="empty"
                    fill
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    {session?.user?.username?.charAt(0).toUpperCase() ?? "?"}
                  </div>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="pt-14 px-4 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold">{session?.user?.name}</h1>
                  <p className="text-m">{session?.user?.username ?? "username loading!"}</p>
                </div>
                <button className="px-4 py-1 border border-white rounded-full hover:bg-white hover:text-black text-sm">
                  Settings
                </button>
              </div>

              <p className="mt-4 text-sm">
                {session?.user?.bio ?? "Hello World!"}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm ">
                <span>📍{session?.user?.location}</span>
                <a href="https://github.com/sachin-bi" className="hover:underline" target="_blank">github.com/sachin-bi</a>
                <span>📱 {session?.user.emailVerified ? ("Verified") : ("Not Verified")} </span>
                <span>📅 {session?.user.createdAt.toDateString()}</span>
              </div>

              <div className="mt-3 flex gap-6 text-sm">
                <span><strong >92</strong> Following</span>
                <span className="text-sm"><strong>6</strong> Followers</span>
              </div>
            </div>

          </div>

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
