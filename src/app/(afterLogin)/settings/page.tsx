"use client";

import React from "react";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Shield,
  User,
  Bell,
  Lock,
  HelpCircle,
  Globe,
  DollarSign,
  Star,
  Users,
} from "lucide-react";

// Sidebar menu items
const settingsMenu = [
  { title: "Your account", url: "#", icon: User },
  { title: "Monetization", url: "#", icon: DollarSign },
  { title: "Premium", url: "#", icon: Star },
  { title: "Creator Subscriptions", url: "#", icon: Users },
  { title: "Security and account access", url: "#", icon: Shield },
  { title: "Privacy and safety", url: "#", icon: Lock },
  { title: "Notifications", url: "#", icon: Bell },
  {
    title: "Accessibility, display, and languages",
    url: "#",
    icon: Globe,
  },
  { title: "Additional resources", url: "#", icon: HelpCircle },
  { title: "Help Center", url: "#", icon: HelpCircle },
];

export default function Settings() {



  return (
    <div className="w-full min-h-screen flex flex-col sm:flex-row">
      {/* Mobile Sidebar Toggle */}
      <div className="p-4 sm:hidden">
        <SidebarTrigger className="w-10 h-10 " />
      </div>

      {/* Sidebar */}
      <div className="w-full border-r border-gray-800 p-8 flex flex-col justify-center sm:justify-start">

        <h2 className="text-xl font-semibold mb-6">Settings</h2>
        <ul className="space-y-1">
          {settingsMenu.map((item, index) => {
            const Icon = item.icon;

            return (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`flex items-center gap-3 py-2 px-3 rounded-md text-sm font-medium transition-colors hover:bg-gray-500`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
