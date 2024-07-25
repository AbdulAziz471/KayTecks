import TextAndImageBannar from "../Sections/TextAndImageBannar/TextAndImageBannar";
import TestWithImageSectionList from "../Sections/TextWithImageSectionList/TestWithImageSectionList";

export default function ProjectKAyTeck(){

    return(<>
   <TextAndImageBannar
        background_color="bg_color !pt-[130px]  !pb-[170px]"
        main_class="!gap-x-0"
        textbannar="   !pl-[74px]"
        content_class="!w-[500px] leading-[ 0px]"
        ImgBannar=" !pl-0"
        Bannartilte="Explore Our Comprehensive Range of Services"
    content_1="Discover tailored solutions designed to enhance your operational efficiency and drive business growth. Experience expert support and innovative approaches that set you apart in the marketplace."
        // img={UpToDate}
      />
      <TestWithImageSectionList/>
    </>)
}