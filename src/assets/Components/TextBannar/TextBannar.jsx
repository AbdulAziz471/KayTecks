import TextArrow from "../../Images/TextArrow.svg";
const TextBannar = (props) => {
  return (
    <>
      <div className="relative  ">
        <h2 className="tracking-[-.02em] relative pb-[60px] lg:text-[44px] text-[25px] leading-[56px] font-bold after:bg-[#86dbd0] heading  ">
          Discover our Company's Capabilities
        </h2>
        <p
          className="leading-[30px] tracking-[.01em] mb-[80px] text-[16px] w-full lg:mx-0 md:mx-0 mx-auto  px-[20px] lg:px-0
        md:px-0 lg:max-w-[430px] "
        >
          With over 10 years of experience, we have successfully completed 1500+
          unique projects, making our team capable of assisting you with all
          your e-commerce development needs.
        </p>
        <a
          href=""
          className="flex gap-[1.25em] hover:gap-[1.5em] font-bold text-[18px ] leading-[25px] tracking-[-.02em] transition-all duration-300 ease-in-out lg:justify-start justify-center"
        >
          Start your Proect
          <img src={TextArrow} alt="" />
        </a>
      </div>
    </>
  );
};
export default TextBannar;
