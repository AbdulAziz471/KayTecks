import "./TextWithImage.css";
import SammarSale from "../../Images/summer-sale.png";
import CheckMark from "../../Images/check-mark.svg";
export default function TextWithImage(props) {
  return (
    <>
      <div
        className={`max-w-screen-2xl w-full mx-auto flex flex-col items-center  lg:justify-between gap-x-[152px]   ${props.className}   `}
      >
        <div className=" w-[95%]  lg:w-1/2 relative">
          <img
            className="h-auto block max-w-full object-scale-down "
            src={props.img}
            alt=""
          />
        </div>
        <div className="w-[95%]  lg:w-1/2 content ">
          <h4 className="relative pl-[30px] text-[24px] leading-[29px] font-bold">
            {props.title}
          </h4>
          <p className="text-[17px] leading-[30px] text-black font-medium pt-[10px] px-[30px] pb-[20px]">
            {props.content}
          </p>
          <ul className="pl-[45px] list-none ">
            {props.lists.map((listItem, index) => (
              <li
                key={index}
                className="font-semibold text-[15px] leading-[30px] tracking-[.005em] text-[#070707] mb-[12px] relative  pl-[12px] list"
              >
                {listItem.list}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
