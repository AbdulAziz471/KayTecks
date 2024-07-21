import TextWithImage from "../../Components/TextWithImage/TextWithImage";
import SammarSale from "../../Images/summer-sale.png";
import shopfiy_theme from "../../Images/shopfiy_theme.png";
import Group_29749 from "../../Images/Group_29749.png";
import Group_29780 from "../../Images/Group_29780.png";
function TestWithImageSectionList() {
  const ListSection = [
    {
      index: 1,
      img: SammarSale,
      title: "E-commerce store development",
      content:
        "Ever dreamt of your own e-commerce business? Webcontrive develops the perfect solution to start your dream business. If you are new to the Shopify platform, we can assist you from creating a partner account to getting your store live and running.",
      lists: [
        { list: "Streamlined Store Setup from Scratch" },
        { list: "Integration with CRM" },
        { list: "Apps and Payment Gateway Integrations" },
      ],
      className: "lg:!flex-row",
    },
    {
      index: 2,
      img: shopfiy_theme,
      title: "Shopify theme customization",
      content:
        "You can choose us with assurance for Shopify website design and development services that are meticulously tailored to fit your company goals and completely address all of your store's needs. To give your Shopify store the best possible chance of dominating the highly competitive online market, we create it specifically to your specifications and with the customizations you desire.",
      lists: [
        { list: "Pre-built Shopify Theme Customization" },
        { list: "Product and Checkout Page Customization" },
        { list: "Theme Updates and Product Entry" },
      ],
      className: "lg:!flex-row-reverse",
    },
    {
      index: 3,
      img: Group_29749,
      title: "Shopify app development",
      content:
        "Expand your ecommerce business by entering the Shopify app market. Our talented team of certified developers have produced some powerful Shopify apps that boost store income, reduce merchant's responsibility, and extend the value of any Shopify store.",
      lists: [
        { list: "Private and Public App Development" },
        { list: "Headless and Custom App Development" },
        { list: "App Maintenance and Support" },
      ],
      className: "lg:!flex-row",
    },
    {
      index: 4,
      img: Group_29780,
      title: "Shopify store maintenance",
      content:
        "Secure the continuous success of your Shopify store with our all-inclusive maintenance services. In today's ever-evolving digital landscape, staying ahead requires a vigilant approach. We manage updates, enhance security measures, and optimize performance, granting you the freedom to concentrate on advancing your business.",
      lists: [
        { list: "Speed and Performance Optimization" },
        { list: "Executing All Shopify Upgrades" },
        { list: "Executing All Shopify Upgrades" },
      ],
      className: "lg:!flex-row-reverse",
    },
  ];

  return (
    <>
      <div>
        {ListSection.map((item, index) => (
          <TextWithImage
            key={index}
            img={item.img}
            title={item.title}
            content={item.content}
            lists={item.lists}
            className={item.className}
          />
        ))}
      </div>
    </>
  );
}

export default TestWithImageSectionList;
