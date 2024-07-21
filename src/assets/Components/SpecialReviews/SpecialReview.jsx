import "./SpecialReview.css";
import Mostlyused from "../../Images/Mostlyused.svg";
import chrome from "../../Images/chrome.svg";
import Button from "../Button/Buton";
export default function SpecialReview(props) {
  return (
    <>
      <div
        className={`max-w-screen-2xl w-full mx-auto  border-b-1  border-black      ${props.className} `}
      >
        <div className="flex mx-0  sm:mx-0 md:mx-0  lg:mx-[100px] flex-col-reverse  sm:flex-col-reverse md:flex-col lg:flex-row  items-center py-[105px] px-[30px] justify-center  gap-y-[100px]   gap-x-[140px] back-Color">
          <div className=" w-[95%] max-w-[680px]  lg:w-full relative">
            <img
              className="h-auto block max-w-full object-scale-down "
              src={props.img}
              alt=""
            />
          </div>
          <div className="w-[95%] max-w-[580px]  lg:w-full  ">
            <div className="flex justify-start gap-x-[25px] pb-[20px] items-center">
              <h4 className="relative  text-[22px]  md:text-[22px] lg:text-[36px] leading-[29px] font-bold">
                {props.title}
              </h4>
            </div>

            <p className="text-[17px] leading-[30px] text-black pt-[18px] font-normal  pb-[40px]">
              {props.content}
            </p>
            <div className="flex gap-x-[50px] pb-[50px]">
              {props.Points.map((pointitem, index) => (
                <div
                  key={index}
                  className="max-w-[260px ] w-full relative pl-[18px] review_inner "
                >
                  <div className="mb-[18px]">
                    <img src={pointitem.listImg} alt="" />
                  </div>
                  <h1 className="text-[16px] font-semibold leading-normal tracking-[-.32px]">
                    {pointitem.listTitle}
                  </h1>
                  <p className="mt-[8px] max-w-[260px] w-full text-[14px ] font-normal leading-[24px]">
                    {pointitem.listcontent}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <Button btn={props.btntext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
