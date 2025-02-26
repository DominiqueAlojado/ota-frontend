"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MapPin, MoveRight } from "lucide-react";
import { CardJobProps } from "@/app/types/jobs";
import { Button } from "../ui/button";

const JobDetailsSlideOver: React.FC<CardJobProps> = ({ job }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const formatTextForDisplay = (text: string) => text.replace(/::/g, "").trim();
  return (
    <div className="flex justify-end">
      <Sheet>
        <SheetTrigger className="bg-transparent text-black hover:bg-transparent flex">
          Details
          <span>
            <MoveRight className="text-black ml-2" />
          </span>
        </SheetTrigger>
        <SheetContent className="w-full max-h-screen overflow-y-auto sm:w-1/2 sm:max-w-none flex flex-col">
          <SheetHeader>
            <div className="flex flex-col">
              <SheetTitle>
                <div className="font-bold text-2xl">
                  {job?.job_title ?? "N/A"}
                </div>
              </SheetTitle>

              <div className="flex flex-row">
                <div>{job?.company_name ?? "N/A"}</div>
                <span className="mr-2 ml-2">|</span>
                <div>{job?.job_type ?? "N/A"}</div>
                <span className="mr-2 ml-2">|</span>
                <div>{job?.work_schedule ?? "N/A"}</div>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{job?.company_address ?? "N/A"}</span>
              </div>
            </div>
          </SheetHeader>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto mt-4 mb-6">
            <div className="flex flex-col gap-2">
              <div className="text-2xl">Job Description</div>
              <div style={{ whiteSpace: "pre-line" }}>
                {formatTextForDisplay(job.job_description ?? "N/A")}
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <div>Seniority Level : {job?.seniority_level}</div>
              <div>Experience : {job?.experience_range ?? "N/A"}</div>
              <div>Keywords : {job?.keywords ?? "N/A"}</div>
              <div>Email Address : {job?.company_email_address ?? "N/A"}</div>
            </div>
          </div>

          <SheetFooter className="mt-auto w-full ">
            <div className="w-full flex justify-start p-4">
              <SheetClose asChild>
                <Button>Close</Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default JobDetailsSlideOver;
