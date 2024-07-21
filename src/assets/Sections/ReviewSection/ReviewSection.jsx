import BasicRreview from "../../Components/BasicReviews/BasicRivews";
import SpecialReview from "../../Components/SpecialReviews/SpecialReview";
import Amazonreview from "../../Images/Amazonreview.png";
import Mostlyused from "../../Images/Mostlyused.svg";
import Recomend from "../../Images/Recomend.svg";
import pro_rew_1 from "../../Images/pro_rew_1.png";
import popup from "../../Images/popup.png";
import Mostadd from "../../Images/MostAdd.svg";
import AllReview from "../../Images/StoreAllReview.png";
import Cal from "../../Images/calculation.svg";
import test from "../../Images/TestimonailReview.png";
import layout from "../../Images/layout.svg";
import star from "../../Images/star.svg";
import chrome from "../../Images/chrome.svg";
import StoreAverage from "../../Images/StoreAverage.png";

export default function ReviewSection({ reviewSectionheading }) {
  return (
    <>
      <div>
        <div>
          <div className="max-w-[684px] text-center  mx-auto mb-[140px]">
            <h1 className="lg:leading-[56px] md:leading-[45px] leading-7 tracking-[-.02em] font-bold text-black mt-[37px] mb-[33px] lg:text-[44px] md:text-[30px] text-[25px] ${props.headingClass}  ">
              {reviewSectionheading}
            </h1>
          </div>
          <BasicRreview
            img={pro_rew_1}
            title="Product Reviews"
            content="Ever dreamt of your own e-commerce business? Webcontrive develops the perfect solution to start your dream business. If you are new to the Shopify platform, we can assist you from creating a partner account to getting your store live and running."
            className="!lg:flex-row"
            List={[
              {
                index: 1,
                listText: "Show recommendation tags by customers on products.",
              },
              {
                index: 2,
                listText:
                  "Make all the reviews accessible through 'All Reviews Page'.",
              },
            ]}
            SpanImg={Mostlyused}
            SpanText="MOSTLY USED"
            btn_text="Install Now"
          />
          <SpecialReview
            img={Amazonreview}
            title="Amazon/AliExpress Reviews"
            content="Bulk import and display your valuable reviews from leading e-commerce platforms such as Amazon & AliExpress. Use past reviews on your newly established Shopify Store."
            className=""
            btntext="View Features"
            Points={[
              {
                index: 1,
                listImg: chrome,
                listTitle: "Chrome Extension",
                listcontent:
                  "Show recommendation tags by customers on products.",
              },
              {
                index: 1,
                listImg: Cal,
                listTitle: "Review Importer",
                listcontent:
                  "Import reviews from AliExpress with a drag-and-drop review importer.",
              },
            ]}
          />
          <BasicRreview
            img={popup}
            title="Popup Widget"
            content="Add a review popup widget to your store that is accessible from all pages on the website. Display multiple reviews along with respective product links to boost sales."
            className="!lg:flex-row"
            List={[
              {
                index: 1,
                listText:
                  "Highlight selected reviews with photos in the popup screen.",
              },
              {
                index: 2,
                listText:
                  "Display the store's average rating & give access to total reviews.",
              },
            ]}
            SpanImg={Recomend}
            SpanText="Recomended"
            SpanClass="!text-[#007619]"
            btn_text="Explore App"
          />
          <SpecialReview
            img={test}
            title="Testimonials"
            content="Display testimonials from your loyal customers and present a reputation as a reliable brand to new customers. Use the valuable feedback of your customers to convert new buyers."
            className=""
            btntext="Start Trial"
            Points={[
              {
                index: 1,
                listImg: layout,
                listTitle: "Multiple layouts",
                listcontent:
                  "Choose from 4 different layouts to display testimonials in a slider view.",
              },
              {
                index: 1,
                listImg: star,
                listTitle: "Review validation",
                listcontent:
                  "Validate reviews with a verified sign near the customer's name.",
              },
            ]}
          />
          <BasicRreview
            img={AllReview}
            title="Store/All Reviews
            "
            content="Create a separate store review page to display all store reviews. Showcase the valuable response and appreciation your store has received and increase brand credibility."
            className="!lg:flex-row"
            List={[
              {
                index: 1,
                listText:
                  "Create a separate page by adding a simple code to your theme.",
              },
              {
                index: 2,
                listText:
                  "Customize the “All Reviews” section to match your store's theme.",
              },
            ]}
            SpanImg={Mostadd}
            SpanText="MOST ADDED"
            SpanClass="!text-[#007619]"
            btn_text="Install Now"
          />
          <SpecialReview
            img={StoreAverage}
            title="Store Average"
            content="Display the store average rating anywhere on your website based on the total number of reviews on your store. Show the overall response your store has received to build trust."
            className=""
            btntext="Install App"
            Points={[
              {
                index: 1,
                listTitle: "Popup widget",
                listcontent:
                  "Showcase the store's average rating in the popup widget on all pages.",
              },
              {
                index: 2,
                listTitle: "Store portfolio",
                listcontent:
                  "Remind new customers of the satisfactory service you provide.",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
