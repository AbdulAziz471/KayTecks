import TestimonialSlider from "../../Components/TestimonialSlider/TestimonialSlider";
import test1 from "../../Images/test1.png";
import test2 from "../../Images/test2.png";
import test3 from "../../Images/test3.png";
import test4 from "../../Images/test4.png";
import test5 from "../../Images/test5.png";
import softsens from "../../Images/softsens.svg";
import nutribullet from "../../Images/nutribullet.svg";
import risco from "../../Images/risco.svg";
import organic from "../../Images/organic.svg";
import vanvault from "../../Images/vanvault.svg";
export default function Testimonial() {
  const testimonial = [
    { src: test1, alt: "Slide 1" },
    { src: test2, alt: "Slide 2" },
    { src: test3, alt: "Slide 1" },
    { src: test4, alt: "Slide 2" },
    { src: test5, alt: "Slide 1" },
  ];
  const testimonialData = [
    {
      index: 1,
      review:
        "Thanks to WebContrive Technologies Pvt Ltd's efforts, a seamless product site without any glitches was created, resulting in doubled site traffic. The platform received favorable feedback from the client's principal team. The team was cooperative and knowledgeable throughout the partnership.",
      title: "Avishek Kumar",
      slide_img: nutribullet,
    },
    {
      index: 2,
      review:
        "Taking on challenging requests head-on, WebContrive showed off a 'Baby Care Product Manufacturer' attitude. They delivered a highly customizable solution and offered numerous design alternatives for the client to choose from. Providing daily reports and ensuring availability, their team was a breeze to work with.",
      title: "Baby Care Product Manufacturer",
      slide_img: softsens,
    },
    {
      index: 3,
      review:
        "The site successfully allows customers to browse and purchase products. Despite a time difference, WebContrive Technologies Pvt Ltd is communicative and easy to reach. Their team is knowledgable and dedicated.",
      title: "Arturo Silberstein",
      slide_img: risco,
    },
    {
      index: 4,
      review:
        "The finished e-commerce platform provides the perfect site through which to sell the company’s products, allowing them to grow and thrive as a business. The team managed the work well, responded to any request promptly and professionally, and completed the project quickly.",
      title: "Alan Silberstein",
      slide_img: organic,
    },
    {
      index: 5,
      review:
        "WebContrive provided timely service, eliminating a dated Magento 1 website and launching a unique and modern replacement. The team is flexible and communicative, making them an ideal partner. They are committed to customer satisfaction, evidenced by a willingness to meet every request.",
      title: "Sam Bauyumi",
      slide_img: vanvault,
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto w-full">
        <TestimonialSlider
          heading="Hear from our satisfied clients about their experience with us"
          subheading="Testimonials from Clients"
          testimonial={testimonial}
          testimonialData={testimonialData}
        />
      </div>
    </>
  );
}
