const AppRivyoCard = ({ image, title, link }) => {
  return (
    <>
      <div className="mb-[30px]">
        <div className="flex items-center max-w-[294px] w-full rounded-[8px] border gap-[17px] border-gray-200 hover:shadow-[8px_8px_22px_-9px_#0003] hover:border-transparent transition-all duration-300 ">
          <div className="max-w-[90px] w-full">
            <a href={link}>
              <img
                className="w-[90px] h-[90px] object-scale-down overflow-hidden max-w-full "
                src={image}
                alt=""
              />
            </a>
          </div>
          <div>
            <a href={link}>
              <p className="text-[17px ] font-semibold leading-[26px] pr-[17px]">
                {title}
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppRivyoCard;
