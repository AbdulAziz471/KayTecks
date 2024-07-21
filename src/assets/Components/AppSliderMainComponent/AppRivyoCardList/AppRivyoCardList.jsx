import AppRivyoCard from "../AppRivyoCard/AppRivyoCard";
import pageflylogo from "../../../Images/pageflylogo.png";

const AppRivyoCardList = (props) => {
  return (
    <>
      <div>
        <div className=" w-full mx-auto">
          <div className="grid  grid-rows-2  gap-x-[20px]">
            {props.data.map((item, index) => (
              <AppRivyoCard key={index} image={item.image} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppRivyoCardList;
