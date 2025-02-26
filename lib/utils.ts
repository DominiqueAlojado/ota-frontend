import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const JOB_TYPES = ["Internship", "Contract", "Part-time", "Full-time"];
export const SENIORITY_LEVEL = ["Junior", "Mid", "Senior", "Lead"];
export const WORK_SCHEDULE = ["Day Shift", "Flexible", "Night Shift", "Remote"];
export const WORK_EXPERIENCE_RANGE = ["0-1 year", "2-5 years", "5+ years"];
