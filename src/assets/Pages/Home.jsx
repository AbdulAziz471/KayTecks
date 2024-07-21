import HomeBannar from "../Components/HomeBannar/HomeBannar";
import ImagesSlider from "../Components/ImagesSlider/ImagesSlider";
import CompanyCapaboilities from "../Sections/CompanyCapabilities/CompanyCapaboilities";
import Portfolio from "../Sections/Portfolio/Portfilio";
import Services from "../Sections/Service/Services";
import ShopifyApp from "../Sections/ShopifyApp/ShopifyApp";
import ShopifyPlus from "../Sections/ShopifyPlus/ShopifyPlus";
import Testimonial from "../Sections/Testimonial/Testimonial";
import AssociatedApps from "../Sections/AssociatedApps/AssociateApps";
import Blogs from "../Sections/BlogsSection/BlogsSection";
import ContactSection from "../Sections/ContactSection/ContactSection";
export default function Home() {
  return (
    <>
      <HomeBannar />
      <ImagesSlider />
      <Services title="Our Services" />
      <ShopifyPlus />
      <ShopifyApp />
      <Portfolio Protfolio_title="Our Portfolio" />
      <CompanyCapaboilities />
      <Testimonial />
      <AssociatedApps />
      <Blogs />
      <ContactSection />
    </>
  );
}
