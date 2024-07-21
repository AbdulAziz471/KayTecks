import HomeBannar from "../Components/HomeBannar/HomeBannar";
import ImagesSlider from "../Components/ImagesSlider/ImagesSlider";
import CompanyCapaboilities from "../Sections/CompanyCapabilities/CompanyCapaboilities";
import Portfolio from "../Sections/Portfolio/Portfilio";
import Services from "../Sections/Service/Services";
import ShopifyApp from "../Sections/ShopifyApp/ShopifyApp";
import ShopifyPlus from "../Sections/ShopifyPlus/ShopifyPlus";
import Testimonial from "../Sections/Testimonial/Testimonial";
import AssociatedApps from "../Sections/AssociatedApps/AssociateApps";
import Blogs from "../Sections/BlogsSection/BlogsSection";
import Pricingplan from "../Sections/PricingPlan/Pricingplan";
import ContactSection from "../Sections/ContactSection/ContactSection";
import DefineShopifyPlus from "../Sections/DefineShopifyPlus/DefineShopifyPlus";
import ShopifyPlusServices from "../Sections/ShopifyPlusServices/ShopifyPlusServices";
import BusinessNeeds from "../Sections/BusinessNeeds/BusinessNeeds";
import BenefitsOfHiring from "../Sections/BenefitsOfHiring/BenefitsOfHiring";
import IncorporatedSecurityMeasures from "../Sections/IncorporatedSecurityMeasures/IncorporatedSecurityMeasures";
import TextWithButton from "../Components/TextWithButton/TextWithButton";
import TextAndImageBannar from "../Sections/TextAndImageBannar/TextAndImageBannar";
import CapabilitiesBannar from "../Images/CapabilitiesBannar.svg";
import TextCard from "../Components/TextCard/TextCard";
import { useEffect, useState } from "react";
import Recomend from "../Images/Recomend.svg";
export default function KayTeck() {
  const textArray = [
    "Wegsite Designing",
    "App Developement ",
    "Indeustru Experience",
    "E-com Development",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isYear, setIsYear] = useState("Monthly Plan");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  const Card = [
    {
      index: 1,
      title: "1000+",
      content: "Satisfied clients now enjoying enhanced digital and operational capabilities",
    },
    {
      index: 2,
      title: "95%",
      content:
        "Clients see significant revenue increases, thanks to our tailored IT solutions",
    },
    {
      index: 3,
      title: "2X",
      content: "Client businesses doubling their market reach with our robust web and software solutions",
    },
    {
      index: 4,
      title: "1500+",
      content:
        "Diverse projects completed, from software development to strategic IT consulting",
    },
];
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
    spanText: "BASIC",
    planPrice: isYear === "Yearly Plan" ? "$100.00" : "$10.00",
    duration: isYear === "Yearly Plan" ? "per year" : "per month",
    PlanProperties: [
      { listItem: "Basic IT Support" },
      { listItem: "System Monitoring & Alerts" },
      { listItem: "10 Hours of IT Consulting" },
      { listItem: "Weekly System Updates" },
    ],
    buttonText: "Start Your Free Trial",
  },
  {
    spanText: "PROFESSIONAL",
    planPrice: isYear === "Yearly Plan" ? "$200.00" : "$20.00",
    duration: isYear === "Yearly Plan" ? "per year" : "per month",
    PlanProperties: [
      { listItem: "Extended IT Support" },
      { listItem: "System Security Management" },
      { listItem: "25 Hours of IT Consulting" },
      { listItem: "Bi-weekly System Optimization" },
      { listItem: "Priority Support" },
    ],
    buttonText: "Start Your Free Trial",
  },
  {
    spanText: "BUSINESS",
    planPrice: isYear === "Yearly Plan" ? "$300.00" : "$30.00",
    duration: isYear === "Yearly Plan" ? "per year" : "per month",
    SpanImg: Recomend,  // Make sure this variable is defined in your project
    SpanspanText: "RECOMMENDED",
    SpanClass: "!text-[#126fa4]",
    PlanProperties: [
      { listItem: "Full IT Support" },
      { listItem: "50 Hours of IT Consulting" },
      { listItem: "Full System Management" },
      { listItem: "Monthly Strategy Review" },
      { listItem: "Custom Security Solutions" },
    ],
    buttonText: "Start Your Free Trial ",
  },
  {
    spanText: "ENTERPRISE",
    planPrice: isYear === "Yearly Plan" ? "$400.00" : "$40.00",
    duration: isYear === "Yearly Plan" ? "per year" : "per month",
    PlanProperties: [
      { listItem: "Dedicated IT Team" },
      { listItem: "Unlimited IT Consulting" },
      { listItem: "Customized IT Infrastructure" },
      { listItem: "Real-time System Monitoring" },
      { listItem: "Enterprise-grade Security Solutions" },
    ],
    buttonText: "Start Your Free Trial",
  },
];
  return (
    <>
      <TextAndImageBannar
        Bannartilte="Driving Innovation with Premier IT Solutions"
        content_1="For over a decade, K-tech has been at the forefront of IT excellence,"
        content_2="empowering businesses with cutting-edge web and software development services."
         linkText="Discover Our Services"
        img={CapabilitiesBannar}
      />
       <TextCard TextCards={Card} />

      <ImagesSlider Filter="brightness-0" />
      <ShopifyPlusServices/>
      <BusinessNeeds /> 
      <DefineShopifyPlus/>
      <BenefitsOfHiring />
      <IncorporatedSecurityMeasures />
      <TextWithButton
  btnText="Let's Talk"
  mainDiv="!items-center"
  heading="Our IT solutions provide unparalleled scalability and extensive customization options."
  headingClass="text-center max-w-[1070px] !mb-[50px]"
/>  
<Pricingplan
        pricingPlans={pricingPlans}
        handleYearlyClick={handleYearlyClick}
        handleMonthlyClick={handleMonthlyClick}
        isYear={isYear}
      />
      {/* <Services title="Our Services" /> */}
      {/* <ShopifyPlus /> */}
      {/* <ShopifyApp /> */}
      {/* <Portfolio Protfolio_title="Our Portfolio" /> */}
      {/* <CompanyCapaboilities /> */}
      {/* <Testimonial /> */}
      {/* <AssociatedApps /> */}
      <ContactSection /> 
    </>
  );
}
