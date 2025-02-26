"use client";
import React from "react";
import { MapPin } from "lucide-react";
import JobDetailsSlideOver from "./job-details-slideover";
import { CardJobProps } from "@/app/types/jobs";

const CardJob: React.FC<CardJobProps> = ({ job }) => {
  const formatTextForDisplay = (text: string, limit = 150) => {
    let formattedText = text.replace(/::/g, "").trim();

    if (formattedText.length > limit) {
      formattedText =
        formattedText.substring(0, formattedText.lastIndexOf(" ", limit)) +
        "...";
    }
    return formattedText;
  };

  return (
    <div className="flex w-full p-2  border-[#C7C8CA] border-[1px] rounded-md mb-2">
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row w-full p-2 ">
          <div className="flex flex-col">
            <div className="font-semibold">{job?.job_title}</div>
            <div className="text-xs flex">
              <div>{job?.company_name}</div>
              <span className="ml-2 mr-2">|</span>
              <div>{job?.job_type}</div>
            </div>
          </div>
          <div className="md:ml-auto flex flex-col">
            <div className="flex md:items-center space-x-1 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{job?.company_address}</span>
            </div>
            <div className="text-xs ml-5"> {`Posted ${job?.posted_at}`}</div>
          </div>
        </div>
        <div className="text-sm pl-2 pr-2 pb-2">
          <div style={{ whiteSpace: "pre-line" }}>
            {formatTextForDisplay(job.job_description)}
          </div>
        </div>
        <JobDetailsSlideOver job={job} />
      </div>
    </div>
  );
};

export default CardJob;
