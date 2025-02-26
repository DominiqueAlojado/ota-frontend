"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateJobSlideover from "./create-job-slideover";

const CreateJobButton = () => {
  const [isSlideoverOpen, setIsSlideoverOpen] = useState(false);
  return (
    <div>
      <Button
        className="rounded-sm pl-4 pr-4 text-white bg-[#009C4C] hover:bg-[#347453]"
        onClick={() => setIsSlideoverOpen(true)}
      >
        Create Jobs
      </Button>

      <CreateJobSlideover
        open={isSlideoverOpen}
        onOpenChange={setIsSlideoverOpen}
      />
    </div>
  );
};

export default CreateJobButton;
