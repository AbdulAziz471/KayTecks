import React from "react";
import blog1 from "../../Images/blog1.png";
import blog2 from "../../Images/blog3.png";
import blog3 from "../../Images/blog2.png";
export default function Blogs() {
  const Blogss = [
    {
      b_img: blog1,
      b_title:
        "Celebrating 2000+ Reviews on Shopify App Store with our Rivyo App",
      b_date: "October 9, 2023",
    },
    {
      b_img: blog2,
      b_title:
        "New Partnership: Rivyo Product Reviews & AppOkart Mobile App Builder",
      b_date: "October 2, 2023",
    },
    {
      b_img: blog3,
      b_title: "Rivyo Product Reviews Partners With Dropshipman",
      b_date: "August 28, 2023",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl w-full mx-auto pt-[120px] pb-[80px]">
        <h1 className=" text-[25px] leading-[42px]  lg:text-[44px] lg:leading-[56px] font-bold tracking-[-.02em] text-center">
          Stay updated with the latest industry news
        </h1>
        <div className="max-w-[100%] w-[1390px] mx-auto mt-[45px] grid gap-x-[50px] gap-y-[45px] grid-col-1 md:grid-cols-2  lg:grid-cols-3">
          {Blogss.map((log, index) => (
            <div key={index} className="bg-white p-[30px] lg:p-0 md:px-[30px] ">
              <div>
                <a href="#">
                  <img
                    className="rounded-t-3xl"
                    src={log.b_img}
                    alt={log.b_title}
                  />
                </a>
              </div>
              <div className="px-[25px] py-[18px] hover:shadow-lg">
                <p className="text-[17px] leading-[30px] mt-[15px] font-bold">
                  {log.b_title}
                </p>
                <div className="text-right pt-[12px] mt-[40px] border-t border-gray">
                  <span className="text-[12px] leading-[13px] tracking-[-.03em] text-[#7c7c7c]">
                    {log.b_date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
