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

export default function AboutKayTeck() {
  return (
    <>
      <div className="bg-transparent border-none justify-start">
        <TextAndImageBannar
          TopLinkImg={rivyo}
          TopLinkText="ABOUT US"
          background_color=" backgroundRiyoImage !pt-[30px]  !pb-[70px]"
          main_class="!gap-x-0 !items-center  "
          textbannar="   !pl-[74px]"
          ImgBannar=" !pl-0"
          Bannartilte="Discover Our Story & Meet the Team Behind Our Success"
          heading_class="!text-black pr-[10px]  !font-bold"
          content_class="!w-[430px] leading-[30px] pt-[15px] pb-[40px] font-normal  !text-black"
     content_1="Learn about our journey, our values, and the dedicated professionals who are passionate about delivering excellence."
          img={RivyoBannarimg}
          mainCardDiv="block !bg-transparent border-none"
          mainCardClass="shadow-none pt-[15px]"
          CardContantClass=""
          ratingTextClass="!text-[15px]"
          ratingClass="!justify-start  gap-x-[30px] !text-[15px] "
          dwonloadsTextClass="!text-[15px]"
           btnText="Explore More"
    //        rating="5.0"
    // totlePersons="500+"
    // dwonloads="10K+ Views"
        />
      </div>
      <ReviewSection reviewSectionheading="Features to Showcase Reviews on Your Shopify Store" />
      {/* <BiggestFans />
      <KeyFeatures title="Key Features" />
      <AppsRivyoSlider AppSliderHeading="Apps you Love, Integrated with Rivyo" /> */}
      
      <TextWithArrowButton
    Heading="Ready to Support You"
    content1="Have a question or need assistance? Reach out to us at"
    mail=" support@yourcompany.com"  // Change the email to your actual support email
    content2=" and our dedicated support team will assist you promptly."
    btn="Get in Touch"
/>

    </>
  );
}
