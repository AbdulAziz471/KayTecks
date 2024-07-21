import React, { useState } from "react";
import PricingCard from "../../Components/PricingCard/PriceingCard";
import "./PricingPlan.css";

export default function Pricingplan({
  pricingPlans,
  handleMonthlyClick,
  handleYearlyClick,
  isYear,
}) {
  return (
    <>
      <div className="bg-[#FDF9F1]">
        <div className="max-w-screen-2xl w-full mx-auto pt-[30px] lg:pt-[70px] pb-[30px] lg:pb-[80px]">
          <div className="flex items-center flex-col justify-center">
            <h2 className="text-[25px] lg:text-[44px] leading-[56px] tracking-[-.88px] font-semibold">
              PricingPlan
            </h2>
            <p className="text-[#555353] text-[17px] font-medium lg:pt-[15px] text-center">
              Choose the best plan for you and your organization.
            </p>
            <ul className="pricing_plan_sub">
              <span className="absolute right-[-30px] lg:right-[-110px] top-[-30px] lg:top-[-40px] flex gap-x-[9.5px]">
                <span className="pt-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="24"
                    viewBox="0 0 41 24"
                    fill="none"
                  >
                    <path
                      d="M4.95544 23.4394C5.19836 23.7402 5.63908 23.7871 5.93984 23.5442L10.8409 19.5856C11.1416 19.3427 11.1885 18.902 10.9456 18.6012C10.7027 18.3005 10.2619 18.2536 9.96119 18.4965L5.60472 22.0152L2.08604 17.6587C1.84312 17.358 1.40239 17.3111 1.10164 17.554C0.800889 17.7969 0.754003 18.2377 0.996918 18.5384L4.95544 23.4394ZM40.5323 0.300351C35.0391 0.0468204 26.673 0.854214 19.4005 4.12366C12.1072 7.40246 5.83833 13.2022 4.80393 22.9256L6.19607 23.0737C7.16167 13.997 12.9762 8.54675 19.9745 5.40056C26.9937 2.245 35.1276 1.45239 40.4677 1.69886L40.5323 0.300351Z"
                      fill="#008060"
                    ></path>
                  </svg>
                </span>
                <span className="per_text">Save 17% </span>
              </span>
              <li
                className={isYear === "Monthly Plan" ? "activesClass" : ""}
                onClick={handleMonthlyClick}
              >
                Monthly Plan
              </li>
              <li
                className={isYear === "Yearly Plan" ? "activesClass" : ""}
                onClick={handleYearlyClick}
              >
                Yearly Plan
              </li>
            </ul>
            <div className="grid gap-x-[36px] gap-y-[50px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  spanText={plan.spanText}
                  planPrice={plan.planPrice}
                  duration={plan.duration}
                  PlanProperties={plan.PlanProperties}
                  buttonText={plan.buttonText}
                  isYear={isYear}
                  SpanImg={plan.SpanImg}
                  SpanspanText={plan.SpanspanText}
                  SpanClass={plan.SpanClass}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
