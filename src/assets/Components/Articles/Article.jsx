import external from "../../Images/externalLink.svg";
const Article = ({
  b_img,
  b_title,
  b_date,
  articleimgClass,
  articleContentClass,
  titleClass,
}) => {
  return (
    <div className="bg-white p-[30px] lg:p-0 md:px-[30px]">
      <div>
        <a href="#">
          <img className={` ${articleimgClass} `} src={b_img} alt={b_title} />
        </a>
      </div>
      <div
        className={`px-[25px] py-[18px] hover:shadow-lg ${articleContentClass}`}
      >
        <div className="flex items-top">
          <p
            className={`text-[17px] leading-[30px] mt-[15px] font-bold ${titleClass}`}
          >
            {b_title}
          </p>
          <span>
            <img className="w-[30px]" src={external} alt="" />
          </span>
        </div>

        <div className="text-right pt-[12px] mt-[40px] border-t border-gray">
          {b_date && (
            <span className="text-[12px] leading-[13px] tracking-[-.03em] text-[#7c7c7c]">
              {b_date}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;
