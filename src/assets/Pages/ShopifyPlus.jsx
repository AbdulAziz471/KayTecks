import TextAndImageBannar from "../Sections/TextAndImageBannar/TextAndImageBannar";
import ImagesSlider from "../Components/ImagesSlider/ImagesSlider";
import white from "../Images/ShopifyPlusWhite.svg";
import PlusBannar from "../Images/PlusBannarsvg.svg";
import DefineShopifyPlus from "../Sections/DefineShopifyPlus/DefineShopifyPlus";
import ShopifyPlusServices from "../Sections/ShopifyPlusServices/ShopifyPlusServices";
import BusinessNeeds from "../Sections/BusinessNeeds/BusinessNeeds";
import BenefitsOfHiring from "../Sections/BenefitsOfHiring/BenefitsOfHiring";
import TextWithButton from "../Components/TextWithButton/TextWithButton";
import IncorporatedSecurityMeasures from "../Sections/IncorporatedSecurityMeasures/IncorporatedSecurityMeasures";
export default function ShopifyPlus() {
  return (
    <>
      <TextAndImageBannar
        background_color="bg_color !pt-[110px]  !pb-[170px]"
        main_class="!gap-x-[95px]"
        textbannar="   !pl-[74px]"
        content_class="!w-[500px] leading-[ 0px]"
        ImgBannar=" !pl-0"
        svg={white}
        Bannartilte=" The ultimate platform for fast-scaling brands"
        content_1="With Shopify Plus, rapidly growing brands can enjoy the benefits of a fully customizable and scalable e-commerce platform."
        img={PlusBannar}
        linkText="Request A Proposal"
      />
      <ImagesSlider Filter="brightness-0" />
      <DefineShopifyPlus />
      <ShopifyPlusServices />
      <BusinessNeeds />
      <BenefitsOfHiring />
      <IncorporatedSecurityMeasures />
      <TextWithButton
        btnText="Lets Talk"
        mainDiv=" !items-center"
        heading="Our eCommerce solution offers the best scalability and ultimate customization."
        headingClass="text-center max-w-[1070px] !mb-[50px]"
      />
    </>
  );
}
