import React from "react";
import Cards from "../../Components/Cards/Cards";
import service from "../../Images/StoreDevelopement.svg";
import app from "../../Images/ShopifyAppDevelopment.svg";
import plus from "../../Images/Plus.svg";
import mantiance from "../../Images/ShopifyAppDevelopment.svg";
import Custamize from "../../Images/ShopifyCustomization.svg";
import Headless from "../../Images/HeadlessCommerce.svg";
import Migration from "../../Images/Migration.svg";
import B2B from "../../Images/B2B.svg";
import service_bg from "../../Images/service_bg.png";
import "./Services.css";
export default function Services(props) {
  const griddata = [
    {
      index: 1,
      GridName: "Shopify Store Development",
      GridDescription:
        "We set up a Shopify store from scratch dedicated to serving your business purpose. Our experienced developers know what works best for your industry.",
      img: service,
      btnText: "Get In Touch",
    },
    {
      index: 2,
      GridName: "Shopify App Development",
      GridDescription:
        "We build high-functioning Shopify Apps that work efficiently as per your requirements. We have considerable experience in developing Shopify apps.",
      img: app,
      btnText: "Let’s Discuss",
    },
    {
      index: 3,
      GridName: "Migration to Shopify",
      GridDescription:
        "Switch from other e-commerce platforms to Shopify and experience a smooth interface. Sell on a secure network and protect sensitive customer data.",
      img: Migration,
      btnText: "Consult an Expert",
    },
    {
      index: 4,
      GridName: "B2B Store Development",
      GridDescription:
        "Want to run a wholesale business on Shopify? We are here to help with all your Shopify needs. Set up a seamless B2B store and manage huge orders effortlessly.",
      img: B2B,
      btnText: "Get Started",
    },
    {
      index: 5,
      GridName: "Shopify Customization",
      GridDescription:
        "Customizing your website regularly and be the obvious choice in your sector for shoppers. Don't miss out on new customers by being outdated.",
      img: Custamize,
      btnText: "Get In Touch",
    },
    {
      index: 6,
      GridName: "Shopify Plus",
      GridDescription:
        "Set up your Shopify Plus store for higher conversions and a faster checkout experience. Upgrade to a better store as you grow your business.",
      img: plus,
      btnText: "Consult an Expert",
    },
    {
      index: 7,
      GridName: "Headless Commerce",
      GridDescription:
        "Enrich the customer experience by updating the front end without making changes to the back end. We develop Shopify stores for all different types of businesses.",
      img: Headless,
      btnText: "Consult an Expert",
    },
    {
      index: 6,
      GridName: "Shopify Store Maintenance",
      GridDescription:
        "Keep your store running in perfect condition by fixing bugs & issues regularly. Maintain a consistent customer experience with a smoothly running store at all times.",
      img: mantiance,
      btnText: "Get Started",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto ">
        <div className="pt-[80px] pb-[125px] bg-image ">
          <h1 className="text-center w-full text-[44px] font-bold leading-[56px]">
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
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
