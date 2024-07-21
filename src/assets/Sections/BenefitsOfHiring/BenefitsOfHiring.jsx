import TextComponent from "../../Components/TextComponent/TextComponent";
import "./BenefitsOfHiring.css";
export default function BenefitsOfHiring() {
  const BenefitsList = [
    {
      index: 1,
      name: "Expertise in Shopify Plus",
    },
    {
      index: 2,
      name: "Customized Solutions",
    },
    {
      index: 3,
      name: "Fast and Efficient Development",
    },
    {
      index: 4,
      name: "Optimized Site for SEO",
    },
    {
      index: 5,
      name: "Scalability and Flexibility",
    },
    {
      index: 6,
      name: "Security and Protection",
    },
  ];

  return (
    <>
      <div className=" py-[10px] md:py-[100px] lg:py-[130px] px-[16px] max-w-screen-2xl mx-auto flex gap-x-[109px] flex-col  md:flex-row lg:flex-row">
        <div>
          <TextComponent
            mainClass="!max-w-[720px] !text-left !px-[10px]"
            spanClass="!text-[#1a50a3] !font-semibold "
            headingClass="!pt-[14px] font-semibold text-left     !pb-[20px] text-black"
            contantClass=" text-black text-left"
            heading="Benefits of hiring our Shopify Plus developer for your business"
            content="At WebContrive, we have a team of experienced Shopify Plus developers who specialize in creating exceptional e-commerce solutions. When you choose to work with us, you gain access to a wealth of benefits."
            spantext="Why Choose WebContrive?"
          />
        </div>
        <div className="max-w-[600px] w-full ">
          <ul className="p-0 m-0    md:columns-2 lg:columns-2">
            {BenefitsList.map((List, index) => (
              <li
                key={index}
                className="relative  text-[16px] font-medium leading-[25px] mb-[41px] pl-[40px] md:pl-[68px] lg:pl-[68px] md:inline-block  lg:inline-block listimg"
              >
                {List.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
