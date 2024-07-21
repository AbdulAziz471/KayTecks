import dark_yellow from "../../Images/dark_yellow.svg";
import t1 from "../../Images/t1.jpg";
import t2 from "../../Images/t2.jpg";
import t4 from "../../Images/t4.jpg";
import AppsCard from "../AppsCard/AppsCard";
import "./AboutSlider.css";
export default function AboutSlider() {
  return (
    <>
      <div className=" left_scrolling_img flex flex-col gap-y-[12px]  overflow-hidden">
        <img src={t1} alt="" />
        <img src={t2} alt="" />
        <AppsCard
          mainCardDiv="!flex-row rounded-[4px]"
          imgClass="!p-0  rounded-[4px] "
          CardContantClass="py-[10px] pr-[20px] pl-[11px]  "
          imgSize="w-[80px] h-[80px] "
          titleClass=" font-semibold"
          ratingClass=""
          img={t1}
          title=" Rebolt Bundle & Upsell "
          rating="4.9 "
          totlePersons="1221"
        />
        <img src={t4} alt="" />
        <img src={t2} alt="" />
        <AppsCard
          mainCardDiv="!flex-row rounded-[4px]"
          imgClass="!p-0  rounded-[4px] "
          CardContantClass="py-[10px] pr-[20px] pl-[11px]  "
          imgSize="w-[80px] h-[80px] "
          titleClass=" font-semibold"
          ratingClass=""
          img={t1}
          title=" Rebolt Bundle & Upsell "
          rating="4.9 "
          totlePersons="1221"
        />
      </div>
    </>
  );
}
