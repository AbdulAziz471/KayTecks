import React from "react";
import Cards from "../../Components/Cards/Cards";
import AutoEmail from "../../Images/KeyFeatures/AutoEmail.svg";
import Detail from "../../Images/KeyFeatures/Detail.svg";
import EasyToInstall from "../../Images/KeyFeatures/EasyToInstall.svg";
import ImportReview from "../../Images/KeyFeatures/ImportReview.svg";
import QuickSupport from "../../Images/KeyFeatures/QuickSupport.svg";
import RichSnippet from "../../Images/KeyFeatures/RichSnippet.svg";
import ShowCaseReview from "../../Images/KeyFeatures/ShowCaseReview.svg";
import QuickCustamize from "../../Images/KeyFeatures/QuickCustamize.svg";

export default function KeyFeatures(props) {
  const griddata = [
    {
      index: 1,
      GridName: "Import Reviews",
      GridDescription:
        "Build customer trust effortlessly by importing and displaying valuable product reviews from your Amazon or AliExpress store directly onto your Shopify website.",
      img: ImportReview,
    },
    {
      index: 2,
      GridName: "Showcase Reviews",
      GridDescription:
        "Maximize customer loyalty and boost sales by strategically placing product reviews on essential pages across your site, effectively leveraging the power of social proof.",
      img: ShowCaseReview,
    },
    {
      index: 3,
      GridName: "Auto Request Email",
      GridDescription:
        "Approach customers with automated review request emails to collect more social proof for your store. Personalize your communication & receive detailed reviews.",
      img: AutoEmail,
    },
    {
      index: 4,
      GridName: "Rich Snippets",
      GridDescription:
        "Drive organic traffic and improve visibility on Google and the Search Engine Results Page by integrating customer reviews and ratings with the product.",
      img: RichSnippet,
    },
    {
      index: 5,
      GridName: "Quick Customization",
      GridDescription:
        "Edit the display sections to match your store's branding. Change the color of widgets and the icons used to display reviews on your website.",
      img: QuickCustamize,
    },
    {
      index: 6,
      GridName: "Quick Support",
      GridDescription:
        "Our app support is available almost 24/7 via Live chat and Email. Our Support Team tries to address and resolve your queries quickly.",
      img: QuickSupport,
    },
    {
      index: 7,
      GridName: "Easy to Install",
      GridDescription:
        "Setting up this app in your store is an easy process and completely user-friendly. Most of the features operate with minimal coding required.",
      img: EasyToInstall,
    },
    {
      index: 8,
      GridName: "Detailed Analytics",
      GridDescription:
        "Merchants can track their review request emails with data including requests sent, opened, and clicked along with the number of review sources.",
      img: Detail,
    },
  ];
  return (
    <>
      <div className="bg-[#FDF9F1] KeyFeaturesCard">
        <div className="max-w-screen-2xl mx-auto  ">
          <div className="pt-[80px] pb-[125px]  ">
            <h1
              className={`text-center w-full text-[25px] lg:text-[44px] font-bold leading-[32px]  lg:leading-[56px] ${props.titleClass} `}
            >
              {props.title}
            </h1>
            <div className="grid lg:grid-cols-4 grid-cols-1  md:grid-cols-2 gap-x-[32px] gap-y-[53px] mt-[50px] px-[15px]">
              {griddata.map((item, index) => (
                <Cards
                  key={index}
                  GridName={item.GridName}
                  GridDescription={item.GridDescription}
                  img={item.img}
                  btnText={item.btnText}
                  cardSpanImgClass="img_icon"
                  GridNameClass="!font-semibold"
                  GridDescriptionClass="!leading-[28px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
