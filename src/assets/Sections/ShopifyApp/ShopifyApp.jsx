import AppCollapsible from "../../Components/AppCollapsible/AppCollapsible";
import AppsCard from "../../Components/AppsCard/AppsCard";
import rivyo from "../../Images/rivyo.svg";
import bundle from "../../Images/bundle.svg";
import subscription from "../../Images/subscription.svg";
import group from "../../Images/Group_29003.svg";
import wish from "../../Images/wishlist.svg";
import shutdown from "../../Images/shutdwon.svg";
export default function ShopifyApp() {
  const Cards = [
    {
      key: 1,
      img: rivyo,
      title: "Rivyo Product Reviews & QA",
      rating: 4.9,
      totlePersons: 2003,
      dwonloads: "8k",
    },
    {
      key: 2,
      img: bundle,
      title: "Rebolt - Product Bundles",
      rating: 4.9,
      totlePersons: 843,
      dwonloads: "4k",
    },
    {
      key: 3,
      img: subscription,
      title: "Native Subscriptions",
      rating: 4.8,
      totlePersons: 98,
      dwonloads: "850",
    },
    {
      key: 4,
      img: group,
      title: "AddUp Checkout Customization",
      rating: 4,
      totlePersons: 1,
      dwonloads: "100",
    },
    {
      key: 5,
      img: wish,
      title: "Wishlist Club",
      rating: 4.9,
      totlePersons: 53,
      dwonloads: "400",
    },
    {
      key: 6,
      img: shutdown,
      title: "Engines ‑ Discount Box",
      rating: 4.5,
      totlePersons: 240,
      dwonloads: "650",
    },
  ];
  const listitmes = [
    {
      index: 1,
      listtext: "Top Notch Features",
    },
    {
      index: 2,
      listtext: "Budget-Friendly Subscriptions",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto flex py-[130px]  gap-y-[30px]    flex-col-reverse  md:flex-row lg:flex-row justify-center   overflow-hidden ">
        <div className="lg:w-[40%] lg:pr-[105px] md:w-[45%] md:pr-[40px] px-[20px] w-full ">
          <div className="grid grid-cols-3 gap-x-[20px] gap-y-[16px]">
            {Cards.map((cardData, index) => (
              <AppsCard
                key={index}
                img={cardData.img}
                title={cardData.title}
                rating={cardData.rating}
                totlePersons={cardData.totlePersons}
                dwonloads={cardData.dwonloads}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-[40%] lg:pl-[134px] md:w-[45%] md:pl-[70px] px-[20px] w-full">
          <AppCollapsible
            Appheading="Dynamic Shopify apps we have developed."
            AppSubheading=" Webcontrive has been serving Shopify stores for more than 5 years, and
            we have a loyal user base. We have 5 apps with a 4.9 average rating."
            listitmes={listitmes}
          />
        </div>
      </div>
    </>
  );
}
