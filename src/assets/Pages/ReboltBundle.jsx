import TextAndImageBannar from "../Sections/TextAndImageBannar/TextAndImageBannar";
import ReboltBannar_img from "../Images/ReboltBannar_img.svg";
import React, { useState } from "react";
import Recomend from "../Images/Recomend.svg";
import Rebolt from "../Images/Rebolt.svg";
import ReviewSection from "../Sections/ReviewSection/ReviewSection";
import BiggestFans from "../Sections/BiggestFans/BiggestFans";
import KeyFeatures from "../Sections/KeyFeatures/KeyFeatures";
import AppRivyoCard from "../Components/AppSliderMainComponent/AppRivyoCard/AppRivyoCard";
import AppsRivyoSlider from "../Sections/AppsRivyoSlider/AppsRivyoSlider";
import Pricingplan from "../Sections/PricingPlan/Pricingplan";
import TextWithArrowButton from "../Components/TextWithArrowButton/TextWithArrowButton";
import ReboltBuildSection from "../Sections/ReboltBuildSection/ReboltBuildSection";
export default function ReboltBundle() {
  const [isYear, setIsYear] = useState("Monthly Plan");

  const handleMonthlyClick = () => {
    setIsYear("Monthly Plan");
    isSelected = true;
  };
  const handleYearlyClick = () => {
    setIsYear("Yearly Plan");
    isSelected = false;
  };
  const pricingPlans = [
    {
      spanText: "FREE FOREVER",
      planPrice: isYear == "Yearly Plan" ? "Free" : "Free",
      duration:
        isYear === "Yearly Plan"
          ? "For stores on any plan"
          : "For stores on any plan",
      PlanProperties: [
        { listItem: "Unlimited Reviews" },
        { listItem: "50 monthly review emails" },
        { listItem: "Import 100 Reviews from AliExpress/Amazon" },
        { listItem: "Import 500 reviews by CSV" },
        { listItem: "Google Rich Snippet" },
      ],
      buttonText: "Start your free Account",
    },
    {
      spanText: "STARTER",
      planPrice: isYear === "Yearly Plan" ? "$90.00" : "$9.00",
      duration: isYear === "Yearly Plan" ? "per year" : "per month",
      PlanProperties: [
        { listItem: "500 monthly review emails" },
        { listItem: "Import 1k reviews by CSV" },
        { listItem: "Import 500 reviews from Amazon/AliExpress" },
        { listItem: "Unlimited Photo Review" },
        { listItem: "Unlimited Q&A" },
      ],
      buttonText: "Start your free Trail",
    },
    {
      spanText: "BUSINESS",
      planPrice: isYear === "Yearly Plan" ? "$140.00" : "$14.00",
      duration: isYear === "Yearly Plan" ? "per year" : "per month",
      SpanImg: Recomend,
      SpanspanText: "RECOMMENDED",
      SpanClass: "!text-[#126fa4]",
      PlanProperties: [
        { listItem: "Starter +" },
        { listItem: "1k monthly review emails" },
        { listItem: "Import 2k reviews from Amazon/AliExpress" },
        { listItem: "Import 2k reviews by CSV" },
        { listItem: "Google Shoppings" },
        { listItem: "Coupon Code" },
      ],
      buttonText: "Start your free Trail ",
    },
  ];
  return (
    <>
      <div className="bg-transparent border-none justify-start">
        <TextAndImageBannar
          background_color=" ReboltBg_img"
          main_class="!gap-x-0 !items-center  "
          textbannar="   lg:!pl-[74px]"
          ImgBannar=" !pl-0"
          content_class="!w-[430px] leading-[30px] pt-[15px] pb-[40px] font-normal  !text-black"
          heading_class="!text-black pr-[10px]  !font-semibold"
          mainCardDiv="block !bg-transparent border-none"
          mainCardClass="shadow-none pt-[15px]"
          ratingTextClass="!text-[15px]"
          ratingClass=" !justify-center lg:!justify-start  gap-x-[30px] !text-[15px] "
          dwonloadsTextClass="!text-[15px]"
          buildText="Built for Shopify"
          TopLinkImg={Rebolt}
          TopLinkText="REBOLT ‑ PRODUCT BUNDLES"
          Bannartilte="Shopify Bundles App for Product Bundles, Volume Discounts, & Build a Box"
          content_1="Drive more sales by selling multiple items in a single order & Increase AOV."
          img={ReboltBannar_img}
          CardContantClass=""
          btnText="Start 14-Day Free Trial"
          rating="4.9"
          totlePersons="843"
          dwonloads="4K"
        />
      </div>
      <ReboltBuildSection />
      <ReviewSection reviewSectionheading="Types of Bundles to Offer on Your Shopify Store" />
      <BiggestFans />
      <KeyFeatures title="Key Features" />
      <AppsRivyoSlider AppSliderHeading="Apps you Love, Integrated with Rebolt" />
      <Pricingplan
        pricingPlans={pricingPlans}
        handleYearlyClick={handleYearlyClick}
        handleMonthlyClick={handleMonthlyClick}
        isYear={isYear}
      />
      <TextWithArrowButton
        Heading="We are here to help"
        content1="When you have a question, just drop us an email at"
        mail=" support@webcontrive.com"
        content2=" and our team will get in touch with you as soon as possible."
        btn="Contact us"
      />
    </>
  );
}
