import Button from "../Button/Buton";
import "./BasicRivews.css";

export default function BasicRreview(props) {
  return (
    <>
      <div className="max-w-screen-2xl w-full mx-auto px-[10px] md:px-[15px] lg:px-[20px]">
        <div
          className={` flex  items-center justify-center gap-y-11 flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row   sm:gap-x-[10px] md:gap-x-[10px] lg:gap-x-[140px] border-b-1  border-black  pt-[80px] pb-[140px]  ${props.className} `}
        >
          <div className="w-full max-w-[580px]  lg:w-full  ">
            <div className="flex justify-start gap-x-[25px] pb-[20px] items-center">
              <h4 className="relative text-[22px]  md:text-[22px] lg:text-[36px] leading-[29px] font-bold whitespace-pre">
                {props.title}
              </h4>
              <div className="relative whitespace-pre">
                <img
                  className="min-w-[200px] min-h-[35px]"
                  src={props.SpanImg}
                  alt=""
                />
                <div
                  className={`text-[#ff781a] absolute top-[9px] right-0 left-0 px-[20px] flex items-center font-bold text-[13px] leading-normal m-auto  align-center justify-center tracking-[1.04px] uppercase whitespace-pre ${props.SpanClass}  `}
                >
                  {props.SpanText}
                </div>
              </div>
            </div>

            <p className="text-[17px] leading-[30px] text-black pt-[10px] font-normal  pb-[20px]">
              {props.content}
            </p>
            <div className="mt-[30px] mb-[50px]">
              {props.List.map((listItem, index) => (
                <div
                  key={index}
                  className={`relative CustomList ${
                    index === 0
                      ? "!border-b-0 "
                      : "border-b border-solid border-black"
                  }`}
                >
                  <p>{listItem.listText}</p>
                </div>
              ))}
            </div>
            <div className="">
              <Button btn={props.btn_text} />
            </div>
          </div>
          <div className=" w-full max-w-[680px]  lg:w-full relative">
            <img
              className="h-auto block max-w-full object-scale-down "
              src={props.img}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
