import useMouse from "@react-hook/mouse-position";
import { FC, useContext } from "react";
import { MouseContext } from "../../../context/mouse-context";
import s from "./CustomCursor.module.scss";

const CustomCursor: FC = () => {
  let rootNode = null;
  if (typeof document !== "undefined") {
    rootNode = document.getElementById("__next");
  }
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const mouse = useMouse(rootNode, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  return (
    <>
      {/* <div
        style={{ left: `${mouse.x}px`, top: `${mouse.y}px` }}
        className={s.ring}
      ></div> */}
      <div
        className={`${s.cursor} ${s[cursorType]}`}
        style={{ left: `${mouse.clientX}px`, top: `${mouse.clientY}px` }}
      >
        <svg
          width="691"
          height="552"
          viewBox="0 0 691 552"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1235_330)">
            <circle
              cx="345.5"
              cy="345.5"
              r="193.5"
              fill="url(#paint0_linear_1235_330)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1235_330"
              x="0.262589"
              y="0.262589"
              width="690.475"
              height="690.475"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75.8687"
                result="effect1_foregroundBlur_1235_330"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1235_330"
              x1="345.5"
              y1="152"
              x2="345.5"
              y2="539"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FE621D" />
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;
