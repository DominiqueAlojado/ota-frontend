"use client";
import React from "react";
import Image from "next/image";
import CardJob from "./card-job";
import { Jobs } from "@/app/types/jobs";
export const FindJobClientManager = ({ jobs }: { jobs: Jobs[] }) => {
  return (
    <>
      <div className="flex flex-col p-0 ">
        <div className="flex flex-row text-white w-full mt-8 lg:mt-20 scroll-mt-40 items-center ">
          <div className="text-black grow p-4">
            <p className="text-4xl font-medium">Find your dream job</p>
            <p>
              Looking for jobs? Browse our latest job openings to view and apply
              to the best jobs today!
            </p>
          </div>
          <div>
            <Image
              src="/asset/find-jobs-hero-image.png"
              width={200}
              height={200}
              alt="Jobs hero image"
            />
          </div>
        </div>
        <div className="flex flex-row bg-white w-full mt-8">
          <div className="flex w-full">
            <div className="flex flex-col p-4 w-full">
              <div className="flex flex-col w-full">
                <div className="text-sm mb-2">{jobs.length} Job results</div>
                {jobs?.map((job, index) => (
                  <CardJob key={index} job={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
