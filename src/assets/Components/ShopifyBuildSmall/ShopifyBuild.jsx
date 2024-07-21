import dimond from "../../../assets/Images/Dimond.svg";
import "./ShopifyBuild.css";
export default function ShopifyBuild({
  buildMainDiv,
  buildImgClass,
  buildTextClass,
  buildText,
  buildImg,
}) {
  return (
    <>
      <div class={`shopify_built ${buildMainDiv} `}>
        <span class={`app_image ${buildImgClass}`}>
          <img className={`${buildImg}`} src={dimond} alt="" />
        </span>
        <span class={`app_title`}>
          <p class={`app_title ${buildTextClass} `}>{buildText}</p>
        </span>
      </div>
    </>
  );
}
