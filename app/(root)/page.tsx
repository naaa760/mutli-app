"use client";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";
import Image from "next/image";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  if (!trendingPodcasts) return <LoaderSpinner />;

  return (
    <div className="min-h-screen relative bg-white">
      {/* Background with Pattern */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/bk.jpg"
          alt="Background"
          fill
          className="object-cover opacity-[0.08]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
          <section className="flex flex-col gap-5 max-w-[1400px] mx-auto px-6">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-[28px] font-bold text-white-1">
                Trending Podcasts
              </h1>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2D6B66] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-[#2D6B66]/60" />
                <span className="w-2 h-2 rounded-full bg-[#2D6B66]/30" />
              </div>
            </div>

            {/* Podcast Grid */}
            <div className="podcast_grid relative">
              {/* Decorative Elements */}
              <div className="absolute -top-20 right-0 w-72 h-72 bg-[#2D6B66]/5 rounded-full blur-3xl" />
              <div className="absolute top-40 -left-20 w-72 h-72 bg-[#F5E6D3]/20 rounded-full blur-3xl" />

              {trendingPodcasts?.map(
                ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
                  <PodcastCard
                    key={_id}
                    imgUrl={imageUrl as string}
                    title={podcastTitle}
                    description={podcastDescription}
                    podcastId={_id}
                  />
                )
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
