import TextWithButton from "../../Components/TextWithButton/TextWithButton";
import plus from "../../Images/shopplus.svg";
import img from "../../Images/Group_29656_1.png";
export default function ShopifyPlus() {
  const gradientStyle = {
    background:
      "linear-gradient(111deg, rgba(233, 253, 208, 1) 100%, rgba(33, 249, 150, 1) 100%)",
  };
  return (
    <>
      <div className="px-[15px] " style={gradientStyle}>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row lg:flex-row justify-center  items-center py-[50px]">
          <div className="lg:w-1/2 md:w-1/2  lg:pl-5 ">
            <TextWithButton
              heading="Maximize the growth of your online store through our specialized Shopify Plus services."
              btnText="See Our Services"
              svg={plus}
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2">
            <img className="max-w-full w-auto h-auto" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
