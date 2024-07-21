import TextAndImageBannar from "../Sections/TextAndImageBannar/TextAndImageBannar";
import CapabilitiesBannar from "../Images/CapabilitiesBannar.svg";
import TextCard from "../Components/TextCard/TextCard";
import C_Form from "../Components/C_Form/C_Form";
import TestWithImageSectionList from "../Sections/TextWithImageSectionList/TestWithImageSectionList";
import WorkingProcess from "../Sections/WorkingProcessSection/WorkingProcess";
import Portfolio from "../Sections/Portfolio/Portfilio";
export default function Capabilities() {
  const Card = [
    {
      index: 1,
      title: "1000+",
      content: "Satisfied clients with a better online experience & service",
    },
    {
      index: 2,
      title: "95%",
      content:
        "Businesses experienced a surge in revenue after opting for our services",
    },
    {
      index: 3,
      title: "2X",
      content: "Ecommerce store growth with our error-free technical solutions",
    },
    {
      index: 4,
      title: "1500+",
      content:
        "Unique projects completed with our certified team of developers.",
    },
  ];
  return (
    <>
      <TextAndImageBannar
        Bannartilte=" We offer more accurate outcomes & top-notch service"
        content_1="Our outstanding figures convey the hard work we have done for over 10 years to"
        content_2="assist ecommerce merchants with our exceptional web development services."
        img={CapabilitiesBannar}
      />
      <TextCard TextCards={Card} />
      <TestWithImageSectionList />
      <WorkingProcess
        spantext="Our approach to the project."
        title="Our process of working with clients on the project"
      />
      <Portfolio Protfolio_title="Some Of Our Projects" />
      <C_Form className="contact_form" />
    </>
  );
}
