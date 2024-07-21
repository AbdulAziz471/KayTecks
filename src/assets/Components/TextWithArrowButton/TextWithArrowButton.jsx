import "./TextWithArrowButton.css";
import { Link } from "react-router-dom";
export default function TextWithArrowButton(props) {
  return (
    <>
      <div
        className={`pt-[80px] pb-[80px] text-center flex flex-col justify-center items-center ${props.MainButtonClass}`}
      >
        <h2
          className={`text-[44px] leading-[56px ] tracking-[-.88px] font-bold ${props.HeadingClass}`}
        >
          {props.Heading}
        </h2>
        <p
          className={`  text-[#747474]  text-[17px] font-medium leading-[32px] tracking-[-.34px] max-w-[618px] w-full text-center pt-[20px] pb-[30px] ${props.ContantClass}`}
        >
          {props.content1}
          <span className="text-[#008060]">{props.mail}</span>
          {props.content2}
        </p>
        <Link
          to={props.to}
          className="btton-normal mx-auto w-[270px] flex items-center justify-center gap-x-[20px] font-bold"
        >
          {props.btn}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_6954_509)">
              <path
                d="M10.135 1.71656C10.1368 1.71834 10.1386 1.72016 10.1404 1.72198L15.7414 7.31561C15.7856 7.36005 15.8248 7.40916 15.8585 7.46205L15.9464 7.62311L15.983 7.73293L15.983 7.81348C16.0057 7.9369 16.0057 8.06343 15.983 8.18688L15.983 8.26008L15.983 8.34794L15.9171 8.47242C15.8794 8.54178 15.8326 8.60582 15.778 8.66279L10.1404 14.2784C9.76735 14.6544 9.16006 14.6569 8.78402 14.2838C8.7822 14.282 8.78042 14.2802 8.7786 14.2784C8.41694 13.8993 8.41694 13.303 8.7786 12.9239L12.1172 9.57796C12.2588 9.43361 12.2565 9.20182 12.1121 9.06028C12.0449 8.99442 11.955 8.95695 11.861 8.95564L0.959207 8.95564C0.429483 8.95568 4.16978e-05 8.5263 7.34241e-06 7.99658C-2.7013e-05 7.46685 0.429346 7.03745 0.95907 7.03738L0.959207 7.03738L11.861 7.03738C12.0631 7.03453 12.2247 6.86835 12.2219 6.66621C12.2205 6.57217 12.1831 6.48222 12.1172 6.41506L8.7786 3.08375C8.41227 2.70373 8.41227 2.10197 8.7786 1.72195C9.15166 1.34591 9.75894 1.34347 10.135 1.71656Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6954_509">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 16 16)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </Link>
        <span class="arrow-icon"></span>
      </div>
    </>
  );
}
