import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BannerProps {
  showBanner: boolean;
}

export const Banner: React.FC<BannerProps> = ({ showBanner }) => {
  return (
    <>
      <div>
        {showBanner && (
          <div className="p-4 fixed top-0 left-0 right-0  h-10 w-full bg-[#30363D] text-white flex items-center justify-center z-50">
            <p className="md:text-md text-sm">Display anouncement here..</p>
          </div>
        )}
      </div>
    </>
  );
};
