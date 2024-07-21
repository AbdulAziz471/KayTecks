import AboutSlider from "../../Components/AboutSlider/slider1";
import Button from "../../Components/Button/Buton";
import TextWithButton from "../../Components/TextWithButton/TextWithButton";
import "./AboutBannatSection.css";
export default function AboutBannarSection() {
  return (
    <>
      <div className="bg-[#D0FDEE]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center mt-[-89px]  relative aboutBannarClass   max-h-[860px]  ">
            <div className="w-3/5">
              <p className="max-w-[575px] text-[17px] leading-[30px] font-normal">
                At WebContrive
              </p>
              <h1 className="text-[54px] leading-[62px] font-bold tracking-[-2.16px] ">
                We Believe That Raw Talent Has No Boundaries
              </h1>
              <h1 className="pt-[20px] mb-[45px] max-w-[575px] text-[17px] leading-[30px] font-normal">
                We believe that the key to success is innovation, and we strive
                to bring creativity and fresh ideas to every project we take on.
              </h1>
              <Button btnClass="text-[#d5ed42]" btn="Lets Walk Together" />
            </div>
            <div className="w-2/5 grid grid-cols-2 max-w-[530px] m-auto gap-[12px]">
              <AboutSlider />
              <AboutSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
