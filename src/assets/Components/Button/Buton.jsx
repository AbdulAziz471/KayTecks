// Button.js
import { Link } from "react-router-dom";
import "./button.css";

export default function Button({ btn, to, btnClass }) {
  return (
    <Link
      to={to}
      className={`btton-normal px-[32px] py-[12px] tracking-[0px] text-[15px] font-semibold ${btnClass}`}
    >
      {btn}
    </Link>
  );
}
