import ServicesCard from "../../Components/ServicesCards/ServicesCard";
import TextComponent from "../../Components/TextComponent/TextComponent";
import Incorporated from "../../Images/Incorporated.svg";
import protect from "../../Images/protect.svg";
import "./IncorporatedSecurityMeasures.css";
export default function IncorporatedSecurityMeasures() {
  const servicesData = [
    {
      index: 1,
      title: "HTTPS Encryption",
      img: protect,
      textDiv: "!mt-0",
      imgClass: "!bg-transparent",
      mainClass: "flex items-center !p-[45px] border-b-[1px] border-white",
      mainHeadingClass: " !mr-0 !leading-[25px] text-white  !mt-0 !pb-0",
    },
    {
      index: 2,
      title: "Secure Authentication",
      img: protect,
      textDiv: "!mt-0",
      imgClass: "!bg-transparent",
      mainClass:
        "flex items-center !p-[45px] border-x-[1px] border-b-[1px] border-white",
      mainHeadingClass: " !mr-0 !leading-[25px] text-white  !mt-0 !pb-0",
    },
    {
      index: 3,
      title: "Regular Software Updates",
      img: protect,
      textDiv: "!mt-0",
      imgClass: "!bg-transparent",
      mainClass: "flex items-center !p-[45px] border-b-[1px]  border-white",
      mainHeadingClass: " !mr-0 !leading-[25px] text-white  !mt-0 !pb-0",
    },
    {
      index: 4,
      title: "Data Encryption",
      img: protect,
      textDiv: "!mt-0",
      imgClass: "!bg-transparent",
      mainClass: "flex items-center !p-[45px] ",
      mainHeadingClass: " !mr-0 !leading-[25px] text-white  !mt-0 !pb-0",
    },
    {
      index: 5,
      title: "Regular Backups",
      img: protect,
      textDiv: "!mt-0",
      imgClass: "!bg-transparent",
      mainClass: "flex items-center !p-[45px] border-x-[1px]  border-white",
      mainHeadingClass: " !mr-0 !leading-[25px] text-white  !mt-0 !pb-0",
    },
    {
      index: 6,
      title: "Role-Based Access Control",
      img: protect,
      textDiv: "!mt-0",
      imgClass: "!bg-transparent",
      mainClass: "flex items-center !p-[45px] ",
      mainHeadingClass: " !mr-0 !leading-[25px] text-white  !mt-0 !pb-0",
    },
  ];
  return (
    <>
      <div className=" back_image relative ">
        <div className="flex gap-x-[120px] max-w-screen-2xl mx-auto px-[15px] py-[100px]  ">
          <div>
            <TextComponent
              mainClass="!max-w-[515px]"
              spanClass="!text-[#a5e359] !font-semibold "
              headingClass="!pt-[14px]   !pb-[20px] text-white"
              contantClass="!max-w-[491px] text-white"
              heading="Essential Security Measures for Online Success"
              content="We implement a variety of security measures to ensure the safety and integrity of our client's online stores."
              spantext="Incorporated security measures"
            />
          </div>
          <div className="">
            <div className="grid grid-cols-3">
              {servicesData.map((service, index) => (
                <ServicesCard
                  key={index}
                  title={service.title}
                  img={service.img}
                  textDiv={service.textDiv}
                  imgClass={service.imgClass}
                  mainClass={service.mainClass}
                  mainHeadingClass={service.mainHeadingClass}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
