export default function TextComponent(props) {
  return (
    <>
      <div
        className={`max-w-[440px]  mt-auto mx-auto   mb-auto text-center md:text-center  lg:text-left  lg:ml-auto  px-[30px] py-[30px] lg:px-0 lg:py-0 ${props.mainClass}`}
      >
        <span
          className={`text-[17px ] leading-[30px] tracking-[.045em]  text-[#616161] ${props.spanClass}   `}
        >
          {props.spantext}
        </span>
        <h2
          className={`tracking-[-.02em] pt-[30px] pb-[14px] lg:text-[44px] text-[25px] lg:leading-[56px] md:leading-[42px]   font-bold ${props.headingClass}`}
        >
          {props.heading}
        </h2>
        <p className={`text-[17px] leading-[30px] ${props.contantClass} `}>
          {props.content}
        </p>
      </div>
    </>
  );
}
