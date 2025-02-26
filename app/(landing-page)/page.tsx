import Loading from "@/components/loading";
import { Suspense } from "react";
import type { Metadata } from "next";
import { FindJobClientManager } from "@/components/find-jobs/find-jobs-client-manager";
import { fetchJobs } from "@/lib/ssc/jobs";

export const metadata: Metadata = {};

const Page = async () => {
  const jobs = await fetchJobs();
  return (
    <div className="lg:max-w-screen-lg mx-auto flex-1 w-full flex flex-col lg:flex-row pt-4 pb-6 ">
      <div className="flex-col w-full  md:pl-4 md:pr-4">
        <Suspense fallback={<Loading />}>
          <FindJobClientManager jobs={jobs} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
