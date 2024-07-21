import "./AppCollapsible.css";
import gray_bg from "../../Images/grey_bg.svg";
import Collapsible from "../Collapsible/Collepsible";
export default function AppCollapsible(props) {
  const CollepsibleData = [
    {
      index: 1,
      collepData: "Explore Details Of Our Shopify Apps",
      collepreply:
        "With our apps, you can display customer reviews, create product bundles, display bundle offers in popups, and create recurring subscriptions for products on your store",
    },
    {
      index: 2,
      collepData: "Advantages Of Using Our Shopify Apps",
      collepreply:
        "Our apps will help your store to gain and display social proof, increase AOV, start recurring revenue, customize your checkout page, and increase customer retention.",
    },
  ];
  return (
    <>
      <div className="relative appCollapsible ">
        <h2 className="tracking-[-.02em] relative pb-[60px] lg:text-[44px] text-[25px] leading-[42px] lg:leading-[56px] font-bold heading ">
          {props.Appheading}
        </h2>
        <p className="leading-[30px] tracking-[.01em] text-[16px] ">
          {props.AppSubheading}
        </p>
        <ul className="mt-[28px] mb-[28px]">
          {props.listitmes.map((data, index) => (
            <li className="flex justify-start gap-[10px] mb-[10px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3109_8853)">
                  <path
                    d="M17.9266 4.36733L6.76605 15.5278C6.66775 15.6261 6.50857 15.6261 6.4105 15.5278L0.0735559 9.19067C-0.0245186 9.09283 -0.0245186 8.93366 0.0735559 8.83535L1.61335 7.29556C1.71165 7.19748 1.87082 7.19748 1.9689 7.29556L6.5885 11.9149L16.0314 2.47199C16.13 2.37392 16.2887 2.37392 16.387 2.47199L17.9266 4.01179C18.0249 4.10986 18.0249 4.2688 17.9266 4.36733Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3109_8853">
                    <rect width="18" height="18" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              {data.listtext}
            </li>
          ))}
        </ul>
        <Collapsible CollepsibleData={CollepsibleData} />
      </div>
    </>
  );
}
