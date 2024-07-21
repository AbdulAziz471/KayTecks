import React, { useState } from "react";
import TextAndImageBannar from "../Sections/TextAndImageBannar/TextAndImageBannar";
import RivyoBannarimg from "../Images/RivyoBannarimg.svg";
import rivyo from "../Images/rivyo.svg";
import ReviewSection from "../Sections/ReviewSection/ReviewSection";
import BiggestFans from "../Sections/BiggestFans/BiggestFans";
import KeyFeatures from "../Sections/KeyFeatures/KeyFeatures";
import AppRivyoCard from "../Components/AppSliderMainComponent/AppRivyoCard/AppRivyoCard";
import AppsRivyoSlider from "../Sections/AppsRivyoSlider/AppsRivyoSlider";
import Pricingplan from "../Sections/PricingPlan/Pricingplan";
import TextWithArrowButton from "../Components/TextWithArrowButton/TextWithArrowButton";
import Recomend from "../Images/Recomend.svg";

export default function RivyoShopifyApp() {
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
      planPrice: isYear === "Yearly Plan" ? "Free" : "Free",
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
    {
      spanText: "ENTERPRISE",
      planPrice: isYear === "Yearly Plan" ? "$190.00" : "$19.99",
      duration: isYear === "Yearly Plan" ? "per year" : "per month",
      PlanProperties: [
        { listItem: "All in Business+" },
        { listItem: "Unlimited monthly review emails" },
        { listItem: "Unlimited Import reviews by CSV" },
        { listItem: "Unlimited Import reviews from Amazon/AliExpress" },
      ],
      buttonText: "Start your free Trail",
    },
  ];
  return (
    <>
      <div className="bg-transparent border-none justify-start">
        <TextAndImageBannar
          TopLinkImg={rivyo}
          TopLinkText="RIVYO PRODUCT REVIEWS & QA"
          background_color=" backgroundRiyoImage !pt-[130px]  !pb-[170px]"
          main_class="!gap-x-0 !items-center  "
          textbannar="   !pl-[74px]"
          ImgBannar=" !pl-0"
          Bannartilte="Add Product Reviews to Your Shopify Store & Engage Customers"
          heading_class="!text-black pr-[10px]  !font-bold"
          content_class="!w-[430px] leading-[30px] pt-[15px] pb-[40px] font-normal  !text-black"
          content_1="Highlight customer reviews on your store to increase Brand Credibility."
          img={RivyoBannarimg}
          mainCardDiv="block !bg-transparent border-none"
          mainCardClass="shadow-none pt-[15px]"
          CardContantClass=""
          ratingTextClass="!text-[15px]"
          ratingClass="!justify-start  gap-x-[30px] !text-[15px] "
          dwonloadsTextClass="!text-[15px]"
          btnText="Start 7-Day Free Trial"
          rating="4.9"
          totlePersons="2003"
          dwonloads="8K"
        />
      </div>
      <ReviewSection reviewSectionheading="Features to Showcase Reviews on Your Shopify Store" />
      <BiggestFans />
      <KeyFeatures title="Key Features" />
      <AppsRivyoSlider AppSliderHeading="Apps you Love, Integrated with Rivyo" />
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
