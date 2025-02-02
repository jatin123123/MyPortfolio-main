import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { FileUser, Linkedin } from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Resume",
      icon: (
        <FileUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Hire Me",
      icon: (
        <Image
        className="object-cover w-full h-full rounded-full"
        src="/me.jpg"
        width={20}
        height={20}
        alt="Aceternity Logo" />
        
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/jatin-jangid-720791272/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Jatinjangid0008",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/jatin123123",
    },
  ];
  return (
    (<div className="flex items-center justify-center h-[35rem] w-full">
     <div className="fixed z-50 bottom-10">
     <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
     </div>
    </div>) 
  );
}
