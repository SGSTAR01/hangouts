"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500">
      <Navbar />
      <div className="p-6 py-30 max-w-4xl mx-auto">

        {/* welcome - Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-900">Welcome, Dhanush.!</h2>

        </div>

        <p className="text-blue-900 text-sm">Tue, 07 June 2022</p>

        <div className="bg-blue-200 rounded-lg shadow-lg p-6 mt-4">
          {/* Profile Card */}
          <div className="flex items-center justify-between">
            {/* Left Section: Avatar & Name */}
            <div className="flex gap-6 items-center">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/avatar.jpg" alt={"Dhanush Roy"} />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Dhanush Roy</h3>
                <p className="text-gray-500 text-sm">dhanus54@gmail.com</p>
              </div>
            </div>

            {/* Right Section: Button */}
            <Button
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
              <Input disabled={!isEditing} placeholder="Your First Name" defaultValue={"Dhanush Roy"} />
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
              <Input disabled={!isEditing} placeholder="Your Nickname" defaultValue={"Dhanus"} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Gender</label>
              <select className="border rounded-md p-2 w-full" disabled={!isEditing} defaultValue={"Male"}>
                <option>Your Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>

              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Country</label>
              <select className="border rounded-md p-2 w-full" disabled={!isEditing} defaultValue={"India"}>
                <option>Your Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Language</label>
              <select className="border rounded-md p-2 w-full" disabled={!isEditing} defaultValue={"English"}>
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
              <span className="bg-blue-500 text-white rounded-full p-2">📧</span>
              <div>
                <p className="text-sm font-medium">dhanus54@gmail.com</p>
                <p className="text-xs text-gray-500">1 month ago</p>
              </div>
            </div>

            <Button className="bg-blue-500 text-white mt-4">+ Add Email Address</Button>
          </div>
        </div>

        {/* Other Details*/}
        <div className="bg-blue-200 rounded-lg shadow-lg p-6 mt-4">
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="text-sm text-gray-600">Total Friends</label>
              <Input disabled={true} placeholder="Nil" defaultValue={"120"} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Total Posts</label>
              <Input disabled={true} placeholder="Nil" defaultValue={"56"} />
            </div>

            <div>
              <label className="text-sm text-gray-600">Profile Reach</label>
              <Input disabled={true} placeholder="Nil" defaultValue={"1.2k"} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

