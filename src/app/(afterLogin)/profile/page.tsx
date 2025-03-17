"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { addPasskey } from "@/lib/auth-actions";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
      {/* <Navbar /> */}
      <SidebarTrigger />
      <div className="px-6 py-16 max-w-4xl mx-auto">
        {/* welcome - Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-900">
            Welcome, {session?.user?.username || "User!"}
          </h2>
        </div>

        <p className="text-blue-900 text-sm"></p>

        <div className="bg-blue-200 rounded-lg shadow-lg p-6 mt-4">
          {/* Profile Card */}
          <div className="flex items-center justify-between">
            {/* Left Section: Avatar & Name */}
            <div className="flex gap-6 items-center">
              <Avatar className="w-16 h-16">
                <AvatarImage src={ session?.user?.image ?? "/avatar.jpg"} alt={session?.user?.username ?? ""} />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {session?.user?.name}
                </h3>
                <p className="text-gray-700 text-sm">{session?.user?.email}</p>
              </div>
            </div>

            {/* Right Section: Button */}
            <Button variant="secondary"
              className="bg-blue-500 text-white"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Save" : "Edit"}
            </Button>
          </div>

          {/* Profile Form */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <Input className="text-black"
                disabled={!isEditing}
                placeholder="Your First Name"
                defaultValue={session?.user?.name}
              />
            </div>
            {/* <div className="flex ">

              <Button
                className="bg-blue-500 text-white"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Save" : "Edit"}
              </Button>
            </div> */}

            <div>
              <label className="text-sm text-gray-600">Nick Name</label>
              <Input className="text-black"
                disabled={!isEditing}
                placeholder="Your Nickname"
                defaultValue={session?.user?.username ?? ""}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Gender</label>
              <select
                className="border rounded-md p-2 w-full text-black"
                disabled={!isEditing}
                defaultValue={"Male"}
              >
                <option>Your Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Country</label>
              <select
                className="border rounded-md p-2 w-full text-black"
                disabled={!isEditing}
                defaultValue={"India"}
              >
                <option>Your Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Language</label>
              <select
                className="border rounded-md p-2 w-full text-black"
                disabled={!isEditing}
                defaultValue={"English"}
              >
                <option>Your Language</option>
                <option>English</option>
                <option>Bangla</option>
              </select>
            </div>
          </div>

          {/* Email Address Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">My Email Address</h3>
            <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-md">
              <span className="bg-blue-500 text-white rounded-full p-2">
                📧
              </span>
              <div>
                <p className="text-sm text-black font-medium">{session?.user?.email}</p>
                <p className="text-xs text-gray-500">1 month ago</p>
              </div>
            </div>

            <Button variant="secondary" className="bg-blue-500 text-white mt-4">
              + Add Email Address
            </Button>

            <Button onClick={addPasskey} variant="secondary" className="m-2 mt-4">
              + Add PassKey
            </Button>
          </div>
        </div>

        {/* Other Details*/}
        <div className="bg-blue-200 rounded-lg shadow-lg p-6 mt-4">
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="text-sm text-gray-600">Total Friends</label>
              <Input className="text-black" disabled={true} placeholder="Nil" defaultValue={"120"} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Total Posts</label>
              <Input className="text-black" disabled={true} placeholder="Nil" defaultValue={"56"} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Profile Reach</label>
              <Input className="text-black" disabled={true} placeholder="Nil" defaultValue={"1.2k"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
