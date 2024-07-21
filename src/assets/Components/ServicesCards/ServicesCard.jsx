import "./ServiceCard.css";
const ServicesCard = (props) => {
  return (
    <>
      <div
        className={` p-[20px] md:p-[30]lg:p-[45px]   relative ${props.mainClass}`}
      >
        {props.img && (
          <span
            className={`bg-white inline-block p-[14px] rounded-md shadow-md ${props.imgClass}`}
          >
            <img
              style={{ color: "red !important" }}
              className="max-w-[46px] text-purple-500 "
              src={props.img}
              alt=""
            />
          </span>
        )}

        <div className={`mt-[21px]   ${props.textDiv} `}>
          <h1
            className={`pb-[19px] leading-[30px] tracking-[-.02em] whitespace-pre-line font-bold ${props.mainHeadingClass}`}
          >
            {props.title}
          </h1>
          <p
            className={`leading-[30px] tracking-[-.02em] text-[16px] ${props.contentClass}`}
          >
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
