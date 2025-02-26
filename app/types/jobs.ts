export type Jobs = {
  job_title: string;
  job_description: string;
  company_name: string;
  company_address: string;
  company_email_address: string;
  job_type: string;
  seniority_level: string;
  work_schedule: string;
  experience_range: string;
  keywords: string;
  status: string;
  posted_at: string;
};

export type JobsResponse = {
  message: string;
  jobs: Jobs[];
};

export type CardJobProps = {
  job: Jobs;
};

export type createJob = {
  job_title: string;
  job_description: string;
  company_name: string;
  company_address: string;
  company_email_address: string;
  job_type: string;
  seniority_level: string;
  work_schedule: string;
  experience_range: string;
  keywords: string;
};
