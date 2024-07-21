function TextCard(props) {
  return (
    <>
      <div className="mt-[-60px]  md:mt-[-90px] lg:mt-[-115px] relative z-10">
        <div className="pt-[20px] pb-[20px]">
          <div className="max-w-screen-2xl w-full mx-auto py-[15px]">
            <div className="flex justify-center lg:md:justify-normal  flex-wrap gap-[1.25rem] ">
              {props.TextCards.map((card, index) => (
                <div
                  key={index}
                  className="w-full px-[15px] lg:md:px-0 md:max-w-[284px] lg:max-w-[284px]"
                >
                  <div className="h-full pt-[20px] lg:pt-[30px] px-[30px] pb-[20px] md:pb-[30px] lg:pb-[40px] bg-white rounded-xl  shadow-xl ">
                    <h1 className="text-[28px] md:text-[38px] lg:text-[44px] leading-[36px] lg:leading-[56px] font-bold tracking-[-.02em] text-[#070707] mb-[6px]">
                      {card.title}
                    </h1>
                    <p className="font-medium text-[17px] leading-[30px]">
                      {card.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextCard;
