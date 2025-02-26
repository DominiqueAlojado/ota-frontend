import { z } from "zod";

export const CREATE_JOB_SCHEMA = z.object({
  jobTitle: z.string().min(1, { message: "Required." }),
  jobDescription: z.string().min(1, { message: "Required." }),
  companyName: z.string().min(1, { message: "Required." }),
  companyAddress: z.string().min(1, { message: "Required." }),
  companyEmailAddress: z
    .string()
    .min(1, { message: "Required." })
    .email({ message: "Invalid email address." }),
  jobType: z.string().min(1, { message: "Required." }),
  seniorityLevel: z.string().min(1, { message: "Required." }),
  workSchedule: z.string().min(1, { message: "Required." }),
  experienceRange: z.string().min(1, { message: "Required." }),
  keyWords: z.string().min(1, { message: "Required." }),
});
