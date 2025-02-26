import React from "react";
import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";
import { Banner } from "../../components/layout/banner";
import { Toaster } from "@/components/ui/sonner";

type Props = {
  children: React.ReactNode;
};
const LandingPageLayout = ({ children }: Props) => {
  const showBanner = true;

  return (
    <div className="min-h-screen flex  flex-col bg-[#F6F8FC]  ">
      <Banner showBanner={showBanner} />
      <Header showBanner={showBanner} />

      <main className="flex-1 flex flex-col items-center justify-center pt-10  ">
        {children}
        <Toaster />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
