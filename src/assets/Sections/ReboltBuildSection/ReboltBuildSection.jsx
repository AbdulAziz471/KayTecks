import "./ReboltBuildSection.css";
import ServicesCard from "../../Components/ServicesCards/ServicesCard";
import ui from "../../Images/ui_ux.svg";
import web from "../../Images/web_dev.svg";
import support from "../../Images/support.svg";
import testing from "../../Images/testing.svg";
import SecuritySvgRebolt from "../../Images/SecuritySvgRebolt.svg";
import Fastper from "../../Images/FastPerformanceRebolt.svg";
import EaseOfUse from "../../Images/EaseOfUse.svg";
import DimondRebolt from "../../Images/DimondRebolt.png";
import Marchant from "../../Images/Marchant.svg";
import ShopifyBuild from "../../Components/ShopifyBuildSmall/ShopifyBuild";
export default function ReboltBuildSection() {
  const servicesData = [
    {
      title: "Security and Reliability",
      description:
        "Ensures data & transaction security, providing robust protection",
      img: SecuritySvgRebolt,
    },
    {
      title: "Fast Performance",
      description:
        "Promises a fast-loading app that preserves storefront speed.",
      img: Fastper,
    },
    {
      title: "Ease of Use",
      description:
        "Indicates an intuitive app seamlessly integrated into Shopify.",
      img: EaseOfUse,
    },
    {
      title: "Value for Merchants",
      description:
        "Signifies merchant interaction, reviews, and average rating.",
      img: Marchant,
    },
  ];
  return (
    <>
      <div className="max-w-[1230px] pb-[120px]  mx-auto text-center ">
        <div>
          <ShopifyBuild
            buildText="Built for Shopify"
            buildMainDiv="w-full max-w-full !bg-transparent justify-center gap-[13px]"
            buildImg="w-[35px] max-w-full  "
            buildTextClass="text-[25px] lg:text-[44px] leading-[56px] font-bold"
          />
          <p className="max-w-[1081px] w-full  test-center px-[20px] pt-2  lg:pt-[20px] leading-[30px] font-normal text-[17px] ">
            This indicates that the product or service is tailored to work
            effectively within the Shopify ecosystem. It is likely optimized for
            Shopify's infrastructure, coding standards, and compatibility
            requirements.
          </p>
        </div>
        <div className="mt-[60px ] grid grid-cols-1   lg:grid-cols-2 lg:gap-x-40 gap-y-[20px] lg:gap-y-16 mt-[60px] back_img    ">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              img={service.img}
              mainClass={service.mainClass}
              imgClass="!shadow-none  !border  !rounded-full !border-[#07425B]"
              mainHeadingClass="text-[18px] leading-[25px] tracking-[-.36px] font-semibold  pb-[16px]"
              contentClass="text-[17px] leading-[30px] tracking-[-.36px] font-normal "
            />
          ))}
        </div>
      </div>
    </>
  );
}
