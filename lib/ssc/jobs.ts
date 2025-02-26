import { Jobs, JobsResponse } from "@/app/types/jobs";

export const fetchJobs = async (): Promise<Jobs[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/job-posting`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: JobsResponse = await response.json();
    return data?.jobs ?? [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const createJob = async (
  data: any
): Promise<{ status: number; response: JobsResponse | null }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/job-posting`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const status = response.status;

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: JobsResponse = await response.json();
    return { status, response: responseData };
  } catch (error) {
    console.error("Error creating job:", error);
    return { status: 500, response: null };
  }
};
