import { PodcastCardProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: PodcastCardProps) => {
  const router = useRouter();

  const handleViews = () => {
    // increase views
    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div
      className="group cursor-pointer relative p-[1px] rounded-xl transition-all duration-300 hover:-translate-y-2"
      onClick={handleViews}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#2D6B66]/20 to-[#F5E6D3]/20 blur-sm" />

      {/* Card Content */}
      <figure className="relative flex flex-col gap-2 p-2 rounded-xl bg-white shadow-sm border border-gray-100">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={imgUrl}
            width={174}
            height={174}
            alt={title}
            className="aspect-square h-fit w-full object-cover transition-transform duration-500 group-hover:scale-105 2xl:size-[200px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D6B66]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex flex-col p-2">
          <h1 className="text-16 truncate font-bold text-gray-800 group-hover:text-[#2D6B66] transition-colors">
            {title}
          </h1>
          <h2 className="text-12 truncate font-normal capitalize text-gray-500">
            {description}
          </h2>

          {/* Play Indicator */}
          <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D6B66] animate-pulse" />
            <span className="text-11 text-[#2D6B66]">Click to play</span>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
