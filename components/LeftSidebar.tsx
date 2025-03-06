"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { useAudio } from "@/providers/AudioProvider";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { audio } = useAudio();

  return (
    <section
      className={cn(
        "relative p-6 bg-gradient-to-b from-[#1a1a1a]/95 to-black/90 backdrop-blur-md",
        "rounded-tr-[40px] rounded-br-[40px] overflow-hidden border-r border-white/5",
        "h-[calc(100vh-5px)]",
        {
          "h-[calc(100vh-140px)]": audio?.audioUrl,
        }
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D6B66]/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-[200px] bg-[#2D6B66]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-black/20 blur-3xl" />
      </div>

      <nav className="flex flex-col gap-6 relative">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-3 pb-10 max-lg:justify-center"
        >
          <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          </div>
          <h1 className="text-24 font-extrabold bg-gradient-to-r from-[#2D6B66] to-teal-400 bg-clip-text text-transparent">
            Podcastr
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);

          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-3 items-center py-4 px-4 rounded-xl transition-all duration-300",
                "hover:bg-white/5 backdrop-blur-sm group",
                "max-lg:justify-center lg:justify-start",
                {
                  "bg-[#2D6B66]/20 border border-white/10": isActive,
                }
              )}
            >
              <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-[#2D6B66]/10 transition-colors">
                <Image
                  src={imgURL}
                  alt={label}
                  width={20}
                  height={20}
                  className={cn("transition-opacity", {
                    "opacity-90": isActive,
                    "opacity-60 group-hover:opacity-80": !isActive,
                  })}
                />
              </div>
              <p
                className={cn("font-medium transition-colors", {
                  "text-[#4DCCBD]": isActive,
                  "text-white/70 group-hover:text-white/90": !isActive,
                })}
              >
                {label}
              </p>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <SignedOut>
          <Button
            asChild
            className="w-full bg-gradient-to-r from-[#2D6B66] to-[#245652] hover:opacity-90 text-white font-medium rounded-xl border border-white/10"
          >
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <Button
            className="w-full bg-gradient-to-r from-[#2D6B66] to-[#245652] hover:opacity-90 text-white font-medium rounded-xl border border-white/10"
            onClick={() => signOut(() => router.push("/"))}
          >
            Log Out
          </Button>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
