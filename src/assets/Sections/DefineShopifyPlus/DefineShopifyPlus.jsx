import TextComponent from "../../Components/TextComponent/TextComponent";
import ServicesCard from "../../Components/ServicesCards/ServicesCard";



import "./DefineShopifyPlus.css";
export default function DefineShopifyPlus(props) {
  const servicesData = [
    {
      title: "IT Support",
      description:
        "End-to-end IT support for all levels, ensuring your business systems run smoothly and efficiently.",

      mainClass: "buttom !py-[30px] !pl-[22px] !pr-[30px] after:!bg-[#1a50a3]",
      textDiv: "!max-w-[232px] !mt-0  text-center lg:text-left",
      mainHeadingClass: "!pb-0",
    },
    {
      title: "Security Systems",
      description:
        "Protect your data with our state-of-the-art security solutions, ensuring safety and compliance.",

      mainClass: "buttom  right before:!bg-[#1a50a3] after:!bg-[#1a50a3]",
      textDiv: "lg:!max-w-[232px]  !mt-0 text-center lg:text-left",
      mainHeadingClass: "!pb-0",
    },
    {
      title: "Software Development",
      description:
        "Tailor-made software solutions that fit your business needs and enhance operational efficiency.",
      mainClass: "  before:!bg-[#1a50a3] after:!bg-[#1a50a3]",
      textDiv: "!max-w-[232px] !mt-0 text-center lg:text-left",

      mainHeadingClass: "!pb-0",
    },
    {
      title: "Digital Solutions",
      description:
        "Empower your business with digital solutions that drive growth and improve customer engagement.",
      mainClass: "right  before:!bg-[#1a50a3] text-center",
      textDiv: "!max-w-[232px] !mt-0 text-center lg:text-left",

      mainHeadingClass: "!pb-0",
    },
];

  return (
    <>
      <div className="background_color py-[80px]">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex flex-col items-center lg:flex-row gap-x-[141px] ">
            <div className="">
              <TextComponent
                mainClass="!max-w-[515px]"
                spanClass="!text-[#1a50a3] !font-bold "
                headingClass="!pt-[14px]   !pb-[20px]"
                contantClass="!max-w-[390px]"
                heading="Seamless Integration, Robust Security, and Enhanced Efficiency."
                content="K-tech delivers comprehensive IT solutions tailored to streamline your business operations and ensure security."
                spantext="Explore K-tech's Services"
              />
            </div>
            <div className="before:!bg-[#1a50a3]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:w-[90%] lg:max-w-[607px]">
                {servicesData.map((service, index) => (
                  <ServicesCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    img={service.img}
                    mainClass={service.mainClass}
                    textDiv={service.textDiv}
                    mainHeadingClass={service.mainHeadingClass}
                    contentClass={service.contentClass}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
