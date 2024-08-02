import { useEffect } from "react";
import TextComponent from "../../Components/TextComponent/TextComponent";
import BusinessNeed from "../../Images/BusinessNeed.png";
import "./BusinessNeeds.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const BusinessNeeds = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
      mirror: true,
    });
  }, []);
  return (
    <>
      <div className="pt-[120px]">
        <div className="bg-colr">
          <div className="max-w-[1494px] w-full px-[15px] mx-auto ">
            <div className="flex flex-col lg:flex-row pt-[80px] pb-[60px] gap-x-[128px] items-center max ">
              <div className="max-w-[567px] w-full pt-0 pl-0 pr-0">
                <TextComponent
                  mainClass="!max-w-[515px]"
                  spanClass="!text-[#a5e359] !font-semibold "
                  headingClass="!pt-[14px]   !pb-[20px] text-white"
                  contantClass="!max-w-[491px] text-white"
                  spantext="Empower Your Business"
                  content="Optimize your operations with our comprehensive IT services, from web solutions to robust support, ensuring enhanced performance and seamless integration."
                  heading="Tailored IT Solutions for Your Business"
                  
                />
              </div>

              <div className="max-w-[750px] w-full   ">
                <div className=" relative   lg:mt-[-190px]">
                  <img className="" src={BusinessNeed} alt="K-tech Business Solutions Visualization"  data-aos="zoom-in-up"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessNeeds;
