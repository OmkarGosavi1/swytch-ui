import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import s from "./PitchDeck.module.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomCursor from "@components/common/CustomCursor";
import { useMediaQuery } from "react-responsive";
import DeviceIdentifier from "@components/ui/DeviceIdentifier";
// gsap.registerPlugin(ScrollTrigger);

const PitchDeck: FC = () => {
  // const textRef = useRef(null);
  // const arrowRef = useRef(null);
  // const sline = useRef(null);

  // const [direction, setdirection] = useState("up");
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  //   console.log(position);
  //   if (scrollPosition > 900) {
  //     setdirection("down");
  //   } else {
  //     setdirection("up");
  //   }
  // };

  // // useEffect(() => {
  // //   handleScroll();
  // // }, [scrollPosition]);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  // }, []);

  // useEffect(() => {
  //   const el = textRef.current;
  //   const arrow = arrowRef.current;
  //   const line = sline.current;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       id: `decentralized`,
  //       trigger: el,
  //       // start: 'top center+=500',
  //       toggleActions: "play none none reverse",
  //       start: "top bottom",
  //       end: "bottom 80px",
  //       scrub: true,
  //     },
  //   });

  //   const tl3 = gsap.timeline({
  //     scrollTrigger: {
  //       id: `decentralized`,
  //       trigger: line,
  //       // start: 'top center+=500',
  //       toggleActions: "play none none reverse",
  //       start: "top bottom-=200",
  //       end: "bottom 80px",
  //       scrub: true,
  //     },
  //   });

  //   const tl2 = gsap.timeline({
  //     scrollTrigger: {
  //       id: `decentralized`,
  //       trigger: arrow,
  //       // start: 'top center+=500',
  //       toggleActions: "play none none reverse",
  //       start: "top bottom+=400",
  //       end: "bottom 110px",
  //       scrub: true,
  //     },
  //   });
  //   tl.from(el, {
  //     opacity: 1,
  //     y: 0,
  //   }).add(function () {
  //     setdirection("up");
  //   });
  //   tl.to(el, {
  //     opacity: 0,
  //     // ease: "power2",
  //     // stagger: 0.1,
  //     y: 180,
  //   }).add(function () {
  //     setdirection("down");
  //   });
  //   tl2.from(arrow, {
  //     rotate: 0,
  //     // y: 0,
  //   });
  //   tl2.to(arrow, {
  //     rotate: 180,
  //   });
  //   tl3.from(line, {
  //     y: 0,
  //   });
  //   tl3.to(line, {
  //     y: 180,
  //   });
  // }, []);

  // const isBelowTablet = useMediaQuery({ query: "(max-width: 990px)" });
  // const isDesktop = useMediaQuery({ query: "(min-width: 990px)" });
  return (
    <>
      <div className={`${s.container} ${s.boxed}`} id="main">
        <CustomCursor />
        <div className={`${s.masthead}`}>
          <div className={s.robo1}>
            <Image
              src="/images/robo1.png"
              alt="image"
              layout="fill"
              quality={100}
              // objectFit="cover"
            />
          </div>

          <DeviceIdentifier isDesktop={true} isTablet={true}>
            <div className={`${s.linepart}`}>
              <div className={s.wrapper}>
                <Image
                  src="/images/Lline.png"
                  alt="image"
                  layout="fill"
                  // objectFit="cover"
                />
              </div>
            </div>
          </DeviceIdentifier>

          <DeviceIdentifier isMobile={true}>
            <div className={`${s.linepart}`}>
              <div className={s.wrapper}>
                <Image
                  src="/images/mob-line1.svg"
                  alt="image"
                  layout="fill"
                  // objectFit="cover"
                />
              </div>
            </div>
            <div className={`${s.mobline2Wrapper}`}>
              <div className={s.mobline2}>
                <Image
                  src="/images/mob-line2.svg"
                  alt="image"
                  layout="fill"
                  // objectFit="cover"
                />
              </div>
            </div>
          </DeviceIdentifier>
          {/* {isBelowTablet && (
            <>
              <div className={`${s.linepart}`}>
                <div className={s.wrapper}>
                  <Image
                    src="/images/mob-line1.svg"
                    alt="image"
                    layout="fill"
                    // objectFit="cover"
                  />
                </div>
              </div>
              <div className={`${s.mobline2Wrapper}`}>
                <div className={s.mobline2}>
                  <Image
                    src="/images/mob-line2.svg"
                    alt="image"
                    layout="fill"
                    // objectFit="cover"
                  />
                </div>
              </div>
            </>
          )} */}
          <div className={`${s.text} `}>
            <h2>
              <span className={s.orange}>Unlocking opportunities</span>
              <br />
              <span>one block at a time</span>
            </h2>
          </div>

          <div className={s.space}>
            <Image
              src="/images/orbit.png"
              alt="image"
              layout="fill"
              // objectFit="cover"
            />
          </div>

          <div className={s.bottom}></div>

          {/* {isDesktop && ( */}

          <DeviceIdentifier isDesktop={true} isTablet={true}>
            <div className={s.bottomline}>
              <Image src="/images/ULline.png" alt="image" layout="fill" />
            </div>
          </DeviceIdentifier>
          {/* )} */}
        </div>

        <div className={`${s.companyDetails}`}>
          <div className={s.robo2}>
            <Image
              src="/images/robo2.png"
              alt="image"
              layout="fill"
              // objectFit="cover"
            />
          </div>

          <DeviceIdentifier isDesktop={true} isTablet={true}>
            <div className={s.line1}>
              <Image
                src="/images/line21.png"
                alt="image"
                layout="fill"
                // objectFit="cover"
              />
            </div>

            <div className={s.line2}>
              <Image
                src="/images/line22.png"
                alt="image"
                layout="fill"
                // objectFit="cover"
              />
            </div>

            <div className={s.line3}>
              <Image
                src="/images/line23.png"
                alt="image"
                layout="fill"
                // objectFit="cover"
              />
            </div>
          </DeviceIdentifier>
          <DeviceIdentifier isMobile={true}>
            <div className={`${s.mobline2Wrapper2}`}>
              <div className={s.mobline2}>
                <Image
                  src="/images/mob-line2.svg"
                  alt="image"
                  layout="fill"
                  // objectFit="cover"
                />
              </div>
            </div>
          </DeviceIdentifier>
          <div className={`${s.title}`} id="companyDetails">
            <span>..Swytch</span>in
          </div>
          <div className={`${s.details}`}>
            {`Swytch is India's leading web3 company that helps to integrate
            futuristic blockchain technology into business and experience new
            forms of executing management and operations.`}
          </div>

          <DeviceIdentifier isMobile={true}>
            <div className={`${s.moblinelastWrapper}`}>
              <div className={s.mobline2}>
                <Image
                  src="/images/mob-line-last.svg"
                  alt="image"
                  layout="fill"
                  // objectFit="cover"
                />
              </div>
            </div>
          </DeviceIdentifier>
        </div>
      </div>
    </>
  );
};

export default PitchDeck;
