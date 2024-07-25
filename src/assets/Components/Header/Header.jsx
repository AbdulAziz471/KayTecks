import React, { useState } from "react";
import Button from "../Button/Buton";
import Logo from "../Logos/Logo";
import OnlyLogo from "../Logos/OnlyLogo";
import VerticleNav from "../VerticleNav/VerticleNav";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Drawer from "../Drawer/Drawer";
import OnlyText from "../Logos/Onlytext";
export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  // const navigationData = [
  //   { name: "Capabilities", link: "/pages/capabilities" },
  //   { name: "Shopify Plus", link: "/shopify-plus" },
  //   {
  //     name: "Spectrum of Services",
  //     link: "javascript:void(0)",
  //     dropdown: [
  //       { name: "Rivyo Product Reviews & QA", link: "/pages/rivyo_review" },
  //       { name: "Rebolt ‑ Product Bundles", link: "/pages/rebolt_bundle" },
  //       { name: "Native Subscriptions", link: "/pages/Native_Subscription" },
  //       { name: "Wishlist Club", link: "/pages/WishListClub" },
  //       { name: "AddUp Checkout", link: "/pages/add_up_checkout" },
  //       { name: "Engines ‑ Discount Box", link: "pages/engines_discount_box" },
  //       { name: "See All", link: "/pages/ShopifyApp" },
  //     ],
  //   },
  //   {
  //     name: "About",
  //     link: "javascript:void(0)",
  //     dropdown: [
  //       { name: "About Us", link: "/pages/about" },
  //       { name: "Our Team", link: "/pages/our_team" },
  //       { name: "Life At  K-tech", link: "/pages/life_at_webcontrive" },
  //       { name: "Our Works", link: "/pages/our_work" },
  //       { name: "Careers", link: "/pages/careers" },
  //     ],
  //   },
  //   { name: "Blog", link: "/pages/blog" },
  // ];
    const navigationData = [
      { 
        name: "Home", // A dynamic take on 'Home'
        link: "/" 
      },
     
      { 
        name: "Projects ", // A dynamic take on 'Home'
        link: "/pages/project" 
      },
      { 
        name: "About Us ", // A dynamic take on 'Home'
        link: "/pages/about" 
      },
      { 
        name: "Services", // A dynamic take on 'Home'
        link: "/" 
      },
      // {
      //   name: "Our Services",
      //   link: "javascript:void(0)",
      //   dropdown: [
      //     { name: "Web Architecting", link: "/web-architecting" },
      //     { name: "App Innovation", link: "/app-innovation" },
      //     { name: "Organic Search Mastery", link: "/search-mastery" },
      //     { name: "Digital Outreach", link: "/digital-outreach" },
      //     { name: "Creative Engineering", link: "/creative-engineering" },
      //     { name: "Cloud Solutions", link: "/cloud-solutions" },
      //     { name: "AI Integrations", link: "/ai-integrations" },
      //   ],
      // },
      // {
      //   name: "Discover K-tech", // More inviting and comprehensive than just 'About'
      //   link: "javascript:void(0)",
      //   dropdown: [
      //     { name: "K-tech Life", link: "/pages/life_at_ktech" }, // Streamlined and branded
      //     { name: "Our Story", link: "/pages/about" },
      //     { name: "Meet the Innovators", link: "/pages/our_team" }, // More engaging title
      //     { name: "Showcase", link: "/pages/our_work" }, // More direct and appealing
      //     { name: "Join Us", link: "/pages/careers" }, // Action-oriented
      //   ],
      // },
      // {
      //   name: "Value Blueprint", // Unique name for Pricing Plan
      //   link: "/pricing" // Changed to a more typical link structure
      // },
    ];
    
  
  return (
    <>
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className="header">
        <div className="bg-white z-20 ">
          <nav className="max-w-screen-2xl px-3 py-3 lg:py-0 lg:px-0  bg-white w-full z-20 top-0 start-0 mx-auto md:py-3 md:px-3 sm:py-3 sm:px-3">
            <div className=" px-4  flex  items-center  justify-between">
              <button
                onClick={toggleDrawer}
                className="lg:hidden sm:block"
                aria-expanded="false"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <NavLink
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse sm:mx-15"
              >
                <Logo />
                {/* <OnlyLogo/>
                <OnlyText/> */}
              </NavLink>
              <VerticleNav navData={navigationData} />
              <div className="lg:flex hidden  ">
                <Button btn="Get in Touch" to="/pages/ContactPage" />
              </div>
              <div className="lg:hidden flex ">
                <a href="/pages/contact-us">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16415 6.88917H22.1941L15.0764 12.4786C14.9255 12.597 14.7461 12.6547 14.5833 12.6706C14.4194 12.6545 14.2394 12.5967 14.0869 12.4786L9.00026 8.48278C8.94637 8.43945 8.88554 8.4064 8.81859 8.38584C9.05804 8.04806 9.1947 7.63945 9.18748 7.19917C9.18609 7.09834 9.1772 6.99445 9.16415 6.88917ZM5.85054 3.29445C5.86693 3.29723 5.89387 3.30751 5.95248 3.33473C6.06831 3.38973 6.25248 3.5314 6.43276 3.7289C6.79581 4.12445 7.15859 4.72362 7.34693 5.11917C7.35276 5.13084 7.35887 5.14362 7.36443 5.15667C7.89887 6.07362 8.12943 6.77501 8.13637 7.21501C8.14387 7.65695 8.02526 7.84723 7.65054 8.06251L6.68387 8.61973C6.05415 8.98223 5.75665 9.63195 5.68276 10.2381C5.60859 10.8445 5.71776 11.4336 5.98748 11.8995L8.37359 16.012C8.64387 16.4775 9.10526 16.867 9.66943 17.1061C10.2341 17.3458 10.9483 17.4136 11.578 17.052L12.5447 16.4958C12.9191 16.2811 13.1455 16.2767 13.5258 16.5028C13.9072 16.7295 14.4025 17.277 14.9347 18.1945C14.9422 18.2081 14.9494 18.2195 14.958 18.2325C15.2075 18.5922 15.5472 19.2025 15.7111 19.7136C15.7925 19.9675 15.8244 20.197 15.8141 20.3239C15.8028 20.4514 15.8 20.4383 15.7664 20.4583L15.0308 20.88C13.183 21.6814 11.4894 21.5006 9.97581 20.7156C8.45943 19.9272 7.14137 18.5036 6.22248 16.8322C6.21943 16.8289 6.21804 16.8247 6.21554 16.8225L4.20276 13.3536C4.19943 13.3503 4.19804 13.3472 4.19526 13.3428C3.19943 11.715 2.61915 9.86695 2.69193 8.16667C2.7647 6.4689 3.45359 4.92112 5.07637 3.73028L5.8122 3.31001C5.82915 3.30028 5.8347 3.29278 5.85054 3.29445ZM5.85804 2.26084C5.66331 2.25778 5.4647 2.29862 5.28609 2.40223L4.50804 2.84973C4.49054 2.85973 4.47443 2.87001 4.45859 2.88001C2.58665 4.25001 1.7247 6.15723 1.64054 8.12306C1.55637 10.0881 2.21248 12.1161 3.29637 13.8892L5.30248 17.3461L5.29776 17.3358C6.29915 19.1556 7.73415 20.7342 9.48776 21.6436C11.2422 22.5545 13.3322 22.7656 15.4611 21.8372C15.4786 21.8297 15.4964 21.8214 15.5122 21.8117L16.2914 21.3642C16.6516 21.1592 16.8328 20.7603 16.8622 20.412C16.8925 20.0647 16.8216 19.7267 16.7141 19.3936C16.5036 18.735 16.1364 18.0953 15.833 17.6564C15.26 16.6706 14.7066 15.9864 14.0672 15.6039C13.4228 15.2197 12.6491 15.2253 12.018 15.5881L11.0514 16.1453C10.7658 16.3097 10.4319 16.2906 10.0805 16.142C9.73081 15.9933 9.40693 15.6961 9.28665 15.4878L6.90054 11.3756C6.77998 11.1661 6.68137 10.7389 6.72804 10.3622C6.77304 9.98667 6.92554 9.69251 7.21137 9.52778L8.15054 8.98778C8.17498 9.11362 8.24609 9.22778 8.34915 9.30445L13.4361 13.3011C13.7669 13.5611 14.1589 13.7058 14.5536 13.7286C14.5736 13.7297 14.5941 13.7297 14.6144 13.7286C15.0094 13.7058 15.3994 13.5608 15.7305 13.3011L22.7366 7.79723V16.89C22.7366 17.0283 22.5789 17.2106 22.2694 17.2106H17.4191C17.1272 17.2089 16.8908 17.4445 16.8908 17.7347C16.8908 18.0245 17.1275 18.26 17.4191 18.2583H22.2694C23.0622 18.2583 23.7908 17.6853 23.7908 16.89V7.20973C23.7908 6.4139 23.0622 5.84112 22.2694 5.84112H8.87554C8.7272 5.47028 8.53137 5.07723 8.2847 4.65001C8.05387 4.16945 7.67943 3.53417 7.21081 3.02334C6.97415 2.76445 6.71887 2.53501 6.3997 2.38667V2.38806C6.24109 2.31306 6.05248 2.26501 5.85804 2.26084Z"
                      fill="black"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
