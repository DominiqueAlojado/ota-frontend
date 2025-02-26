"use client";
import { NAVIGATION, cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import CreateJobButton from "../create-jobs/create-job-button";

interface BannerProps {
  showBanner: boolean;
}
export const Header: React.FC<BannerProps> = ({ showBanner }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoids hydration issues

  const openMobileNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`hidden md:block ${
          showBanner
            ? "pt-10  fixed w-full bg-[#F6F8FC]  bg-opacity-70 backdrop-blur-sm z-10 "
            : ""
        }`}
      >
        <div className="lg:max-w-screen-lg mx-auto flex-1 w-full flex flex-col lg:flex-row pt-4 md:pt-0 mt-6 md:mt-0">
          <div className="flex-col md:flex-row w-full  md:pl-4 md:pr-4 ">
            <div className=" flex  gap-5 p-4 items-center ">
              <div>
                <Link
                  href="/"
                  className=" flex items-center"
                  onClick={() => setCurrentHash("/")}
                >
                  <Image
                    src="/asset/logo.png"
                    width={200}
                    height={200}
                    alt="Logo"
                  />
                </Link>
              </div>

              <div className="ml-auto flex gap-5 items-center">
                <CreateJobButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 fixed bg-[#F6F8FC]  bg-opacity-80 backdrop-blur-sm w-full z-40">
        <div
          className={`${
            showBanner
              ? "flex flex-row items-center gap-4 justify-between  left-0 w-full md:hidden p-2"
              : "flex flex-row items-center gap-4 pl-4 pr-4 pb-4 justify-between left-0 w-full md:hidden"
          }`}
        >
          <div>
            <Link
              href="/"
              className=" flex items-center"
              onClick={() => setCurrentHash("/")}
            >
              <Image
                src="/asset/logo.png"
                width={200}
                height={200}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex flex-row gap-4 ">
            <div className="text-black  flex items-center ">
              {isOpen ? (
                <span>
                  <XMarkIcon
                    className="text-black h-8 w-8 bg-gray-800 rounded-lg mr-2"
                    onClick={openMobileNavigation}
                  />
                </span>
              ) : (
                <span>
                  <Bars3Icon
                    className="text-black h-8 w-8 mr-2"
                    onClick={openMobileNavigation}
                  />
                </span>
              )}
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col text-white   md:hidden">
            <div className="bg-[#F6F8FC] bg-opacity-50 pl-4 pr-4 pt-2 pb-2 ">
              <div className="ml-auto flex flex-col gap-5 items-center">
                <CreateJobButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
