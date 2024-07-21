import rivyo from "../../Images/rivyo.svg";
import "./Capabilities.css";
import ui from "../../Images/ui_ux.svg";
import web from "../../Images/web_dev.svg";
import support from "../../Images/support.svg";
import testing from "../../Images/testing.svg";
import ServicesCard from "../ServicesCards/ServicesCard";

const Capabilities = () => {
  const servicesData = [
    {
      title: "UI/UX Strategy",
      description:
        "Increase your conversion rate by providing a clutter-free interface and a user-friendly experience on your website.",
      img: ui,
      mainClass: "buttom ",
    },
    {
      title: "Web Development",
      description:
        "  Our technical experience and business intelligence merge together to deliver excellent results across all platforms",
      img: web,
      mainClass: "buttom  right",
    },
    {
      title: "Premium Support",
      description:
        " We prioritize technical issues & offer ongoing email support. Our support team is trained to resolve your problems promptly.",
      img: support,
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "  We provide comprehensive solutions to identify and fix technical issues, delivering a flawless and efficient website.",
      img: testing,
      mainClass: "right",
    },
  ];
  return (
    <>
      <div className="p-[13px]">
        <div className="grid grid-cols-2">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              img={service.img}
              mainClass={service.mainClass}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Capabilities;
