"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import LoaderSpinner from "./LoaderSpinner";
import { useAudio } from "@/providers/AudioProvider";
import { cn } from "@/lib/utils";

const RightSidebar = () => {
  const { user } = useUser();
  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);
  const router = useRouter();

  const { audio } = useAudio();

  return (
    <section
      className={cn(
        "relative p-6 bg-gradient-to-b from-[#1a1a1a]/95 to-black/90 backdrop-blur-md",
        "rounded-tl-[40px] rounded-bl-[40px] overflow-hidden border-l border-white/5",
        "h-[calc(100vh-5px)]",
        {
          "h-[calc(100vh-140px)]": audio?.audioUrl,
        }
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D6B66]/10 to-transparent" />
        <div className="absolute top-0 right-0 w-full h-[200px] bg-[#2D6B66]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-full h-[200px] bg-black/20 blur-3xl" />
      </div>

      <SignedIn>
        <Link
          href={`/profile/${user?.id}`}
          className="flex gap-3 pb-12 relative group"
        >
          <div className="p-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <UserButton />
          </div>
          <div className="flex w-full items-center justify-between">
            <h1 className="text-16 truncate font-semibold bg-gradient-to-r from-[#2D6B66] to-teal-400 bg-clip-text text-transparent">
              {user?.firstName} {user?.lastName}
            </h1>
            <Image
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
              className="opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-80"
            />
          </div>
        </Link>
      </SignedIn>

      <section className="space-y-6">
        <Header
          headerTitle={
            <span className="bg-gradient-to-r from-[#2D6B66] to-teal-400 bg-clip-text text-transparent">
              Fans Like You
            </span>
          }
        />
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4">
          <Carousel fansLikeDetail={topPodcasters!} />
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <Header
          headerTitle={
            <span className="bg-gradient-to-r from-[#2D6B66] to-teal-400 bg-clip-text text-transparent">
              Top Podcastrs
            </span>
          }
        />
        <div className="space-y-4">
          {topPodcasters?.slice(0, 3).map((podcaster) => (
            <div
              key={podcaster._id}
              className="flex cursor-pointer justify-between p-3 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group"
              onClick={() => router.push(`/profile/${podcaster.clerkId}`)}
            >
              <figure className="flex items-center gap-3">
                <div className="p-0.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#2D6B66]/30">
                  <Image
                    src={podcaster.imageUrl}
                    alt={podcaster.name}
                    width={44}
                    height={44}
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-14 font-medium text-white/80 group-hover:text-[#4DCCBD] transition-colors">
                  {podcaster.name}
                </h2>
              </figure>
              <div className="flex items-center">
                <p className="text-12 text-white/60 group-hover:text-white/80 transition-colors">
                  {podcaster.totalPodcasts} podcasts
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default RightSidebar;
