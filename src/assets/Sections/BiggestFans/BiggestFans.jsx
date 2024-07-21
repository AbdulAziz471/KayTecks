import TestimonialSlider from "../../Components/TestimonialSlider/TestimonialSlider";
import ItalianGroup from "../../Images/ItalianLuxuryGroup.svg";
import ItalianLogo from "../../Images/ItalianLogo.png";
import BrandWalk from "../../Images/BrandWalk.jpg";
import BrandWalkLogo from "../../Images/BrandWalkLogo.png";
import LifeEvolve from "../../Images/LifeEvolve.jpg";
import LifeEvolveLogo from "../../Images/LifeEvolveLogo.jpg";
import nutribullet from "../../Images/nutribullet.svg";

export default function BiggestFans() {
  const testimonial = [
    { src: ItalianGroup, alt: "Slide 1" },
    { src: BrandWalk, alt: "Slide 2" },
    { src: LifeEvolve, alt: "Slide 1" },
  ];
  const testimonialData = [
    {
      index: 1,
      review:
        "We updated our theme and the app stopped working and we didn't understand why. We wrote to their developers and within 2 hours they fixed everything. Excellent and professional fast service, I recommend this app to everyone.",
      title: "Italian Luxury Group",
      slide_img: ItalianLogo,
    },
    {
      index: 2,
      review:
        "I appreciate the review and Q&A sections in this app, which allow for effective communication with customers. The responsiveness of Rivyo's customer service and development team is commendable, as they promptly address any bugs that arise. During my two years of using this app, we encountered only one bug, which was swiftly resolved within a day.",
      title: "BrandsWalk",
      slide_img: BrandWalkLogo,
    },
    {
      index: 3,
      review:
        "Honestly super easy. Very similar to Amazon reviews so there's a lot of familiar functions people are used to. Their support has to be top notch. We've had a couple different support issues and these guys resolve them with half an hour. They do a great job changing code around to suit our stores needs. Definitely worth the money. Very comprehensive app.",
      title: "Live Evolved",
      slide_img: LifeEvolveLogo,
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto w-full">
        <TestimonialSlider
          heading="Hear from Our App's Biggest Fans!"
          subheading="Utilizing Reviews Efficiently"
          testimonial={testimonial}
          testimonialData={testimonialData}
        />
      </div>
    </>
  );
}
