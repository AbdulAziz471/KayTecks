import "./PricingCard.css";
import Tick from "../../Images/tick";
import Arrowpprice from "../../Images/arrowpprice.jsx";
export default function PricingCard(props) {
  return (
    <>
      <div className={`pricing-card  `}>
        <div className="max-w-[320px] justify-between colorChange  w-full bg-white rounded-[20px] shadow-lg p-[40px] flex flex-col h-full border-white border-2 hover:border-[#008060] hover:border-2 transition-all ">
          <div className="flex gap-x-[10px] items-center ">
            <span className="colorChange colorChange text-[15px] font-semibold leading-normal tracking-[.45px] uppercase">
              {props.spanText}
            </span>
            <span>
              {props.SpanspanText && (
                <div className="relative whitespace-pre">
                  <img
                    className="min-w-[150px] min-h-[35px]"
                    src={props.SpanImg}
                  />
                  <div
                    className={`text-[#ff781a] absolute top-[9px] right-0 left-0 px-[20px] flex items-center font-bold text-[13px] leading-normal m-auto  align-center justify-center tracking-[1.04px] uppercase whitespace-pre ${props.SpanClass}  `}
                  >
                    {props.SpanspanText}
                  </div>
                </div>
              )}
            </span>
          </div>
          <div
            className={`  py-[25px] relative price duration-500 transition-all ${
              props.isYear === "Yearly Plan" ? "hidden" : "actives"
            }`}
          >
            <div>
              <p className="text-[45px] font-medium leading-normal">
                {props.planPrice}
              </p>
            </div>
            <div>
              <p className="text-[#888] colorChange text-[15px ] font-medium pt-[25px] ">
                {props.duration}
              </p>
            </div>
          </div>
          <div
            className={`  py-[25px] relative price ${
              props.isYear === "Yearly Plan" ? " actives" : "hidden"
            }`}
          >
            <div>
              <p className="text-[45px] font-medium leading-normal">
                {props.planPrice}
              </p>
            </div>
            <div>
              <p className="text-[#888] colorChange text-[15px ] font-medium pt-[25px] ">
                {props.duration}
              </p>
            </div>
          </div>
          <div className="py-[25px]">
            <ul className="p-0 m-0 list-none ">
              {props.PlanProperties.map((property, index) => (
                <li
                  key={index}
                  className="flex justify-start items-start gap-x-[15px]"
                >
                  <Tick />
                  <p className="pb-[20px] text-[#888] colorChange text-[14px] font-medium leading-normal w-[90%]">
                    {property.listItem}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-[25px] pricebutton ">
            <a href="">
              {props.buttonText}
              <Arrowpprice />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
