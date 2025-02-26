"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { CREATE_JOB_SCHEMA } from "@/lib/schemas";
import { CustomInput } from "../custom-ui/input";
import { Button } from "../ui/button";
import {
  JOB_TYPES,
  SENIORITY_LEVEL,
  WORK_EXPERIENCE_RANGE,
  WORK_SCHEDULE,
} from "@/lib/utils";
import Dropdown from "./dropdown";
import { createJob } from "@/lib/ssc/jobs";
import { toast } from "sonner";

type Schema = z.infer<typeof CREATE_JOB_SCHEMA>;

const CreateJobSlideover = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(CREATE_JOB_SCHEMA),
  });

  const onSubmit: SubmitHandler<Schema> = async (data, event) => {
    setIsLoading(true);
    if (event) event.stopPropagation();
    const params = {
      job_title: data?.jobTitle,
      job_description: data?.jobDescription,
      company_name: data?.companyName,
      company_address: data?.companyAddress,
      company_email_address: data?.companyEmailAddress,
      job_type: data?.jobType,
      seniority_level: data?.seniorityLevel,
      work_schedule: data?.workSchedule,
      experience_range: data?.experienceRange,
      keywords: data?.keyWords,
      status: "unpublished",
    };
    const { status } = await createJob(params);

    if (status === 201) {
      reset();
      toast("Thank you!", {
        description: " Your job posting has been successfully submitted! 😊",
        action: {
          label: "Close",
          onClick: () => console.log("Close"),
        },
      });
    }
    setIsLoading(false);
  };
  return (
    <Sheet
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) return;
        onOpenChange(isOpen);
      }}
    >
      <SheetContent className="w-full max-h-screen overflow-y-auto sm:w-1/2 sm:max-w-none ">
        <button className="hidden" />
        <SheetHeader>
          <SheetTitle>
            <div className="font-bold text-2xl">Create Jobs</div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-4 w-full ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 w-full">
              <CustomInput
                type="text"
                label="Job Title"
                placeholder="Enter job title"
                field={register("jobTitle")}
                error={errors.jobTitle}
              />
            </div>
            <div className="mb-4 w-full">
              <CustomInput
                type="textarea"
                label="Job Description"
                placeholder="Enter job description"
                field={register("jobDescription")}
                error={errors.jobDescription}
              />
            </div>
            <div className="mb-4 w-full">
              <CustomInput
                type="text"
                label="Company Name"
                placeholder="Enter company name"
                field={register("companyName")}
                error={errors.companyName}
              />
            </div>
            <div className="mb-4 w-full">
              <CustomInput
                type="text"
                label="Company Address"
                placeholder="Enter company address"
                field={register("companyAddress")}
                error={errors.companyAddress}
              />
            </div>
            <div className="mb-4 w-full">
              <CustomInput
                type="text"
                label="Company Email"
                placeholder="Enter company email"
                field={register("companyEmailAddress")}
                error={errors.companyEmailAddress}
              />
            </div>
            <div className="mb-4 w-full">
              <Dropdown
                label="Job Type"
                name="jobType"
                control={control}
                options={JOB_TYPES}
                error={errors.jobType?.message}
              />
            </div>
            <div className="mb-4 w-full">
              <Dropdown
                label="Select Seniority Level"
                name="seniorityLevel"
                control={control}
                options={SENIORITY_LEVEL}
                error={errors.seniorityLevel?.message}
              />
            </div>
            <div className="mb-4 w-full">
              <Dropdown
                label="Work Schedule"
                name="workSchedule"
                control={control}
                options={WORK_SCHEDULE}
                error={errors.workSchedule?.message}
              />
            </div>
            <div className="mb-4 w-full">
              <Dropdown
                label="Work Experience"
                name="experienceRange"
                control={control}
                options={WORK_EXPERIENCE_RANGE}
                error={errors.experienceRange?.message}
              />
            </div>
            <div className="mb-4 w-full">
              <CustomInput
                type="text"
                label="Keywords"
                placeholder="Enter keywords"
                field={register("keyWords")}
                error={errors.keyWords}
              />
            </div>
            <div className="mt-8 flex gap-2">
              <Button
                type="submit"
                className="bg-[#009C4C] hover:bg-[#009C4C] hover:opacity-90"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
              <SheetClose asChild>
                <Button
                  onClick={() => {
                    reset();
                    onOpenChange(false);
                  }}
                >
                  Cancel
                </Button>
              </SheetClose>
            </div>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CreateJobSlideover;
