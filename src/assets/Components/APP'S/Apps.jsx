import bg_img2 from "../../Images/bg_img2.svg";
import TextComponent from "../TextComponent/TextComponent";
import "./App.css";
export default function Apps(props) {
  const gradientStyle = {
    background:
      "linear-gradient(111deg, rgba(233, 253, 208, 1) 100%, rgba(33, 249, 150, 1) 100%)",
  };
  return (
    <>
      <div className=" max-w-screen-2xl mx-auto " style={gradientStyle}>
        <div className="flex  flex-col lg:flex-row  items-center relative  back   ">
          <div className="w-full lg:w-[43%] pr-0 lg:pr-[100px] ">
            <TextComponent
              heading="Associated Apps"
              content="Our Shopify apps integrate with other leading apps in the market. Our goal is to provide flexible apps to merchants for a smooth running ecommerce store."
              spantext="Our Valued Partners"
            />
          </div>
          <div className="w-full lg:w-[57%]   bg-white pl-[20px] lg:pt-[59px] pr-[20px] lg:pr-[145px] pb-[59px] lg:pl-[127px]">
            <ul className="grid grid-cols-3 gap-[1px] p-0 m-0  list-none bg-[rgba(0,0,0,.1)] ">
              {props.AppsImages.map((images, index) => (
                <li
                  key={index}
                  className="flex justify-center items-center   bg-white py-[50px ] px-0  text-center w-full min-h-[217px] h-full max-h-[217px] "
                >
                  <a>
                    <img src={images.img} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
