import WorkPlans from "../../Components/WorkPlans/WorkPlans";
import Group from "../../Images/Group.svg";
import plan2 from "../../Images/plan2.svg";
import plan3 from "../../Images/plan3.svg";
import plan5 from "../../Images/plan5.png";
import "./WorkingProcess.css";
export default function WorkingProcess(props) {
  const plansData = [
    {
      title: "Requirement Gathering & Analysis",
      content:
        "We clarify & define project goals and objectives. We then detail the work breakdown in this phase to understand the needs and define the scope of the project.",
      img: Group,
    },
    {
      title: "Design Mockup",
      content:
        "In this phase, our design team focuses on the complete look of the website. We take care of theme selection, colors of all elements, and website layout.",
      img: plan2,
    },
    {
      title: "Quality Testing",
      content:
        "Prior to making your store live, our quality analyst will run several tests to make sure the final project is error-free and ready to launch.",
      img: plan3,
    },
    {
      title: "Development",
      content:
        "At this moment, our developers will take all the individual graphic elements from the prototype and use them to create an actual, functioning website.",
      img: plan5,
    },
  ];
  return (
    <>
      <div className="pt-[80px] pb-[145px] back-color">
        <div className=" max-w-screen-2xl mx-auto w-full text-center lg:text-left  ">
          <span className="   text-[#147a6d] text-[17px] font-noraml mb-[13px] leading-[21px] tracking-[.01em]">
            {props.spantext}
          </span>
          <h1 className=" w-full pb-[90px] text-[25px]   lg:text-[44px] leading-[30px] lg:leading-[56px] tracking-[0]  lg:tracking-[-.88em ] font-bold">
            {props.title}
          </h1>
        </div>
        <WorkPlans Plans={plansData} />
      </div>
    </>
  );
}
