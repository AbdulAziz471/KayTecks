import TextAndImageBannar from "../Sections/TextAndImageBannar/TextAndImageBannar";
import Article from "../Components/Articles/Article";
import blog1 from "../Images/blog1.png";
import blog2 from "../Images/blog3.png";
import blog3 from "../Images/blog2.png";
import UpToDate from "../Images/UpToDate.svg";
import Blogs from "../Sections/BlogsSection/BlogsSection";
import ContactSection from "../Sections/ContactSection/ContactSection";
export default function Blog() {
  const Blogss = [
    {
      index: 1,
      b_img: blog1,
      b_title:
        "Celebrating 2000+ Reviews on Shopify App Store with our Rivyo App",
      articleContentClass: " !px-0",
      titleClass: "font-semibold",
    },
    {
      index: 2,
      b_img: blog2,
      b_title:
        "New Partnership: Rivyo Product Reviews & AppOkart Mobile App Builder",
      articleContentClass: " !px-0",
      titleClass: "font-semibold",
    },
    {
      index: 3,
      b_img: blog3,
      b_title: "Rivyo Product Reviews Partners With Dropshipman",
      articleContentClass: " !px-0",
      titleClass: "font-semibold",
    },
  ];
  return (
    <>
      <TextAndImageBannar
        background_color="bg_color !pt-[130px]  !pb-[170px]"
        main_class="!gap-x-0"
        textbannar="   !pl-[74px]"
        content_class="!w-[500px] leading-[ 0px]"
        ImgBannar=" !pl-0"
        Bannartilte="Stay Up-to-Date with the Latest Happenings in the Industry"
        content_1="Keep your finger on the industry's pulse, receiving timely updates on the latest news and trends."
        img={UpToDate}
      />
      <div>
        <div className="max-w-[100%] w-[1390px] mx-auto mt-[45px] grid gap-x-[50px] gap-y-[45px] grid-col-1 md:grid-cols-2  lg:grid-cols-3">
          {Blogss.map((log, index) => (
            <Article
              key={log.index}
              b_img={log.b_img}
              b_title={log.b_title}
              b_date={log.b_date}
              articleContentClass={log.articleContentClass}
              titleClass={log.titleClass}
            />
          ))}
        </div>
      </div>
      <ContactSection />
    </>
  );
}
