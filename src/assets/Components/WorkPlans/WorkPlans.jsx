import sales from "../../Images/sales.png";
import users from "../../Images/users.png";
import search from "../../Images/google_srch.png";
import site_img from "../../Images/site_image.png";

import "./WorkPlans.css";
export default function WorkPlans(props) {
  return (
    <>
      <div className="max-w-screen-2xl w-full  mx-auto">
        <div className="">
          <div className="flex flex-col-reverse md:flex-row items-center lg:flex-row ">
            <div className=" w-full lg:w-[38.8%] px-[15px] lg:px-[0px] ">
              <div className="grid gap-[35px]">
                {props.Plans.map((plan, index) => (
                  <div key={index}>
                    <div className="flex flex-row md:flex-col lg:flex-row  gap-[35px]">
                      <span className="left_icon ">
                        <img src={plan.img} alt="" />
                      </span>
                      <div className=" text_content_icn  pt-[15px] px-[0px] pb-[23px] md:px-[0px] md:pb-[36px] lg:px-[0px] lg:pb-[36px] ">
                        <h4 className="mb-[7px] text-[18px] lg:text-[24px]  leading-[29px] font-bold">
                          {plan.title}
                        </h4>
                        <p className="text-[15px] lg:text-[17px] leading-[25px] lg:leading-[30px] font-normal text-black">
                          {plan.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[61.2%] text-center">
              <div className="inline-block  relative">
                <img
                  className="shadow_img w-full max-w-full md:max-w-[80%] lg:max-w-[100%]   "
                  src={site_img}
                  alt=""
                />
                <img
                  className="shadow_img absolute w-[27%] top-0 right-0  md:top-[-20px] md:right-[20px] lg:w-[243px] lg:top-[-37px]  lg:right-[-160px]"
                  src={sales}
                  alt=""
                />
                <img
                  className="shadow_img w-[40%] lg:w-[250px] left-0  absolute lg:left-[-98px]  bottom-[32.5%] "
                  src={search}
                  alt=""
                />
                <img
                  className="shadow_img absolute w-[30%] right-[68px] bottom-[54px] lg:w-[165px]  lg:bottom-[54px] lg:right-[-95px]"
                  src={users}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
