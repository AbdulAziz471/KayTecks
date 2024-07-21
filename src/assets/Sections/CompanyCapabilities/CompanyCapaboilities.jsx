import Capabilities from "../../Components/Capabilities/Capabilities";
import TextBannar from "../../Components/TextBannar/TextBannar";
import "./CompoanyCapabilities.css";
import bgimg from "../../Images/bg_img.svg";
const CompanyCapaboilities = () => {
  return (
    <>
      <div className="bg-[rgb(213,253,248,.4)] relative  ">
        <div className="max-w-screen-2xl flex lg:flex-row flex-col justify-center mx-auto overflow-hidden pt-[73px] pb-[73px] back ">
          <div className=" lg:w-[42%] w-full lg:text-left text-center  lg:pr-[90px] pr-0 pt-[77px]   ">
            <TextBannar />
          </div>
          <div className=" lg:w-[50%] w-full">
            <Capabilities />
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyCapaboilities;
