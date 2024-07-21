import "./AssocilateApps.css";
import adoric from "../../Images/adoric.svg";
import klaviyo from "../../Images/klaviyo.svg";
import pagefle from "../../Images/pagefly.svg";
import gempages from "../../Images/gempages.svg";
import BSS from "../../Images/BSS.svg";
import veda from "../../Images/Veda.svg";
import secomApp from "../../Images/secomApp.svg";
import Bon from "../../Images/BonLoyalty.svg";
import Stocvksync from "../../Images/Stocksync.svg";
import Apps from "../../Components/APP'S/Apps";
const AssociatedApps = () => {
  const appsData = [
    // Renamed the array
    { index: 1, img: adoric },
    { index: 2, img: klaviyo },
    { index: 3, img: pagefle },
    { index: 4, img: gempages },
    { index: 5, img: BSS },
    { index: 6, img: veda },
    { index: 7, img: secomApp },
    { index: 8, img: Bon },
    { index: 9, img: Stocvksync },
  ];
  return (
    <>
      <div>
        <Apps AppsImages={appsData} />
      </div>
    </>
  );
};

export default AssociatedApps;
