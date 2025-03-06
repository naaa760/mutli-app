import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
import PodcastPlayer from "@/components/PodcastPlayer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col bg-white">
      <main className="relative flex">
        <LeftSidebar />

        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14 bg-white">
          <div className="mx-auto flex w-full max-w-7xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="menu icon"
              />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              <Toaster />
              {children}
            </div>
          </div>
        </section>

        <div className="hidden lg:block w-[320px] min-w-[320px] border-l border-gray-100 bg-white">
          <RightSidebar />
        </div>
      </main>

      <PodcastPlayer />
    </div>
  );
}
