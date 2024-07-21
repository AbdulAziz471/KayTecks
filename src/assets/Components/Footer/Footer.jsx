import { NavLink } from "react-router-dom";
import kayteckFooter from "../../Images/kayteckFooter.png";
import HorizontalNav from "../HorizontalNav/HorizontalNav";
import IconsList from "../IconsList/IconsList";

export default function Footer() {
  const FooterNav = [
    {
      navTitle: "Tech Solutions",
      navItems: [
        { name: "Web Architecting", url: "/services/web-architecting" },
        { name: "App Innovation", url: "/services/app-innovation" },
        { name: "Cloud Solutions", url: "/services/cloud-solutions" },
        { name: "AI Integrations", url: "/services/ai-integrations" },
        { name: "Digital Outreach", url: "/services/digital-outreach" },
        { name: "Creative Engineering", url: "/services/creative-engineering" },
      ],
    },
    {
      navTitle: "Hire Experts",
      navItems: [
        { name: "Hire IT Consultant", url: "/hire/hire-it-consultant" },
        { name: "Hire Data Security Specialist", url: "/hire/hire-data-security-specialist" },
        { name: "Hire Cloud Solutions Architect", url: "/hire/hire-cloud-solutions-architect" },
        { name: "Hire AI Developer", url: "/hire/hire-ai-developer" },
      ],
    },
    {
      navTitle: "About K-tech",
      navItems: [
        { name: "Our Story", url: "/about/our-story" },
        { name: "Life at K-tech", url: "/about/life-at-k-tech" },
        { name: "Careers", url: "/about/careers" },
        { name: "Blogs", url: "/about/blogs" },
        { name: "Showcase", url: "/about/our-work" },
      ],
    },
    {
      navTitle: "Support",
      navItems: [
        { name: "Help Center", url: "/support/help-center" },
        { name: "Contact Us", url: "/support/contact-us" },
        { name: "FAQs", url: "/support/faqs" },
      ],
    },
  ];
  

  return (
    <>
      <footer className=" m-[40px]">
        <div class=" max-w-screen-2xl mx-auto py-5  w-full    border-t border-black">
          <div class="lg:flex lg:flex-row lg:items-center  md:justify-between  flex justify-center flex-col-reverse">
            <div class="mb-6 mt-[30px] lg:mt-0 lg:py-10 md:mb-0 lg:px-16 px-9 lg:border-r-2 md:flex md:items-center md;w-full md:flex-col flex items-center flex-col  ">
              <NavLink
                to="/"
                class=" flex items-center flex-col max-w-[100px]   "
              >
                <img class="lg:w-full" src={kayteckFooter} alt="" />
              </NavLink>
              <IconsList />
            </div>
            <div class="lg:flex lg:justify-between lg:flex-row lg:px-14 md:flex md:flex-row md:justify-between  md:gap-1 md:w-full gap-8 sm:gap-1 sm:flex-col sm:w-full sm:px-3 sm:py-5  lg:w-3/4  ">
              {FooterNav.map((item, index) => (
                <HorizontalNav
                  key={index}
                  navTitle={item.navTitle}
                  navItems={item.navItems}
                />
              ))}
            </div>
          </div>
          <hr class=" border-gray-200 mx-auto dark:border-gray-700 " />
        </div>
      </footer>
    </>
  );
}
